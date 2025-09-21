import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import connectDB from '@/lib/mongodb'
import Payment from '@/models/Payment'
import Enrollment from '@/models/Enrollment'
import User from '@/models/User'

const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.text()
    const signature = request.headers.get('x-razorpay-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    // Verify webhook signature
    const expectedSignature = createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex')

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    const event = JSON.parse(body)

    if (event.event === 'payment.captured') {
      const { order_id, payment_id } = event.payload.payment.entity

      // Find payment record
      const payment = await Payment.findOne({ gatewayOrderId: order_id })
      if (!payment) {
        return NextResponse.json(
          { error: 'Payment not found' },
          { status: 404 }
        )
      }

      // Update payment status
      payment.status = 'completed'
      payment.paymentStatus = 'paid'
      payment.gatewayPaymentId = payment_id
      await payment.save()

      // Update enrollment status
      const enrollment = await Enrollment.findById(payment.enrollment)
      if (enrollment) {
        enrollment.status = 'active'
        enrollment.paymentStatus = 'paid'
        enrollment.paymentId = payment._id
        enrollment.startDate = new Date()
        await enrollment.save()
      }

      // Update instructor earnings
      const instructor = await User.findById(payment.instructor)
      if (instructor) {
        instructor.totalEarnings += payment.amount
        await instructor.save()
      }

      return NextResponse.json({ message: 'Payment verified successfully' })
    }

    return NextResponse.json({ message: 'Event processed' })

  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Manual verification endpoint (for testing)
export async function PUT(request: NextRequest) {
  try {
    await connectDB()
    
    const { paymentId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = await request.json()

    if (!paymentId || !razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      return NextResponse.json(
        { error: 'All payment details are required' },
        { status: 400 }
      )
    }

    // Verify signature
    const body = razorpayOrderId + '|' + razorpayPaymentId
    const expectedSignature = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex')

    if (razorpaySignature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Find and update payment
    const payment = await Payment.findById(paymentId)
    if (!payment) {
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      )
    }

    payment.status = 'completed'
    payment.paymentStatus = 'paid'
    payment.gatewayPaymentId = razorpayPaymentId
    payment.gatewaySignature = razorpaySignature
    await payment.save()

    // Update enrollment
    const enrollment = await Enrollment.findById(payment.enrollment)
    if (enrollment) {
      enrollment.status = 'active'
      enrollment.paymentStatus = 'paid'
      enrollment.paymentId = payment._id
      enrollment.startDate = new Date()
      await enrollment.save()
    }

    // Update instructor earnings
    const instructor = await User.findById(payment.instructor)
    if (instructor) {
      instructor.totalEarnings += payment.amount
      await instructor.save()
    }

    return NextResponse.json({ 
      message: 'Payment verified successfully',
      payment 
    })

  } catch (error) {
    console.error('Manual payment verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

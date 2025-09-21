import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import connectDB from '@/lib/mongodb'
import Payment from '@/models/Payment'
import Enrollment from '@/models/Enrollment'
import Skill from '@/models/Skill'
import User from '@/models/User'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { enrollmentId } = await request.json()

    if (!enrollmentId) {
      return NextResponse.json(
        { error: 'Enrollment ID is required' },
        { status: 400 }
      )
    }

    // Get enrollment details
    const enrollment = await Enrollment.findById(enrollmentId)
      .populate('student', 'fullName email')
      .populate('instructor', 'fullName email')
      .populate('skill', 'title price')

    if (!enrollment) {
      return NextResponse.json(
        { error: 'Enrollment not found' },
        { status: 404 }
      )
    }

    if (enrollment.paymentStatus === 'paid') {
      return NextResponse.json(
        { error: 'Payment already completed' },
        { status: 400 }
      )
    }

    // Create Razorpay order
    const orderOptions = {
      amount: enrollment.amount * 100, // Convert to paise
      currency: enrollment.currency,
      receipt: `enrollment_${enrollmentId}`,
      notes: {
        enrollmentId: enrollmentId,
        studentId: enrollment.student._id,
        instructorId: enrollment.instructor._id,
        skillId: enrollment.skill._id,
        studentName: enrollment.student.fullName,
        instructorName: enrollment.instructor.fullName,
        skillTitle: enrollment.skill.title
      }
    }

    const razorpayOrder = await razorpay.orders.create(orderOptions)

    // Create payment record
    const payment = new Payment({
      enrollment: enrollmentId,
      student: enrollment.student._id,
      instructor: enrollment.instructor._id,
      skill: enrollment.skill._id,
      amount: enrollment.amount,
      currency: enrollment.currency,
      paymentMethod: 'razorpay',
      paymentGateway: 'razorpay',
      gatewayOrderId: razorpayOrder.id,
      status: 'pending',
      metadata: {
        studentEmail: enrollment.student.email,
        instructorEmail: enrollment.instructor.email,
        skillTitle: enrollment.skill.title,
        studentName: enrollment.student.fullName,
        instructorName: enrollment.instructor.fullName
      }
    })

    await payment.save()

    return NextResponse.json({
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      paymentId: payment._id
    })

  } catch (error) {
    console.error('Create order error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

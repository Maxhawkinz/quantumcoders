import mongoose, { Document, Schema } from 'mongoose'

export interface IPayment extends Document {
  _id: string
  enrollment: string // Enrollment ID
  student: string // User ID
  instructor: string // User ID
  skill: string // Skill ID
  amount: number
  currency: string
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'refunded'
  paymentMethod: 'razorpay' | 'stripe' | 'upi' | 'card' | 'netbanking'
  paymentGateway: 'razorpay' | 'stripe'
  gatewayPaymentId?: string
  gatewayOrderId?: string
  gatewaySignature?: string
  refundId?: string
  refundAmount?: number
  refundReason?: string
  refundedAt?: Date
  failureReason?: string
  metadata: {
    studentEmail: string
    instructorEmail: string
    skillTitle: string
    studentName: string
    instructorName: string
  }
  createdAt: Date
  updatedAt: Date
}

const PaymentSchema: Schema = new Schema({
  enrollment: {
    type: Schema.Types.ObjectId,
    ref: 'Enrollment',
    required: true
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['razorpay', 'stripe', 'upi', 'card', 'netbanking'],
    required: true
  },
  paymentGateway: {
    type: String,
    enum: ['razorpay', 'stripe'],
    required: true
  },
  gatewayPaymentId: {
    type: String
  },
  gatewayOrderId: {
    type: String
  },
  gatewaySignature: {
    type: String
  },
  refundId: {
    type: String
  },
  refundAmount: {
    type: Number,
    min: 0
  },
  refundReason: {
    type: String
  },
  refundedAt: {
    type: Date
  },
  failureReason: {
    type: String
  },
  metadata: {
    studentEmail: {
      type: String,
      required: true
    },
    instructorEmail: {
      type: String,
      required: true
    },
    skillTitle: {
      type: String,
      required: true
    },
    studentName: {
      type: String,
      required: true
    },
    instructorName: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
})

// Indexes for faster queries
PaymentSchema.index({ enrollment: 1 })
PaymentSchema.index({ student: 1 })
PaymentSchema.index({ instructor: 1 })
PaymentSchema.index({ skill: 1 })
PaymentSchema.index({ status: 1 })
PaymentSchema.index({ gatewayPaymentId: 1 })
PaymentSchema.index({ gatewayOrderId: 1 })
PaymentSchema.index({ createdAt: -1 })

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema)

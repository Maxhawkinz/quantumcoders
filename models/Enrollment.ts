import mongoose, { Document, Schema } from 'mongoose'

export interface IEnrollment extends Document {
  _id: string
  student: string // User ID
  skill: string // Skill ID
  instructor: string // User ID
  status: 'pending' | 'active' | 'completed' | 'cancelled' | 'refunded'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentId?: string
  amount: number
  currency: string
  enrolledAt: Date
  startDate?: Date
  endDate?: Date
  completionDate?: Date
  progress: number // 0-100
  attendance: {
    sessionId: string
    attended: boolean
    date: Date
  }[]
  assignments: {
    assignmentId: string
    title: string
    description: string
    dueDate: Date
    submitted: boolean
    submittedAt?: Date
    grade?: number
    feedback?: string
  }[]
  certificate?: string // Certificate URL
  notes: string
  createdAt: Date
  updatedAt: Date
}

const EnrollmentSchema: Schema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled', 'refunded'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentId: {
    type: String
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
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  completionDate: {
    type: Date
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  attendance: [{
    sessionId: {
      type: String,
      required: true
    },
    attended: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      required: true
    }
  }],
  assignments: [{
    assignmentId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    submitted: {
      type: Boolean,
      default: false
    },
    submittedAt: {
      type: Date
    },
    grade: {
      type: Number,
      min: 0,
      max: 100
    },
    feedback: {
      type: String
    }
  }],
  certificate: {
    type: String
  },
  notes: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true
})

// Indexes for faster queries
EnrollmentSchema.index({ student: 1 })
EnrollmentSchema.index({ skill: 1 })
EnrollmentSchema.index({ instructor: 1 })
EnrollmentSchema.index({ status: 1 })
EnrollmentSchema.index({ paymentStatus: 1 })
EnrollmentSchema.index({ enrolledAt: -1 })

// Compound indexes
EnrollmentSchema.index({ student: 1, skill: 1 }, { unique: true })
EnrollmentSchema.index({ student: 1, status: 1 })
EnrollmentSchema.index({ instructor: 1, status: 1 })

export default mongoose.models.Enrollment || mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema)

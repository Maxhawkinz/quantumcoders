import mongoose, { Document, Schema } from 'mongoose'

export interface IReview extends Document {
  _id: string
  enrollment: string // Enrollment ID
  student: string // User ID
  instructor: string // User ID
  skill: string // Skill ID
  rating: number // 1-5
  title: string
  comment: string
  isVerified: boolean
  helpful: number
  reported: boolean
  createdAt: Date
  updatedAt: Date
}

const ReviewSchema: Schema = new Schema({
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
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  comment: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  helpful: {
    type: Number,
    default: 0
  },
  reported: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

// Indexes for faster queries
ReviewSchema.index({ enrollment: 1 })
ReviewSchema.index({ student: 1 })
ReviewSchema.index({ instructor: 1 })
ReviewSchema.index({ skill: 1 })
ReviewSchema.index({ rating: 1 })
ReviewSchema.index({ createdAt: -1 })

// Compound indexes
ReviewSchema.index({ enrollment: 1, student: 1 }, { unique: true })
ReviewSchema.index({ skill: 1, rating: 1 })

export default mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema)

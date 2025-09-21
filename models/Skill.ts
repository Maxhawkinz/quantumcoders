import mongoose, { Document, Schema } from 'mongoose'

export interface ISkill extends Document {
  _id: string
  title: string
  description: string
  instructor: string // User ID
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  price: number
  currency: string
  availability: string
  tags: string[]
  prerequisites: string[]
  learningOutcomes: string[]
  maxStudents: number
  currentStudents: number
  rating: number
  totalRatings: number
  reviews: string[] // Review IDs
  isActive: boolean
  isApproved: boolean
  thumbnail?: string
  images: string[]
  schedule: {
    startDate: Date
    endDate: Date
    sessions: {
      day: string
      time: string
      duration: number // in minutes
    }[]
  }
  createdAt: Date
  updatedAt: Date
}

const SkillSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 1000
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['coding', 'design', 'languages', 'music', 'photography', 'fitness', 'other']
  },
  level: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR'
  },
  availability: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  prerequisites: [{
    type: String,
    trim: true
  }],
  learningOutcomes: [{
    type: String,
    trim: true
  }],
  maxStudents: {
    type: Number,
    default: 20,
    min: 1,
    max: 50
  },
  currentStudents: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalRatings: {
    type: Number,
    default: 0
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  thumbnail: {
    type: String
  },
  images: [{
    type: String
  }],
  schedule: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    sessions: [{
      day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      time: {
        type: String
      },
      duration: {
        type: Number,
        default: 60
      }
    }]
  }
}, {
  timestamps: true
})

// Indexes for faster queries
SkillSchema.index({ category: 1 })
SkillSchema.index({ level: 1 })
SkillSchema.index({ instructor: 1 })
SkillSchema.index({ isActive: 1, isApproved: 1 })
SkillSchema.index({ price: 1 })
SkillSchema.index({ rating: -1 })
SkillSchema.index({ tags: 1 })

export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema)
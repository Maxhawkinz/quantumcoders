import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  _id: string
  email: string
  password: string
  fullName: string
  studentId: string
  department: string
  academicYear: string
  phoneNumber?: string
  profilePicture?: string
  bio?: string
  isVerified: boolean
  verificationStatus: 'pending' | 'verified' | 'rejected'
  verificationDocuments?: {
    idCard: string
    additionalDocuments?: string[]
  }
  skills: string[] // Array of skill IDs they can teach
  enrolledSkills: string[] // Array of skill IDs they're enrolled in
  badges: string[] // Array of badge IDs earned
  rating: number
  totalStudents: number
  totalEarnings: number
  isActive: boolean
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[A-Za-z0-9._%+-]+@nmiet\.edu\.in$/, 'Must use NMIET email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    enum: [
      'Computer Engineering',
      'Information Technology',
      'Electronics & Telecommunication',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Electrical Engineering',
      'Other'
    ]
  },
  academicYear: {
    type: String,
    required: true,
    enum: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Post Graduate', 'PhD']
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  profilePicture: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    maxlength: 500
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  verificationDocuments: {
    idCard: String,
    additionalDocuments: [String]
  },
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  enrolledSkills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  badges: [{
    type: Schema.Types.ObjectId,
    ref: 'Badge'
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalStudents: {
    type: Number,
    default: 0
  },
  totalEarnings: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true
})

// Index for faster queries
UserSchema.index({ email: 1 })
UserSchema.index({ studentId: 1 })
UserSchema.index({ isVerified: 1 })
UserSchema.index({ department: 1 })

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

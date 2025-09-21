import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { email, password, fullName, studentId, department, academicYear, phoneNumber } = await request.json()

    // Validation
    if (!email || !password || !fullName || !studentId || !department || !academicYear) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { studentId }]
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email or student ID already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      fullName,
      studentId,
      department,
      academicYear,
      phoneNumber: phoneNumber || undefined
    })

    await user.save()

    // Return user without password
    const { password: _, ...userWithoutPassword } = user.toObject()

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

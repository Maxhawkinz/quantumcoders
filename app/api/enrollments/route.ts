import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Enrollment from '@/models/Enrollment'
import Skill from '@/models/Skill'
import User from '@/models/User'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get('studentId')
    const instructorId = searchParams.get('instructorId')
    const status = searchParams.get('status')

    // Build query
    const query: any = {}
    
    if (studentId) query.student = studentId
    if (instructorId) query.instructor = instructorId
    if (status) query.status = status

    const enrollments = await Enrollment.find(query)
      .populate('student', 'fullName email profilePicture')
      .populate('instructor', 'fullName email profilePicture')
      .populate('skill', 'title category level price')
      .sort({ createdAt: -1 })

    return NextResponse.json({ enrollments })

  } catch (error) {
    console.error('Get enrollments error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { studentId, skillId } = await request.json()

    // Validation
    if (!studentId || !skillId) {
      return NextResponse.json(
        { error: 'Student ID and Skill ID are required' },
        { status: 400 }
      )
    }

    // Check if student exists
    const student = await User.findById(studentId)
    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      )
    }

    // Check if skill exists and is available
    const skill = await Skill.findById(skillId)
    if (!skill) {
      return NextResponse.json(
        { error: 'Skill not found' },
        { status: 404 }
      )
    }

    if (!skill.isActive || !skill.isApproved) {
      return NextResponse.json(
        { error: 'Skill is not available for enrollment' },
        { status: 400 }
      )
    }

    if (skill.currentStudents >= skill.maxStudents) {
      return NextResponse.json(
        { error: 'Skill is full' },
        { status: 400 }
      )
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      student: studentId,
      skill: skillId
    })

    if (existingEnrollment) {
      return NextResponse.json(
        { error: 'Already enrolled in this skill' },
        { status: 400 }
      )
    }

    // Create enrollment
    const enrollment = new Enrollment({
      student: studentId,
      skill: skillId,
      instructor: skill.instructor,
      amount: skill.price,
      currency: skill.currency
    })

    await enrollment.save()

    // Update skill student count
    skill.currentStudents += 1
    await skill.save()

    // Add to student's enrolled skills
    student.enrolledSkills.push(skillId)
    await student.save()

    // Populate the enrollment for response
    await enrollment.populate([
      { path: 'student', select: 'fullName email profilePicture' },
      { path: 'instructor', select: 'fullName email profilePicture' },
      { path: 'skill', select: 'title category level price' }
    ])

    return NextResponse.json(
      { 
        message: 'Enrollment created successfully',
        enrollment
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Create enrollment error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Skill from '@/models/Skill'
import User from '@/models/User'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const level = searchParams.get('level')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const sortBy = searchParams.get('sortBy') || 'createdAt'

    // Build query
    const query: any = { isActive: true, isApproved: true }

    if (category && category !== 'all') {
      query.category = category
    }

    if (level) {
      query.level = level
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }

    // Build sort
    let sort: any = { createdAt: -1 }
    switch (sortBy) {
      case 'rating':
        sort = { rating: -1 }
        break
      case 'students':
        sort = { currentStudents: -1 }
        break
      case 'price':
        sort = { price: 1 }
        break
      case 'popularity':
        sort = { currentStudents: -1, rating: -1 }
        break
    }

    // Execute query
    const skills = await Skill.find(query)
      .populate('instructor', 'fullName email rating profilePicture')
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)

    const total = await Skill.countDocuments(query)

    return NextResponse.json({
      skills,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get skills error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { title, description, category, level, duration, price, availability, tags, prerequisites, learningOutcomes, instructorId } = body

    // Validation
    if (!title || !description || !category || !level || !duration || !price || !instructorId) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Verify instructor exists and is verified
    const instructor = await User.findById(instructorId)
    if (!instructor) {
      return NextResponse.json(
        { error: 'Instructor not found' },
        { status: 404 }
      )
    }

    if (!instructor.isVerified) {
      return NextResponse.json(
        { error: 'Your account must be verified before you can share skills' },
        { status: 403 }
      )
    }

    // Create skill
    const skill = new Skill({
      title,
      description,
      instructor: instructorId,
      category,
      level,
      duration,
      price: parseFloat(price),
      availability,
      tags: tags || [],
      prerequisites: prerequisites || [],
      learningOutcomes: learningOutcomes || []
    })

    await skill.save()

    // Add skill to instructor's skills array
    instructor.skills.push(skill._id)
    await instructor.save()

    return NextResponse.json(
      { 
        message: 'Skill created successfully',
        skill
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Create skill error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
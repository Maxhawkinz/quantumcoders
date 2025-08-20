'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  Heart,
  MessageCircle,
  Calendar
} from 'lucide-react'
import toast from 'react-hot-toast'

interface Skill {
  id: number
  title: string
  instructor: string
  category: string
  rating: number
  students: number
  duration: string
  price: string
  image: string
  description: string
  tags: string[]
}

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isEnrolled, setIsEnrolled] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites')
  }

  const handleEnroll = () => {
    setIsEnrolled(true)
    toast.success('Successfully enrolled! Check your dashboard for details.')
  }

  const handleContact = () => {
    toast.success('Message sent to instructor!')
  }

  return (
    <motion.div 
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{skill.image}</div>
        <button
          onClick={handleLike}
          className={`p-2 rounded-full transition-colors duration-200 ${
            isLiked 
              ? 'text-red-500 bg-red-50' 
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Title and Instructor */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
        {skill.title}
      </h3>
      <p className="text-gray-600 mb-3">by {skill.instructor}</p>

      {/* Rating and Students */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{skill.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Users className="w-4 h-4" />
          <span className="text-sm">{skill.students} students</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{skill.duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {skill.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skill.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price and Actions */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-primary-600">
          {skill.price}
        </div>
        
        <div className="flex gap-2">
          {!isEnrolled ? (
            <>
              <button
                onClick={handleContact}
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                title="Contact Instructor"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                onClick={handleEnroll}
                className="btn-primary text-sm py-2 px-4"
              >
                Enroll Now
              </button>
            </>
          ) : (
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
              Enrolled ✓
            </button>
          )}
        </div>
      </div>

      {/* Quick Info */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Next session: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  )
}

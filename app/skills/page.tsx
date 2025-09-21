'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  BookOpen,
  Code,
  Palette,
  Globe,
  Music,
  Camera,
  Dumbbell,
  Plus
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkillCard from '@/components/SkillCard'
import CategoryFilter from '@/components/CategoryFilter'

export default function SkillsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')

  const categories = [
    { id: 'all', name: 'All Skills', icon: <BookOpen className="w-5 h-5" />, count: 156 },
    { id: 'coding', name: 'Programming', icon: <Code className="w-5 h-5" />, count: 45 },
    { id: 'design', name: 'Design', icon: <Palette className="w-5 h-5" />, count: 32 },
    { id: 'languages', name: 'Languages', icon: <Globe className="w-5 h-5" />, count: 28 },
    { id: 'music', name: 'Music', icon: <Music className="w-5 h-5" />, count: 18 },
    { id: 'photography', name: 'Photography', icon: <Camera className="w-5 h-5" />, count: 15 },
    { id: 'fitness', name: 'Fitness', icon: <Dumbbell className="w-5 h-5" />, count: 18 },
  ]

  const skills = [
    {
      id: 1,
      title: 'Python Programming Basics',
      instructor: 'Priya Sharma',
      category: 'coding',
      rating: 4.8,
      students: 45,
      duration: '6 weeks',
      price: '₹500',
      image: '🐍',
      description: 'Learn Python fundamentals from scratch. Perfect for beginners!',
      tags: ['Beginner', 'Programming', 'Python']
    },
    {
      id: 2,
      title: 'Digital Art & Illustration',
      instructor: 'Anjali Patel',
      category: 'design',
      rating: 4.9,
      students: 38,
      duration: '8 weeks',
      price: '₹800',
      image: '🎨',
      description: 'Master digital drawing techniques using Procreate and Photoshop.',
      tags: ['Intermediate', 'Design', 'Digital Art']
    },
    {
      id: 3,
      title: 'Spanish Conversation',
      instructor: 'Carlos Rodriguez',
      category: 'languages',
      rating: 4.7,
      students: 52,
      duration: '10 weeks',
      price: '₹600',
      image: '🇪🇸',
      description: 'Learn to speak Spanish fluently through practical conversations.',
      tags: ['Beginner', 'Language', 'Spanish']
    },
    {
      id: 4,
      title: 'Guitar for Beginners',
      instructor: 'Rahul Kumar',
      category: 'music',
      rating: 4.6,
      students: 29,
      duration: '12 weeks',
      price: '₹700',
      image: '🎸',
      description: 'Start your musical journey with acoustic guitar basics.',
      tags: ['Beginner', 'Music', 'Guitar']
    },
    {
      id: 5,
      title: 'Web Development with React',
      instructor: 'Amit Singh',
      category: 'coding',
      rating: 4.9,
      students: 67,
      duration: '10 weeks',
      price: '₹900',
      image: '⚛️',
      description: 'Build modern web applications using React and modern JavaScript.',
      tags: ['Advanced', 'Programming', 'React']
    },
    {
      id: 6,
      title: 'Photography Fundamentals',
      instructor: 'Neha Desai',
      category: 'photography',
      rating: 4.5,
      students: 34,
      duration: '6 weeks',
      price: '₹600',
      image: '📸',
      description: 'Learn composition, lighting, and camera settings for great photos.',
      tags: ['Beginner', 'Photography', 'Camera']
    }
  ]

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedSkills = [...filteredSkills].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'students':
        return b.students - a.students
      case 'price':
        return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''))
      default:
        return b.students - a.students // popularity
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Learn New Skills
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
          >
            Discover amazing skills from your fellow NMIET students. From coding to music, 
            there's something for everyone to learn and grow.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => router.push('/share-skill')}
              className="btn-accent flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Share Your Skill
            </button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="students">Most Students</option>
                  <option value="price">Price: Low to High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredSkills.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No skills found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  {filteredSkills.length} Skills Available
                </h2>
                <p className="text-gray-600">
                  Showing {filteredSkills.length} of {skills.length} skills
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

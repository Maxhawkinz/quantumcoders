'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Trophy, 
  Star, 
  Target, 
  Users, 
  BookOpen,
  ShoppingBag,
  MessageCircle,
  TrendingUp,
  Zap,
  Heart,
  Crown
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BadgesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Badges', icon: <Award className="w-5 h-5" /> },
    { id: 'learning', name: 'Learning', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'teaching', name: 'Teaching', icon: <Users className="w-5 h-5" /> },
    { id: 'trading', name: 'Trading', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'community', name: 'Community', icon: <MessageCircle className="w-5 h-5" /> },
  ]

  const badges = [
    {
      id: 1,
      name: 'First Steps',
      description: 'Complete your first skill lesson',
      category: 'learning',
      icon: '🎯',
      rarity: 'common',
      earned: true,
      progress: 100,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Knowledge Seeker',
      description: 'Complete 10 different skill lessons',
      category: 'learning',
      icon: '📚',
      rarity: 'rare',
      earned: true,
      progress: 100,
      date: '2024-02-20'
    },
    {
      id: 3,
      name: 'Skill Master',
      description: 'Complete 50 skill lessons',
      category: 'learning',
      icon: '👑',
      rarity: 'epic',
      earned: false,
      progress: 68,
      date: null
    },
    {
      id: 4,
      name: 'Mentor',
      description: 'Teach your first skill to another student',
      category: 'teaching',
      icon: '🎓',
      rarity: 'rare',
      earned: true,
      progress: 100,
      date: '2024-01-30'
    },
    {
      id: 5,
      name: 'Expert Teacher',
      description: 'Teach 20 students successfully',
      category: 'teaching',
      icon: '🏆',
      rarity: 'epic',
      earned: false,
      progress: 45,
      date: null
    },
    {
      id: 6,
      name: 'Marketplace Newbie',
      description: 'Make your first sale or purchase',
      category: 'trading',
      icon: '💰',
      rarity: 'common',
      earned: true,
      progress: 100,
      date: '2024-02-05'
    },
    {
      id: 7,
      name: 'Trusted Trader',
      description: 'Complete 25 successful transactions',
      category: 'trading',
      icon: '🤝',
      rarity: 'rare',
      earned: false,
      progress: 16,
      date: null
    },
    {
      id: 8,
      name: 'Community Builder',
      description: 'Start 10 meaningful discussions',
      category: 'community',
      icon: '🏗️',
      rarity: 'epic',
      earned: false,
      progress: 7,
      date: null
    },
    {
      id: 9,
      name: 'Helpful Hand',
      description: 'Receive 50 helpful votes on your posts',
      category: 'community',
      icon: '🤲',
      rarity: 'rare',
      earned: false,
      progress: 32,
      date: null
    },
    {
      id: 10,
      name: 'Early Adopter',
      description: 'Join the platform in the first month',
      category: 'all',
      icon: '🚀',
      rarity: 'legendary',
      earned: true,
      progress: 100,
      date: '2024-01-01'
    }
  ]

  const stats = {
    totalBadges: badges.length,
    earnedBadges: badges.filter(b => b.earned).length,
    completionRate: Math.round((badges.filter(b => b.earned).length / badges.length) * 100),
    totalPoints: badges.filter(b => b.earned).reduce((sum, b) => {
      switch (b.rarity) {
        case 'common': return sum + 10
        case 'rare': return sum + 25
        case 'epic': return sum + 50
        case 'legendary': return sum + 100
        default: return sum
      }
    }, 0)
  }

  const filteredBadges = selectedCategory === 'all' 
    ? badges 
    : badges.filter(b => b.category === selectedCategory)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-700 border-gray-300'
      case 'rare': return 'bg-blue-100 text-blue-700 border-blue-300'
      case 'epic': return 'bg-purple-100 text-purple-700 border-purple-300'
      case 'legendary': return 'bg-yellow-100 text-yellow-700 border-yellow-300'
      default: return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common': return <Star className="w-4 h-4" />
      case 'rare': return <Star className="w-4 h-4 fill-current" />
      case 'epic': return <Trophy className="w-4 h-4" />
      case 'legendary': return <Crown className="w-4 h-4" />
      default: return <Star className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Achievements & Badges
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto"
          >
            Track your progress, earn badges, and showcase your achievements 
            as you learn, teach, and contribute to the NMIET community.
          </motion.p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stats.totalBadges}</div>
              <div className="text-gray-600">Total Badges</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stats.earnedBadges}</div>
              <div className="text-gray-600">Earned Badges</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stats.completionRate}%</div>
              <div className="text-gray-600">Completion Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stats.totalPoints}</div>
              <div className="text-gray-600">Total Points</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card p-6 text-center ${
                  badge.earned ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {/* Badge Icon */}
                <div className="text-6xl mb-4">{badge.icon}</div>
                
                {/* Badge Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{badge.name}</h3>
                <p className="text-gray-600 mb-4">{badge.description}</p>
                
                {/* Rarity */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-4 ${getRarityColor(badge.rarity)}`}>
                  {getRarityIcon(badge.rarity)}
                  {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                </div>
                
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{badge.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${badge.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Status */}
                {badge.earned ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                    <Trophy className="w-5 h-5" />
                    Earned on {new Date(badge.date!).toLocaleDateString()}
                  </div>
                ) : (
                  <div className="text-gray-500">
                    {badge.progress}% Complete
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Heart,
  Share2,
  Bookmark,
  MoreHorizontal,
  Send,
  ThumbsUp,
  Eye
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CommunityPage() {
  const [selectedTab, setSelectedTab] = useState('trending')
  const [commentText, setCommentText] = useState('')

  const tabs = [
    { id: 'trending', name: 'Trending', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'recent', name: 'Recent', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'popular', name: 'Popular', icon: <Users className="w-5 h-5" /> },
  ]

  const discussions = [
    {
      id: 1,
      author: 'Priya Sharma',
      avatar: '👩‍💻',
      title: 'Best Python Resources for Beginners?',
      content: 'Hey everyone! I\'m starting to learn Python and looking for the best resources. Any recommendations for books, online courses, or practice problems?',
      category: 'Programming',
      likes: 24,
      comments: 18,
      views: 156,
      time: '2 hours ago',
      tags: ['Python', 'Beginner', 'Resources']
    },
    {
      id: 2,
      author: 'Rahul Kumar',
      avatar: '👨‍🔧',
      title: 'Study Group for DSA - Anyone Interested?',
      content: 'Planning to form a study group for Data Structures & Algorithms. We can meet twice a week and solve problems together. DM if interested!',
      category: 'Study Groups',
      likes: 31,
      comments: 25,
      views: 203,
      time: '5 hours ago',
      tags: ['DSA', 'Study Group', 'Collaboration']
    },
    {
      id: 3,
      author: 'Anjali Patel',
      avatar: '🎨',
      title: 'Digital Art Workshop This Weekend!',
      content: 'Hosting a free digital art workshop this Saturday at the Design Lab. Learn basic techniques in Procreate. Limited to 15 students. Comment to reserve your spot!',
      category: 'Workshops',
      likes: 42,
      comments: 31,
      views: 287,
      time: '1 day ago',
      tags: ['Digital Art', 'Workshop', 'Free']
    },
    {
      id: 4,
      author: 'Amit Singh',
      avatar: '💻',
      title: 'React vs Vue - Which to Learn First?',
      content: 'I\'m confused between React and Vue for frontend development. I have basic JavaScript knowledge. Which framework would you recommend for a beginner?',
      category: 'Programming',
      likes: 19,
      comments: 27,
      views: 134,
      time: '2 days ago',
      tags: ['React', 'Vue', 'Frontend', 'Beginner']
    },
    {
      id: 5,
      author: 'Neha Desai',
      avatar: '📸',
      title: 'Photography Club Meeting - New Members Welcome!',
      content: 'Monthly photography club meeting this Friday. We\'ll discuss composition techniques and share our recent work. All skill levels welcome!',
      category: 'Clubs',
      likes: 28,
      comments: 15,
      views: 189,
      time: '3 days ago',
      tags: ['Photography', 'Club', 'Meeting']
    }
  ]

  const handleLike = (id: number) => {
    // Handle like functionality
    console.log('Liked discussion:', id)
  }

  const handleComment = (id: number) => {
    if (commentText.trim()) {
      console.log('Comment added to discussion:', id, commentText)
      setCommentText('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Student Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
          >
            Connect, collaborate, and grow with fellow NMIET students. 
            Share knowledge, form study groups, and build lasting friendships.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium transition-colors duration-200 ${
                  selectedTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Discussions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Discussions
            </h2>
            <button className="btn-primary">
              Start New Discussion
            </button>
          </div>
          
          <div className="space-y-6">
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{discussion.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{discussion.author}</h3>
                      <p className="text-sm text-gray-500">{discussion.time}</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {discussion.title}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {discussion.content}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                      {discussion.category}
                    </span>
                    {discussion.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {discussion.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {discussion.comments}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleLike(discussion.id)}
                    className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <Heart className="w-5 h-5" />
                    <span>{discussion.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                    <MessageCircle className="w-5 h-5" />
                    <span>Comment</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors duration-200">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-purple-500 transition-colors duration-200">
                    <Bookmark className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>

                {/* Comment Input */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="text-xl">👤</div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={() => handleComment(discussion.id)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

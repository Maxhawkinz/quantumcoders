'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  BookOpen,
  ShoppingBag,
  Users,
  Shield,
  Award,
  MessageCircle
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Questions', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'account', name: 'Account & Login', icon: <Shield className="w-5 h-5" /> },
    { id: 'learning', name: 'Learning & Skills', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'marketplace', name: 'Marketplace', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'community', name: 'Community', icon: <Users className="w-5 h-5" /> },
    { id: 'badges', name: 'Badges & Rewards', icon: <Award className="w-5 h-5" /> }
  ]

  const faqs = [
    // Account & Login
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'To create an account, click the "Get Started" button on the homepage and fill out the registration form. You must use your official @nmiet.edu.in email address to verify your NMIET student status.'
    },
    {
      id: 2,
      category: 'account',
      question: 'Why do I need to use my NMIET email?',
      answer: 'This platform is exclusively for NMIET students. Using your @nmiet.edu.in email ensures that only verified NMIET students can access the platform, maintaining a secure and trusted community.'
    },
    {
      id: 3,
      category: 'account',
      question: 'What if I forgot my password?',
      answer: 'Click "Forgot Password" on the login page and enter your @nmiet.edu.in email address. You\'ll receive a password reset link in your email within a few minutes.'
    },
    {
      id: 4,
      category: 'account',
      question: 'Can I change my email address?',
      answer: 'No, you cannot change your email address as it\'s used to verify your NMIET student status. If you have issues with your email, please contact support.'
    },

    // Learning & Skills
    {
      id: 5,
      category: 'learning',
      question: 'How do I share a skill?',
      answer: 'Click "Share a Skill" on the homepage or navigate to the skills section. Fill out the form with your skill details, pricing, and description. Your skill will be reviewed and published within 24 hours.'
    },
    {
      id: 6,
      category: 'learning',
      question: 'Can I offer free lessons?',
      answer: 'Yes! You can set your lesson price to ₹0 to offer free lessons. This is a great way to help fellow students and build your reputation on the platform.'
    },
    {
      id: 7,
      category: 'learning',
      question: 'How do I book a lesson?',
      answer: 'Browse available skills, click on a lesson you\'re interested in, and use the "Book Lesson" button. You can message the instructor to schedule a convenient time.'
    },
    {
      id: 8,
      category: 'learning',
      question: 'What if I\'m not satisfied with a lesson?',
      answer: 'Contact the instructor first to discuss any issues. If the problem persists, you can request a refund through our support team within 48 hours of the lesson.'
    },

    // Marketplace
    {
      id: 9,
      category: 'marketplace',
      question: 'How do I sell an item?',
      answer: 'Go to the Marketplace section and click "Sell an Item". Fill out the form with item details, photos, price, and condition. Your listing will be published after review.'
    },
    {
      id: 10,
      category: 'marketplace',
      question: 'What items can I sell?',
      answer: 'You can sell books, electronics, stationery, and other student-related items. All items must be legal and appropriate for a student community.'
    },
    {
      id: 11,
      category: 'marketplace',
      question: 'How do payments work?',
      answer: 'Payments are processed securely through our platform. Buyers pay upfront, and sellers receive payment after successful delivery. We support UPI, net banking, and digital wallets.'
    },
    {
      id: 12,
      category: 'marketplace',
      question: 'What if an item is not as described?',
      answer: 'Contact the seller first to resolve the issue. If needed, you can request a refund through our support team within 7 days of receiving the item.'
    },

    // Community
    {
      id: 13,
      category: 'community',
      question: 'How do I join discussions?',
      answer: 'Visit the Community section to see ongoing discussions. You can reply to existing posts or start new discussions on relevant topics.'
    },
    {
      id: 14,
      category: 'community',
      question: 'What are the community guidelines?',
      answer: 'Be respectful, helpful, and constructive. No spam, harassment, or inappropriate content. Follow NMIET\'s code of conduct and maintain a positive learning environment.'
    },
    {
      id: 15,
      category: 'community',
      question: 'How do I report inappropriate behavior?',
      answer: 'Use the "Report" button on any post, comment, or user profile. Our moderation team reviews all reports within 24 hours and takes appropriate action.'
    },

    // Badges & Rewards
    {
      id: 16,
      category: 'badges',
      question: 'What are badges?',
      answer: 'Badges are achievements you earn by completing various activities on the platform, such as finishing courses, helping others, or maintaining learning streaks.'
    },
    {
      id: 17,
      category: 'badges',
      question: 'How do I earn badges?',
      answer: 'Badges are earned automatically when you complete specific actions. Check the Badges page to see all available achievements and their requirements.'
    },
    {
      id: 18,
      category: 'badges',
      question: 'Do badges give me any benefits?',
      answer: 'Badges showcase your achievements and help build your reputation on the platform. Some badges may unlock special features or recognition from other students.'
    },

    // General
    {
      id: 19,
      category: 'all',
      question: 'Is this platform free to use?',
      answer: 'Yes, creating an account and browsing the platform is completely free. You only pay for lessons you book or items you purchase from other students.'
    },
    {
      id: 20,
      category: 'all',
      question: 'How do I contact support?',
      answer: 'You can contact our support team at ajaythakare500@gmail.com or use the contact form on the Contact Us page. We typically respond within 24 hours.'
    },
    {
      id: 21,
      category: 'all',
      question: 'Can I use this platform on mobile?',
      answer: 'Yes! Our platform is fully responsive and works great on mobile devices. You can access all features through your mobile browser.'
    },
    {
      id: 22,
      category: 'all',
      question: 'What if I find a bug or technical issue?',
      answer: 'Please report any technical issues to our support team immediately. Include details about what happened and what you were trying to do when the issue occurred.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id)
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
          >
            Find quick answers to common questions about Skill Share
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-lg focus:ring-4 focus:ring-purple-300 focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="card cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our support team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
              <a href="/help" className="btn-secondary">
                Help Center
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Shield, 
  Users, 
  ShoppingBag,
  Award,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const helpCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning & Skills',
      description: 'Get help with courses, lessons, and skill sharing',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Marketplace',
      description: 'Buying, selling, and trading items',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Forums, discussions, and social features',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Badges & Achievements',
      description: 'Understanding the gamification system',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Account & Security',
      description: 'Login, verification, and safety',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'General Support',
      description: 'Technical issues and general questions',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const faqs = [
    {
      question: 'How do I verify my NMIET student status?',
      answer: 'To verify your student status, you need to use your official @nmiet.edu.in email address when creating your account. Our system will automatically verify your NMIET affiliation through your email domain.'
    },
    {
      question: 'Can I share skills for free?',
      answer: 'Yes! You can offer free skill lessons or set your own price. The platform encourages both free knowledge sharing and paid premium lessons.'
    },
    {
      question: 'How do I report inappropriate content?',
      answer: 'You can report any inappropriate content by clicking the "Report" button on any post, comment, or user profile. Our moderation team will review reports within 24 hours.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'Currently, we support UPI, net banking, and digital wallets. All transactions are processed securely through our payment partners.'
    },
    {
      question: 'How do I earn badges?',
      answer: 'Badges are earned by completing various activities like finishing courses, helping other students, participating in discussions, and maintaining learning streaks. Check the Badges page to see all available achievements.'
    },
    {
      question: 'Can I sell items from other colleges?',
      answer: 'No, this platform is exclusively for NMIET students. All users must have a verified @nmiet.edu.in email address to participate.'
    },
    {
      question: 'How do I contact a skill instructor?',
      answer: 'You can contact instructors through the built-in messaging system on their profile pages. Click on any instructor\'s profile and use the "Message" button to start a conversation.'
    },
    {
      question: 'What if I have technical issues?',
      answer: 'For technical issues, please contact our support team at ajaythakare500@gmail.com or use the contact form below. We typically respond within 24 hours.'
    }
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'ajaythakare500@gmail.com',
      action: 'Send Email'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 9 AM - 6 PM',
      action: 'Start Chat'
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-prussian-blue via-barn-red to-fire-brick py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-papaya-whip rounded-full animate-float-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-papaya-whip/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <span className="text-4xl">🆘</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-papaya-whip mb-6 text-shadow-lg"
          >
            Help Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-papaya-whip/90 mb-8 max-w-3xl mx-auto text-shadow"
          >
            Find answers to your questions and get the support you need
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
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
              How can we help you?
            </h2>
            <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
              Choose a category below to find relevant help articles and resources
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card hover:scale-105 transition-all duration-500 group-hover:shadow-2xl cursor-pointer">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-prussian-blue to-fire-brick rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-papaya-whip text-2xl">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-prussian-blue mb-4">
                      {category.title}
                    </h3>
                    <p className="text-prussian-blue/70 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div 
                  className="card cursor-pointer hover:shadow-lg transition-all duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                  {expandedFaq === index && (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact our support team for personalized assistance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {method.contact}
                </p>
                <button className="btn-primary">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

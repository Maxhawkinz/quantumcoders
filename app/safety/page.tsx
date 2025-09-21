'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  Lock, 
  Eye, 
  MessageCircle,
  CreditCard,
  FileText,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SafetyGuidelinesPage() {
  const safetyCategories = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Account Security',
      description: 'Protect your account and personal information',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Communication Safety',
      description: 'Safe interaction with other students',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Financial Safety',
      description: 'Secure transactions and payments',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Content Safety',
      description: 'Appropriate content and behavior',
      color: 'from-red-500 to-red-600'
    }
  ]

  const guidelines = [
    {
      category: 'Account Security',
      icon: <Lock className="w-6 h-6" />,
      title: 'Strong Password Requirements',
      description: 'Use a strong, unique password for your account',
      do: [
        'Use at least 8 characters',
        'Include uppercase and lowercase letters',
        'Add numbers and special characters',
        'Use a different password from other accounts'
      ],
      dont: [
        'Share your password with anyone',
        'Use personal information in passwords',
        'Use the same password for multiple accounts',
        'Write passwords down in plain text'
      ]
    },
    {
      category: 'Account Security',
      icon: <Eye className="w-6 h-6" />,
      title: 'Privacy Settings',
      description: 'Control who can see your information',
      do: [
        'Review your privacy settings regularly',
        'Limit personal information sharing',
        'Use profile visibility controls',
        'Be selective about friend requests'
      ],
      dont: [
        'Share sensitive personal information',
        'Accept requests from unknown users',
        'Post your contact details publicly',
        'Ignore privacy notifications'
      ]
    },
    {
      category: 'Communication Safety',
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Safe Messaging',
      description: 'Communicate safely with other students',
      do: [
        'Keep conversations professional',
        'Report inappropriate messages',
        'Meet in public places for transactions',
        'Trust your instincts'
      ],
      dont: [
        'Share personal contact information',
        'Send inappropriate content',
        'Meet alone with strangers',
        'Ignore warning signs'
      ]
    },
    {
      category: 'Financial Safety',
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Secure Transactions',
      description: 'Protect your financial information',
      do: [
        'Use only platform payment methods',
        'Verify seller/buyer identity',
        'Keep transaction records',
        'Report suspicious activity'
      ],
      dont: [
        'Share banking details',
        'Pay outside the platform',
        'Send money to unverified users',
        'Ignore payment confirmations'
      ]
    },
    {
      category: 'Content Safety',
      icon: <FileText className="w-6 h-6" />,
      title: 'Appropriate Content',
      description: 'Post content that follows community standards',
      do: [
        'Be respectful and constructive',
        'Use appropriate language',
        'Respect intellectual property',
        'Follow NMIET guidelines'
      ],
      dont: [
        'Post offensive or harmful content',
        'Share copyrighted material',
        'Engage in harassment',
        'Violate college policies'
      ]
    }
  ]

  const emergencyContacts = [
    {
      title: 'Platform Support',
      description: 'Report safety concerns',
      contact: 'ajaythakare500@gmail.com',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'NMIET Security',
      description: 'Campus security issues',
      contact: 'security@nmiet.edu.in',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Student Affairs',
      description: 'Student conduct issues',
      contact: 'studentaffairs@nmiet.edu.in',
      icon: <Users className="w-6 h-6" />
    }
  ]

  const warningSigns = [
    'Requests for personal information',
    'Pressure to meet outside the platform',
    'Offers that seem too good to be true',
    'Requests for advance payments',
    'Inappropriate or offensive language',
    'Attempts to bypass platform rules',
    'Requests for inappropriate photos',
    'Threats or intimidation'
  ]

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
              <span className="text-4xl">🛡️</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-papaya-whip mb-6 text-shadow-lg"
          >
            Safety Guidelines
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-papaya-whip/90 mb-8 max-w-3xl mx-auto text-shadow"
          >
            Your safety and security are our top priorities
          </motion.p>
        </div>
      </section>

      {/* Safety Categories */}
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
              Safety Areas
            </h2>
            <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive safety guidelines across all platform activities
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
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

      {/* Detailed Guidelines */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
              Detailed Guidelines
            </h2>
            <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
              Specific do's and don'ts for safe platform usage
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-air-superiority-blue to-fire-brick rounded-2xl flex items-center justify-center text-papaya-whip flex-shrink-0">
                    {guideline.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-prussian-blue/10 text-prussian-blue text-sm font-medium rounded-full">
                        {guideline.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-prussian-blue mb-3">
                      {guideline.title}
                    </h3>
                    <p className="text-prussian-blue/70 mb-6">
                      {guideline.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-green-700 mb-4">
                          <CheckCircle className="w-5 h-5" />
                          Do's
                        </h4>
                        <ul className="space-y-2">
                          {guideline.do.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-red-700 mb-4">
                          <XCircle className="w-5 h-5" />
                          Don'ts
                        </h4>
                        <ul className="space-y-2">
                          {guideline.dont.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
              Warning Signs
            </h2>
            <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
              Be alert for these red flags and report them immediately
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {warningSigns.map((sign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{sign}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-24 bg-gradient-to-br from-prussian-blue to-barn-red">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-papaya-whip mb-6 text-shadow-lg">
              Emergency Contacts
            </h2>
            <p className="text-xl text-papaya-whip/90 max-w-3xl mx-auto leading-relaxed text-shadow">
              Contact these resources immediately if you feel unsafe
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-white/10 backdrop-blur-sm border border-papaya-whip/20 text-center"
              >
                <div className="w-16 h-16 bg-papaya-whip/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-prussian-blue text-2xl">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-papaya-whip mb-3">
                  {contact.title}
                </h3>
                <p className="text-papaya-whip/80 mb-4">
                  {contact.description}
                </p>
                <a 
                  href={`mailto:${contact.contact}`}
                  className="inline-block bg-papaya-whip text-prussian-blue font-bold py-3 px-6 rounded-xl hover:bg-papaya-whip/90 transition-colors duration-200"
                >
                  Contact Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="card p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Info className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-prussian-blue mb-6">
                Report Safety Concerns
              </h2>
              <p className="text-xl text-prussian-blue/80 mb-8 leading-relaxed">
                If you encounter any safety issues or inappropriate behavior, 
                report it immediately. We take all reports seriously and will 
                investigate promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Report Issue
                </a>
                <a href="mailto:ajaythakare500@gmail.com" className="btn-secondary">
                  Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

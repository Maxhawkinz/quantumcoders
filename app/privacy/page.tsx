'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  Lock, 
  Database,
  User,
  Mail,
  CreditCard,
  Settings,
  AlertTriangle,
  CheckCircle,
  Calendar
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 2024"

  const dataTypes = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Personal Information',
      items: [
        'Name and contact information',
        'NMIET email address (@nmiet.edu.in)',
        'Profile information and preferences',
        'Academic year and department',
        'Profile pictures and bio information'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Communication Data',
      items: [
        'Messages between users',
        'Discussion forum posts',
        'Comments and reviews',
        'Support requests and feedback',
        'Notification preferences'
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Transaction Data',
      items: [
        'Payment information (processed securely)',
        'Purchase and sale history',
        'Transaction amounts and dates',
        'Item listings and descriptions',
        'Dispute and refund records'
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Usage Data',
      items: [
        'Platform activity and interactions',
        'Skills learned and taught',
        'Badges and achievements earned',
        'Search queries and preferences',
        'Device and browser information'
      ]
    }
  ]

  const dataUses = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Platform Operation',
      description: 'To provide and maintain the Skill Share platform services'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Safety',
      description: 'To protect users and prevent fraud or abuse'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Personalization',
      description: 'To customize your experience and show relevant content'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Communication',
      description: 'To send important updates and notifications'
    }
  ]

  const dataSharing = [
    'We do not sell your personal information to third parties',
    'We may share data with NMIET administration for verification purposes',
    'Payment processors receive necessary transaction data for processing',
    'We may share data if required by law or to protect user safety',
    'Aggregated, anonymized data may be used for platform improvement',
    'Your public profile information is visible to other platform users'
  ]

  const userRights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal data we have about you',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Correct Information',
      description: 'Update or correct any inaccurate personal information',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Delete Account',
      description: 'Request deletion of your account and associated data',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Data Portability',
      description: 'Export your data in a machine-readable format',
      icon: <Database className="w-6 h-6" />
    }
  ]

  const securityMeasures = [
    'End-to-end encryption for sensitive communications',
    'Secure payment processing with PCI DSS compliance',
    'Regular security audits and vulnerability assessments',
    'Access controls and authentication systems',
    'Data backup and disaster recovery procedures',
    'Staff training on data protection and privacy'
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
              <span className="text-4xl">🔒</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-papaya-whip mb-6 text-shadow-lg"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-papaya-whip/90 mb-8 max-w-3xl mx-auto text-shadow"
          >
            Your privacy and data protection are our top priorities
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 text-papaya-whip/80"
          >
            <Calendar className="w-5 h-5" />
            <span>Last updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-3xl font-bold text-prussian-blue mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-lg text-prussian-blue/80 leading-relaxed mb-6">
                At Skill Share, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our platform.
              </p>
              <p className="text-lg text-prussian-blue/80 leading-relaxed">
                This policy applies to all users of the Skill Share platform and covers all 
                interactions, transactions, and data processing activities within our system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-prussian-blue mb-6 text-shadow">
                Information We Collect
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                We collect various types of information to provide and improve our services
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-air-superiority-blue to-fire-brick rounded-xl flex items-center justify-center text-papaya-whip flex-shrink-0">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-prussian-blue">
                      {type.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-prussian-blue/80">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-prussian-blue mb-6 text-shadow">
                How We Use Your Information
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                We use your information to provide, maintain, and improve our services
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataUses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-air-superiority-blue to-fire-brick rounded-2xl flex items-center justify-center mx-auto mb-6 text-papaya-whip">
                    {use.icon}
                  </div>
                  <h3 className="text-xl font-bold text-prussian-blue mb-4">
                    {use.title}
                  </h3>
                  <p className="text-prussian-blue/80 leading-relaxed">
                    {use.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-3xl font-bold text-prussian-blue mb-6">
                Information Sharing & Disclosure
              </h2>
              <p className="text-lg text-prussian-blue/80 leading-relaxed mb-6">
                We are committed to protecting your privacy and do not sell your personal information. 
                Here's how we handle information sharing:
              </p>
              <ul className="space-y-3">
                {dataSharing.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-prussian-blue/80">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-prussian-blue mb-6 text-shadow">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                You have control over your personal information and data
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-air-superiority-blue to-fire-brick rounded-xl flex items-center justify-center text-papaya-whip flex-shrink-0">
                      {right.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-prussian-blue mb-3">
                        {right.title}
                      </h3>
                      <p className="text-prussian-blue/80 leading-relaxed">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-3xl font-bold text-prussian-blue mb-6">
                Data Security & Protection
              </h2>
              <p className="text-lg text-prussian-blue/80 leading-relaxed mb-6">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="space-y-3">
                {securityMeasures.map((measure, index) => (
                  <li key={index} className="flex items-start gap-3 text-prussian-blue/80">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{measure}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-prussian-blue to-barn-red">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="card bg-white/10 backdrop-blur-sm border border-papaya-whip/20 p-12">
              <div className="w-20 h-20 bg-papaya-whip/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Mail className="w-10 h-10 text-papaya-whip" />
              </div>
              <h2 className="text-4xl font-bold text-papaya-whip mb-6 text-shadow">
                Privacy Questions?
              </h2>
              <p className="text-xl text-papaya-whip/90 mb-8 leading-relaxed text-shadow">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us. We're here to help protect your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-papaya-whip text-prussian-blue font-bold py-4 px-8 rounded-2xl hover:bg-papaya-whip/90 transition-colors duration-200">
                  Contact Support
                </a>
                <a href="mailto:ajaythakare500@gmail.com" className="border-2 border-papaya-whip text-papaya-whip font-bold py-4 px-8 rounded-2xl hover:bg-papaya-whip hover:text-prussian-blue transition-all duration-200">
                  Email Us
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

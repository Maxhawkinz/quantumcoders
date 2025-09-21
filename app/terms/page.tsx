'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  Users, 
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Mail
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Eligibility',
      content: [
        'You must be a current student at NMIET with a valid @nmiet.edu.in email address',
        'You must be at least 18 years old or have parental consent',
        'You must provide accurate and complete information during registration',
        'You are responsible for maintaining the security of your account',
        'One account per person - multiple accounts are prohibited'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Platform Usage',
      content: [
        'Use the platform only for legitimate educational and marketplace purposes',
        'Respect all other users and maintain a professional environment',
        'Follow NMIET\'s code of conduct and academic integrity policies',
        'Do not use the platform for commercial activities outside of student-to-student transactions',
        'Report any violations or suspicious activities immediately'
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Transactions & Payments',
      content: [
        'All transactions must be conducted through the platform\'s payment system',
        'Prices must be reasonable and reflect fair market value for student items',
        'Sellers are responsible for accurate item descriptions and condition',
        'Buyers have 48 hours to report issues with received items',
        'Platform fees may apply to certain transactions as disclosed at time of listing',
        'Refunds are subject to platform policies and seller agreement'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Content & Intellectual Property',
      content: [
        'You retain ownership of content you create and share',
        'You grant the platform license to display and distribute your content',
        'Do not post copyrighted material without permission',
        'Respect intellectual property rights of others',
        'User-generated content must comply with platform guidelines',
        'The platform reserves the right to remove inappropriate content'
      ]
    }
  ]

  const prohibitedActivities = [
    'Harassment, bullying, or threatening behavior',
    'Sharing false or misleading information',
    'Spam, advertising, or promotional content',
    'Sharing personal information of others',
    'Creating fake accounts or impersonating others',
    'Circumventing platform security measures',
    'Engaging in illegal activities',
    'Violating NMIET policies or academic integrity',
    'Selling prohibited items (alcohol, drugs, weapons, etc.)',
    'Price gouging or unfair pricing practices'
  ]

  const liabilityLimitations = [
    'The platform is provided "as is" without warranties',
    'We are not responsible for user-to-user transactions',
    'Users are responsible for their own safety during meetups',
    'We do not guarantee the accuracy of user-generated content',
    'Platform availability may be interrupted for maintenance',
    'Users assume all risks associated with platform usage'
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
              <span className="text-4xl">📋</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-papaya-whip mb-6 text-shadow-lg"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-papaya-whip/90 mb-8 max-w-3xl mx-auto text-shadow"
          >
            Please read these terms carefully before using our platform
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
                Agreement to Terms
              </h2>
              <p className="text-lg text-prussian-blue/80 leading-relaxed mb-6">
                By accessing and using Skill Share, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using this platform.
              </p>
              <p className="text-lg text-prussian-blue/80 leading-relaxed">
                These terms apply to all users of the platform, including students, instructors, 
                buyers, and sellers. Your continued use of the platform constitutes acceptance 
                of any modifications to these terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
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
                Key Terms & Conditions
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                Important terms governing your use of the Skill Share platform
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {sections.map((section, index) => (
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
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-prussian-blue mb-6">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-prussian-blue/80">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-prussian-blue mb-6 text-shadow">
                Prohibited Activities
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                The following activities are strictly prohibited and may result in account suspension
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-200"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liability & Disclaimers */}
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
                Liability Limitations & Disclaimers
              </h2>
              <ul className="space-y-4">
                {liabilityLimitations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-prussian-blue/80">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Termination */}
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
                Account Termination
              </h2>
              <div className="space-y-4 text-prussian-blue/80 leading-relaxed">
                <p>
                  We reserve the right to suspend or terminate your account at any time for 
                  violations of these terms, NMIET policies, or inappropriate behavior.
                </p>
                <p>
                  You may terminate your account at any time by contacting our support team. 
                  Upon termination, your access to the platform will be revoked, but your 
                  content may remain visible to other users as per platform policies.
                </p>
                <p>
                  In case of account termination, any pending transactions will be handled 
                  according to our dispute resolution procedures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
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
                Questions About These Terms?
              </h2>
              <p className="text-xl text-papaya-whip/90 mb-8 leading-relaxed text-shadow">
                If you have any questions about these Terms of Service, please contact us. 
                We may update these terms from time to time, and we'll notify users of 
                significant changes.
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

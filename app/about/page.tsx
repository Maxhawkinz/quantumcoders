'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  BookOpen,
  ShoppingBag,
  MessageCircle,
  Shield,
  Star,
  CheckCircle,
  TrendingUp,
  Globe
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Active Students", icon: <Users className="w-8 h-8" /> },
    { number: "200+", label: "Skills Shared", icon: <BookOpen className="w-8 h-8" /> },
    { number: "150+", label: "Items Traded", icon: <ShoppingBag className="w-8 h-8" /> },
    { number: "4.8", label: "Average Rating", icon: <Star className="w-8 h-8" /> }
  ]

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'We believe in the power of student community and peer-to-peer learning. Every feature is designed to strengthen connections between NMIET students.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety & Trust',
      description: 'Your safety and security are our top priorities. We maintain strict verification processes and provide tools to ensure safe interactions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Education and resources should be accessible to all students. We provide both free and affordable options to ensure no one is left behind.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from platform features to user experience, ensuring the highest quality service for our community.'
    }
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Skill Sharing',
      description: 'Learn from and teach fellow students in a structured, supportive environment',
      benefits: ['Peer-to-peer learning', 'Flexible scheduling', 'Affordable pricing', 'Quality assurance']
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Marketplace',
      description: 'Buy and sell items within the NMIET community with verified, trusted transactions',
      benefits: ['Student-only marketplace', 'Secure payments', 'Fair pricing', 'Easy transactions']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Community',
      description: 'Connect with fellow students through discussions, forums, and collaborative projects',
      benefits: ['Discussion forums', 'Study groups', 'Project collaboration', 'Peer support']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Gamification',
      description: 'Earn badges and achievements as you learn, teach, and contribute to the community',
      benefits: ['Achievement badges', 'Progress tracking', 'Recognition system', 'Motivation tools']
    }
  ]

  const team = [
    {
      name: 'Platform Development Team',
      role: 'Technical Development',
      description: 'Our dedicated team of developers and designers work tirelessly to create the best possible experience for NMIET students.',
      avatar: '👨‍💻'
    },
    {
      name: 'NMIET Administration',
      role: 'Institutional Support',
      description: 'Working closely with NMIET administration to ensure the platform aligns with college policies and student needs.',
      avatar: '🏫'
    },
    {
      name: 'Student Moderators',
      role: 'Community Management',
      description: 'Student volunteers who help maintain a positive, safe environment and provide peer support to the community.',
      avatar: '👥'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Platform Launch',
      description: 'Skill Share officially launched for NMIET students with core features including skill sharing and marketplace.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Reached 500+ active students and 200+ skills shared across various categories.'
    },
    {
      year: '2024',
      title: 'Feature Expansion',
      description: 'Added advanced features including badges system, community forums, and enhanced safety measures.'
    },
    {
      year: 'Future',
      title: 'Continuous Improvement',
      description: 'Ongoing development of new features based on student feedback and emerging needs.'
    }
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
              <span className="text-4xl">🎓</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-papaya-whip mb-6 text-shadow-lg"
          >
            About Skill Share
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-papaya-whip/90 mb-8 max-w-3xl mx-auto text-shadow"
          >
            Empowering NMIET students through peer-to-peer learning and community marketplace
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
                Our Mission
              </h2>
              <p className="text-2xl text-prussian-blue/80 leading-relaxed">
                To create a vibrant, secure, and inclusive platform that connects NMIET students 
                for learning, sharing, and trading, fostering a stronger academic community 
                where knowledge and resources flow freely among peers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-prussian-blue to-barn-red">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="card bg-white/10 backdrop-blur-sm border border-papaya-whip/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-papaya-whip/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-prussian-blue text-2xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-papaya-whip mb-2 text-shadow">
                    {stat.number}
                  </div>
                  <div className="text-papaya-whip/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
                Our Values
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {values.map((value, index) => (
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
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-prussian-blue mb-4">
                        {value.title}
                      </h3>
                      <p className="text-prussian-blue/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
                What We Offer
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                Comprehensive features designed specifically for NMIET students
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {features.map((feature, index) => (
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
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-prussian-blue mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-prussian-blue/70 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-prussian-blue/80">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
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

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
                Our Team
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                The people behind Skill Share, working to serve the NMIET community
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-air-superiority-blue to-fire-brick rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-prussian-blue mb-2">
                    {member.name}
                  </h3>
                  <p className="text-air-superiority-blue font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-prussian-blue/70 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-prussian-blue mb-6 text-shadow">
                Our Journey
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                Key milestones in Skill Share's development and growth
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-prussian-blue to-fire-brick rounded-2xl flex items-center justify-center text-papaya-whip font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="card flex-1">
                    <h3 className="text-xl font-bold text-prussian-blue mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-prussian-blue/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-prussian-blue to-barn-red">
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
                <Globe className="w-10 h-10 text-papaya-whip" />
              </div>
              <h2 className="text-4xl font-bold text-papaya-whip mb-6 text-shadow">
                Join Our Community
              </h2>
              <p className="text-xl text-papaya-whip/90 mb-8 leading-relaxed text-shadow">
                Ready to be part of the Skill Share community? Start learning, sharing, 
                and connecting with fellow NMIET students today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="bg-papaya-whip text-prussian-blue font-bold py-4 px-8 rounded-2xl hover:bg-papaya-whip/90 transition-colors duration-200">
                  Get Started
                </a>
                <a href="/contact" className="border-2 border-papaya-whip text-papaya-whip font-bold py-4 px-8 rounded-2xl hover:bg-papaya-whip hover:text-prussian-blue transition-all duration-200">
                  Contact Us
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

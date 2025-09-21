'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  ShoppingBag, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Lightbulb,
  MessageCircle,
  Award
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'
import StatsCard from '@/components/StatsCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Share Your Skills",
      description: "Teach coding, drawing, languages, and more to fellow students",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Learn New Skills",
      description: "Discover and enroll in lessons from talented peers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Trade Items",
      description: "Buy and sell second-hand books, gadgets, and more",
      color: "from-green-500 to-green-600"
    }
  ]

  const stats = [
    { number: "500+", label: "Active Students", icon: <Users className="w-6 h-6" /> },
    { number: "200+", label: "Skills Shared", icon: <Lightbulb className="w-6 h-6" /> },
    { number: "150+", label: "Items Traded", icon: <ShoppingBag className="w-6 h-6" /> },
    { number: "4.8", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      content: "I learned Python from a senior and now I'm teaching web development to juniors. This platform is amazing!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Rahul Kumar",
      role: "Mechanical Engineering",
      content: "Found my perfect laptop for half the price from a graduating senior. Great community!",
      rating: 5,
      avatar: "👨‍🔧"
    },
    {
      name: "Anjali Patel",
      role: "Design Student",
      content: "Teaching digital art has helped me improve my own skills while helping others. Love the badge system!",
      rating: 5,
      avatar: "🎨"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-papaya-whip rounded-full animate-float-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-papaya-whip rounded-full animate-float-slow" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-papaya-whip/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <span className="text-4xl">🎓</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-papaya-whip text-shadow-lg"
          >
            Skill Share
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-papaya-whip/90 mb-8 max-w-4xl mx-auto font-light text-shadow"
          >
            Learn, Share, Trade – All in One Place
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-papaya-whip/80 mb-12 max-w-3xl mx-auto text-shadow"
          >
            Connect with fellow NMIET students to share skills, trade items, and build a stronger community together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/share-skill" className="btn-primary flex items-center gap-3 text-lg">
              Share a Skill <ArrowRight className="w-6 h-6" />
            </Link>
            <Link href="/skills" className="btn-secondary flex items-center gap-3 text-lg">
              Learn a Skill <BookOpen className="w-6 h-6" />
            </Link>
            <Link href="/marketplace" className="btn-accent flex items-center gap-3 text-lg">
              Sell/Buy Items <ShoppingBag className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20"
        />
      </section>

      {/* Features Section */}
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
              Everything You Need
            </h2>
            <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
              Our platform combines skill sharing, learning, and marketplace features 
              to create a comprehensive student experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-prussian-blue to-fire-brick rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-papaya-whip text-2xl">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-prussian-blue mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-prussian-blue/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Testimonials Section */}
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
              What Students Say
            </h2>
            <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied students who are already using Skill Share
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-air-superiority-blue to-fire-brick rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-fire-brick fill-current" />
                      ))}
                    </div>
                    <p className="text-prussian-blue/80 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-prussian-blue text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-prussian-blue/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-papaya-whip mb-8 text-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-papaya-whip/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
              Join the Skill Share community today and start learning, sharing, and trading with fellow NMIET students.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/signup" className="bg-papaya-whip text-prussian-blue font-bold py-4 px-10 rounded-2xl shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-prussian-blue">
                Get Started Now
              </Link>
              <Link href="/skills" className="border-2 border-papaya-whip text-papaya-whip font-bold py-4 px-10 rounded-2xl hover:bg-papaya-whip hover:text-prussian-blue transition-all duration-300 shadow-xl hover:shadow-2xl">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

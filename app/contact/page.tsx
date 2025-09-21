'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Phone,
  CheckCircle
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  category: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()

  const contactCategories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'account', label: 'Account Issues' },
    { value: 'marketplace', label: 'Marketplace Support' },
    { value: 'safety', label: 'Safety & Security' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'ajaythakare500@gmail.com',
      action: 'mailto:ajaythakare500@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      description: 'Come to our campus office',
      contact: 'NMIET Campus, Pune',
      action: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      description: 'When we\'re available',
      contact: 'Mon-Fri: 9 AM - 6 PM',
      action: '#'
    }
  ]

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
    reset()
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
          >
            Get in touch with our team. We're here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to reach us
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {info.description}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {info.contact}
                </p>
                {info.action.startsWith('mailto:') ? (
                  <a href={info.action} className="btn-primary">
                    Send Email
                  </a>
                ) : (
                  <button className="btn-primary opacity-50 cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Send us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="input-field"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@nmiet\.edu\.in$/,
                          message: 'Please use your @nmiet.edu.in email'
                        }
                      })}
                      className="input-field"
                      placeholder="yourname@nmiet.edu.in"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    {...register('category', { required: 'Please select a category' })}
                    className="input-field"
                  >
                    <option value="">Select a category</option>
                    {contactCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="input-field"
                    placeholder="Brief description of your inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    rows={6}
                    className="input-field"
                    placeholder="Please provide details about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                What happens next?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">1. We receive your message</h4>
                  <p className="text-gray-600 text-sm">
                    Your message is sent directly to our support team
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">2. We review & respond</h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">3. We help you out</h4>
                  <p className="text-gray-600 text-sm">
                    Our team provides personalized assistance for your inquiry
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

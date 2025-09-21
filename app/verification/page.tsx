'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Mail,
  User,
  FileText,
  Clock,
  Upload,
  Eye,
  EyeOff
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface VerificationForm {
  fullName: string
  email: string
  studentId: string
  department: string
  academicYear: string
  phoneNumber: string
  idCard: FileList
  additionalDocuments: FileList
}

export default function StudentVerificationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<VerificationForm>()

  const departments = [
    'Computer Engineering',
    'Information Technology',
    'Electronics & Telecommunication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Electrical Engineering',
    'Other'
  ]

  const academicYears = [
    'First Year',
    'Second Year',
    'Third Year',
    'Fourth Year',
    'Post Graduate',
    'PhD'
  ]

  const verificationSteps = [
    {
      step: 1,
      title: 'Submit Documents',
      description: 'Upload your student ID card and any additional verification documents',
      icon: <Upload className="w-6 h-6" />,
      status: 'current'
    },
    {
      step: 2,
      title: 'Review Process',
      description: 'Our team reviews your documents and information',
      icon: <Eye className="w-6 h-6" />,
      status: 'pending'
    },
    {
      step: 3,
      title: 'Verification Complete',
      description: 'You receive confirmation and full platform access',
      icon: <CheckCircle className="w-6 h-6" />,
      status: 'pending'
    }
  ]

  const requirements = [
    {
      title: 'Valid NMIET Email',
      description: 'Must have an active @nmiet.edu.in email address',
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: 'Student ID Card',
      description: 'Clear photo of your current NMIET student ID card',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Personal Information',
      description: 'Accurate personal and academic information',
      icon: <User className="w-6 h-6" />
    },
    {
      title: 'Additional Documents',
      description: 'Any other documents that verify your student status',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  const benefits = [
    'Full access to all platform features',
    'Ability to teach and learn skills',
    'Access to marketplace for buying/selling',
    'Participation in community discussions',
    'Earning badges and achievements',
    'Priority customer support'
  ]

  const onSubmit = async (data: VerificationForm) => {
    setIsSubmitting(true)
    
    // Simulate verification submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Verification request submitted successfully! We\'ll review your documents within 24-48 hours.')
    setIsSubmitting(false)
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
              <span className="text-4xl">✅</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-papaya-whip mb-6 text-shadow-lg"
          >
            Student Verification
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-papaya-whip/90 mb-8 max-w-3xl mx-auto text-shadow"
          >
            Verify your NMIET student status to access all platform features
          </motion.p>
        </div>
      </section>

      {/* Verification Process */}
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
                Verification Process
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                Simple steps to verify your NMIET student status
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {verificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`card text-center ${
                    step.status === 'current' ? 'ring-2 ring-prussian-blue' : 
                    step.status === 'completed' ? 'ring-2 ring-green-500' : ''
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      step.status === 'current' ? 'bg-gradient-to-br from-prussian-blue to-fire-brick text-papaya-whip' :
                      step.status === 'completed' ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' :
                      'bg-gray-200 text-gray-500'
                    }`}>
                      {step.status === 'completed' ? <CheckCircle className="w-8 h-8" /> : step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-prussian-blue text-papaya-whip rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-prussian-blue mb-3">
                      {step.title}
                    </h3>
                    <p className="text-prussian-blue/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
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
                Verification Requirements
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                What you need to complete the verification process
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {requirements.map((requirement, index) => (
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
                      {requirement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-prussian-blue mb-2">
                        {requirement.title}
                      </h3>
                      <p className="text-prussian-blue/70 leading-relaxed">
                        {requirement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-24 section-gradient">
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
                Submit Verification
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                Fill out the form below to start your verification process
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
                      {...register('fullName', { required: 'Full name is required' })}
                      className="input-field"
                      placeholder="Your full name as on ID card"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NMIET Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@nmiet\.edu\.in$/,
                          message: 'Must use @nmiet.edu.in email'
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Student ID Number *
                    </label>
                    <input
                      type="text"
                      {...register('studentId', { required: 'Student ID is required' })}
                      className="input-field"
                      placeholder="Your NMIET student ID"
                    />
                    {errors.studentId && (
                      <p className="text-red-500 text-sm mt-1">{errors.studentId.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      {...register('department', { required: 'Department is required' })}
                      className="input-field"
                    >
                      <option value="">Select your department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Academic Year *
                    </label>
                    <select
                      {...register('academicYear', { required: 'Academic year is required' })}
                      className="input-field"
                    >
                      <option value="">Select your academic year</option>
                      {academicYears.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    {errors.academicYear && (
                      <p className="text-red-500 text-sm mt-1">{errors.academicYear.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phoneNumber')}
                      className="input-field"
                      placeholder="Your contact number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID Card *
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    {...register('idCard', { required: 'Student ID card is required' })}
                    className="input-field"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Upload a clear photo or scan of your NMIET student ID card
                  </p>
                  {errors.idCard && (
                    <p className="text-red-500 text-sm mt-1">{errors.idCard.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Documents
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    multiple
                    {...register('additionalDocuments')}
                    className="input-field"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Any other documents that verify your student status (optional)
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• All documents must be clear and legible</li>
                        <li>• Verification typically takes 24-48 hours</li>
                        <li>• You'll receive email confirmation once verified</li>
                        <li>• Contact support if you have any issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting Verification...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      Submit Verification Request
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-prussian-blue mb-6 text-shadow">
                Benefits of Verification
              </h2>
              <p className="text-xl text-prussian-blue/80 max-w-3xl mx-auto leading-relaxed">
                What you get access to once your student status is verified
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-200"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
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
                <Mail className="w-10 h-10 text-papaya-whip" />
              </div>
              <h2 className="text-4xl font-bold text-papaya-whip mb-6 text-shadow">
                Need Help with Verification?
              </h2>
              <p className="text-xl text-papaya-whip/90 mb-8 leading-relaxed text-shadow">
                If you're having trouble with the verification process or have questions, 
                our support team is here to help you.
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

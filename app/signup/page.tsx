'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  studentId: string
  department: string
  academicYear: string
  phoneNumber?: string
}

export default function SignupPage() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<SignupForm>()
  const [showPassword, setShowPassword] = useState(false)
  const { register: registerUser, isLoading } = useAuth()
  const router = useRouter()

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

  const onSubmit = async (data: SignupForm) => {
    const success = await registerUser({
      fullName: data.name,
      email: data.email,
      password: data.password,
      studentId: data.studentId,
      department: data.department,
      academicYear: data.academicYear,
      phoneNumber: data.phoneNumber
    })
    
    if (success) {
      router.push('/login')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-gray-800 mb-6 text-center">Create your account</motion.h1>
          <div className="card p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College Email</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="yourname@nmiet.edu.in"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Za-z0-9._%+-]+@nmiet\.edu\.in$/, message: 'Use your @nmiet.edu.in email' }
                  })}
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input-field"
                  placeholder="••••••••"
                  {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })}
                />
                {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input-field"
                  placeholder="••••••••"
                  {...register('confirmPassword', { validate: value => value === watch('password') || 'Passwords do not match' })}
                />
                {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>}
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-sm text-gray-600 mt-1">{showPassword ? 'Hide' : 'Show'} passwords</button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="NM2024001"
                  {...register('studentId', { required: 'Student ID is required' })}
                />
                {errors.studentId && <p className="text-sm text-red-600 mt-1">{errors.studentId.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  className="input-field"
                  {...register('department', { required: 'Department is required' })}
                >
                  <option value="">Select your department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                {errors.department && <p className="text-sm text-red-600 mt-1">{errors.department.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
                <select
                  className="input-field"
                  {...register('academicYear', { required: 'Academic year is required' })}
                >
                  <option value="">Select your academic year</option>
                  {academicYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                {errors.academicYear && <p className="text-sm text-red-600 mt-1">{errors.academicYear.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="+91 9876543210"
                  {...register('phoneNumber')}
                />
              </div>

              <button type="submit" disabled={isSubmitting || isLoading} className="btn-primary w-full">{isSubmitting || isLoading ? 'Creating...' : 'Create Account'}</button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">Already have an account? <Link href="/login" className="text-primary-600 font-medium">Log in</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

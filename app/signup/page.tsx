  'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignupPage() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<SignupForm>()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (_data: SignupForm) => {
    toast.success('Account created. Welcome to Skill Share!')
    window.location.href = '/'
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
                    pattern: { value: /^[A-Za-z0-9._%+-]+@nmiet\.edu$/, message: 'Use your @nmiet.edu email' }
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

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">{isSubmitting ? 'Creating...' : 'Create Account'}</button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">Already have an account? <Link href="/login" className="text-primary-600 font-medium">Log in</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

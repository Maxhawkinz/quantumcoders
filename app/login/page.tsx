'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>()
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoading } = useAuth()
  const router = useRouter()

  const onSubmit = async (data: LoginForm) => {
    const success = await login(data.email, data.password)
    if (success) {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</motion.h1>
          <div className="card p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College Email</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="yourname@nmiet.edu.in"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@nmiet\.edu\.in$/,
                      message: 'Use your @nmiet.edu.in email'
                    }
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
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-sm text-gray-600 mt-1">{showPassword ? 'Hide' : 'Show'} password</button>
              </div>

              <button type="submit" disabled={isSubmitting || isLoading} className="btn-primary w-full">{isSubmitting || isLoading ? 'Logging in...' : 'Login'}</button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">Don't have an account? <Link href="/signup" className="text-primary-600 font-medium">Sign up</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

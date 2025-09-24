'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ShareSkillForm {
  title: string
  category: string
  level: string
  duration: string
  price: string
  description: string
  availability: string
  tags: string
}

export default function ShareSkillPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ShareSkillForm>()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (_data: ShareSkillForm) => {
    setSubmitting(true)
    toast.success('Skill submitted! We\'ll list it shortly.')
    setSubmitting(false)
    window.location.href = '/skills'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-gray-800 mb-6 text-center">Share a Skill</motion.h1>
          <div className="card p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input className="input-field" placeholder="e.g., Beginner Python Workshop" {...register('title', { required: 'Title is required' })} />
                  {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="input-field" {...register('category', { required: 'Category is required' })}>
                    <option value="">Select category</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="languages">Languages</option>
                    <option value="music">Music</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && <p className="text-sm text-red-600 mt-1">{errors.category.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                  <select className="input-field" {...register('level', { required: 'Level is required' })}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  {errors.level && <p className="text-sm text-red-600 mt-1">{errors.level.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input className="input-field" placeholder="e.g., 6 weeks (2 hrs/week)" {...register('duration', { required: 'Duration is required' })} />
                  {errors.duration && <p className="text-sm text-red-600 mt-1">{errors.duration.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input type="number" className="input-field" placeholder="e.g., 999" {...register('price', { required: 'Price is required' })} />
                  {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                  <input className="input-field" placeholder="e.g., Weekends, 5-7 PM" {...register('availability', { required: 'Availability is required' })} />
                  {errors.availability && <p className="text-sm text-red-600 mt-1">{errors.availability.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="input-field" rows={4} placeholder="Briefly describe your skill offering, prerequisites, and what students will learn." {...register('description', { required: 'Description is required', minLength: { value: 20, message: 'Add a bit more detail' } })} />
                {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                <input className="input-field" placeholder="e.g., python, beginner, web" {...register('tags')} />
              </div>

              <button type="submit" disabled={isSubmitting || submitting} className="btn-primary w-full">{isSubmitting || submitting ? 'Submitting...' : 'Submit Skill'}</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

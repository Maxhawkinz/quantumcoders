'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface SellItemForm {
  title: string
  category: string
  price: number
  condition: string
  location: string
  description: string
}

export default function SellItemPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SellItemForm>()

  const onSubmit = async (_data: SellItemForm) => {
    toast.success('Item listed for sale!')
    window.location.href = '/marketplace'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-gray-800 mb-6 text-center">Sell an Item</motion.h1>
          <div className="card p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input className="input-field" placeholder="e.g., Scientific Calculator" {...register('title', { required: 'Title is required' })} />
                  {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="input-field" {...register('category', { required: 'Category is required' })}>
                    <option value="">Select category</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="phones">Phones</option>
                    <option value="cameras">Cameras</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && <p className="text-sm text-red-600 mt-1">{errors.category.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input type="number" className="input-field" placeholder="e.g., 1500" {...register('price', { required: 'Price is required', min: { value: 1, message: 'Invalid price' } })} />
                  {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select className="input-field" {...register('condition', { required: 'Condition is required' })}>
                    <option value="Like New">Like New</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                  {errors.condition && <p className="text-sm text-red-600 mt-1">{errors.condition.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input className="input-field" placeholder="e.g., Computer Science Block" {...register('location', { required: 'Location is required' })} />
                {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="input-field" rows={4} placeholder="Describe the item, usage, and included accessories." {...register('description', { required: 'Description is required', minLength: { value: 10, message: 'Add more details' } })} />
                {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-accent w-full">{isSubmitting ? 'Listing...' : 'List Item for Sale'}</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

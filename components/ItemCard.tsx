'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Tag, 
  MapPin, 
  Heart, 
  MessageCircle,
  ShoppingCart,
  Eye
} from 'lucide-react'
import toast from 'react-hot-toast'

interface Item {
  id: number
  title: string
  seller: string
  category: string
  price: string
  originalPrice: string
  condition: string
  location: string
  image: string
  description: string
  tags: string[]
  rating: number
  reviews: number
  isLiked: boolean
}

interface ItemCardProps {
  item: Item
}

export default function ItemCard({ item }: ItemCardProps) {
  const [isLiked, setIsLiked] = useState(item.isLiked)
  const [isInCart, setIsInCart] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites')
  }

  const handleAddToCart = () => {
    setIsInCart(true)
    toast.success('Added to cart!')
  }

  const handleContact = () => {
    toast.success('Message sent to seller!')
  }

  const handleViewDetails = () => {
    toast.success('Opening item details...')
  }

  const discount = Math.round(((parseFloat(item.originalPrice.replace('₹', '')) - parseFloat(item.price.replace('₹', ''))) / parseFloat(item.originalPrice.replace('₹', ''))) * 100)

  return (
    <motion.div 
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      {/* Header with Image and Like Button */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{item.image}</div>
        <button
          onClick={handleLike}
          className={`p-2 rounded-full transition-colors duration-200 ${
            isLiked 
              ? 'text-red-500 bg-red-50' 
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Title and Seller */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
        {item.title}
      </h3>
      <p className="text-gray-600 mb-3">by {item.seller}</p>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{item.rating}</span>
        </div>
        <div className="text-sm text-gray-500">
          ({item.reviews} reviews)
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{item.location}</span>
        </div>
      </div>

      {/* Price and Discount */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl font-bold text-primary-600">
          {item.price}
        </div>
        <div className="text-lg text-gray-400 line-through">
          {item.originalPrice}
        </div>
        {discount > 0 && (
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Condition */}
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">Condition: </span>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          item.condition === 'Excellent' ? 'bg-green-100 text-green-700' :
          item.condition === 'Like New' ? 'bg-blue-100 text-blue-700' :
          item.condition === 'Good' ? 'bg-yellow-100 text-yellow-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {item.condition}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleViewDetails}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Eye className="w-4 h-4" />
          View Details
        </button>
        
        {!isInCart ? (
          <button
            onClick={handleAddToCart}
            className="flex-1 btn-primary text-sm py-2 px-4"
          >
            Add to Cart
          </button>
        ) : (
          <button className="flex-1 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
            In Cart ✓
          </button>
        )}
      </div>

      {/* Contact Seller */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={handleContact}
          className="w-full flex items-center justify-center gap-2 py-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          Contact Seller
        </button>
      </div>
    </motion.div>
  )
}

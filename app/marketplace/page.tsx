'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Star, 
  Tag, 
  MapPin, 
  ShoppingBag,
  BookOpen,
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Plus,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ItemCard from '@/components/ItemCard'
import CategoryFilter from '@/components/CategoryFilter'

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [priceRange, setPriceRange] = useState([0, 10000])

  const categories = [
    { id: 'all', name: 'All Items', icon: <ShoppingBag className="w-5 h-5" />, count: 234 },
    { id: 'books', name: 'Books', icon: <BookOpen className="w-5 h-5" />, count: 89 },
    { id: 'electronics', name: 'Electronics', icon: <Laptop className="w-5 h-5" />, count: 67 },
    { id: 'phones', name: 'Phones', icon: <Smartphone className="w-5 h-5" />, count: 34 },
    { id: 'cameras', name: 'Cameras', icon: <Camera className="w-5 h-5" />, count: 23 },
    { id: 'accessories', name: 'Accessories', icon: <Headphones className="w-5 h-5" />, count: 21 },
  ]

  const items = [
    {
      id: 1,
      title: 'Data Structures & Algorithms Textbook',
      seller: 'Priya Sharma',
      category: 'books',
      price: '₹800',
      originalPrice: '₹1200',
      condition: 'Like New',
      location: 'Computer Science Block',
      image: '📚',
      description: 'Excellent condition DSA book, barely used. Perfect for upcoming semester.',
      tags: ['Computer Science', 'DSA', 'Textbook'],
      rating: 4.9,
      reviews: 12,
      isLiked: false
    },
    {
      id: 2,
      title: 'MacBook Air 2020',
      seller: 'Rahul Kumar',
      category: 'electronics',
      price: '₹45000',
      originalPrice: '₹75000',
      condition: 'Good',
      location: 'Mechanical Block',
      image: '💻',
      description: 'Well-maintained MacBook Air. Great for programming and design work.',
      tags: ['Laptop', 'Apple', 'Programming'],
      rating: 4.7,
      reviews: 8,
      isLiked: true
    },
    {
      id: 3,
      title: 'iPhone 12 Pro',
      seller: 'Anjali Patel',
      category: 'phones',
      price: '₹35000',
      originalPrice: '₹65000',
      condition: 'Excellent',
      location: 'Design Block',
      image: '📱',
      description: 'Perfect condition iPhone 12 Pro. Comes with original box and accessories.',
      tags: ['Phone', 'Apple', 'Excellent'],
      rating: 4.8,
      reviews: 15,
      isLiked: false
    },
    {
      id: 4,
      title: 'Canon EOS 200D DSLR',
      seller: 'Neha Desai',
      category: 'cameras',
      price: '₹25000',
      originalPrice: '₹45000',
      condition: 'Good',
      location: 'Photography Lab',
      image: '📸',
      description: 'Great entry-level DSLR camera. Perfect for photography students.',
      tags: ['Camera', 'DSLR', 'Canon'],
      rating: 4.6,
      reviews: 6,
      isLiked: false
    },
    {
      id: 5,
      title: 'Wireless Bluetooth Headphones',
      seller: 'Amit Singh',
      category: 'accessories',
      price: '₹1200',
      originalPrice: '₹2500',
      condition: 'Like New',
      location: 'IT Block',
      image: '🎧',
      description: 'High-quality wireless headphones. Great sound and battery life.',
      tags: ['Headphones', 'Wireless', 'Bluetooth'],
      rating: 4.5,
      reviews: 9,
      isLiked: true
    },
    {
      id: 6,
      title: 'Engineering Mathematics Vol. 1',
      seller: 'Carlos Rodriguez',
      category: 'books',
      price: '₹400',
      originalPrice: '₹800',
      condition: 'Good',
      location: 'Mathematics Department',
      image: '📖',
      description: 'Essential math textbook for engineering students. Well-annotated.',
      tags: ['Mathematics', 'Engineering', 'Textbook'],
      rating: 4.4,
      reviews: 18,
      isLiked: false
    }
  ]

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesPrice = parseFloat(item.price.replace('₹', '')) >= priceRange[0] && 
                        parseFloat(item.price.replace('₹', '')) <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''))
      case 'price-high':
        return parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', ''))
      case 'rating':
        return b.rating - a.rating
      case 'recent':
      default:
        return b.id - a.id
    }
  })

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
            Student Marketplace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
          >
            Buy and sell second-hand items with fellow NMIET students. 
            Save money and reduce waste while helping each other out!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link href="/marketplace/sell" className="btn-accent flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Sell an Item
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Price Range:</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  {filteredItems.length} Items Available
                </h2>
                <p className="text-gray-600">
                  Showing {filteredItems.length} of {items.length} items
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ItemCard item={item} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

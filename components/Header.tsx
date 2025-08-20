'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  User, 
  Bell, 
  MessageCircle,
  BookOpen,
  ShoppingBag,
  Users,
  Home,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context

  const navigation = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Skills', href: '/skills', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Marketplace', href: '/marketplace', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Community', href: '/community', icon: <Users className="w-5 h-5" /> },
    { name: 'Badges', href: '/badges', icon: <Award className="w-5 h-5" /> },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Skill Share</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <Bell className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                  Login
                </Link>
                <Link href="/signup" className="btn-primary">
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              {!isLoggedIn && (
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/signup" className="w-full btn-primary mb-3" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                  <Link href="/login" className="w-full inline-block text-center text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

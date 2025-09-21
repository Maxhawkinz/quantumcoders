'use client'

import { useState, useEffect, useRef } from 'react'
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
  Award,
  LogOut,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, logout } = useAuth()
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Skills', href: '/skills', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Marketplace', href: '/marketplace', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Community', href: '/community', icon: <Users className="w-5 h-5" /> },
    { name: 'Badges', href: '/badges', icon: <Award className="w-5 h-5" /> },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-papaya-whip/30 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-prussian-blue to-fire-brick rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-papaya-whip font-bold text-xl">S</span>
            </div>
            <span className="text-3xl font-bold gradient-text">Skill Share</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-prussian-blue hover:text-fire-brick transition-colors duration-200 font-medium"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button className="p-2 text-gray-600 hover:text-prussian-blue transition-colors duration-200">
                  <Bell className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-prussian-blue transition-colors duration-200">
                  <MessageCircle className="w-6 h-6" />
                </button>
                
                {/* User Profile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 p-2 text-gray-600 hover:text-prussian-blue transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-prussian-blue to-fire-brick rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-papaya-whip" />
                    </div>
                    <span className="hidden md:block text-sm font-medium">{user.fullName}</span>
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50"
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{user.fullName}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                        <p className="text-xs text-gray-500">{user.studentId}</p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          href="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <Link
                          href="/my-enrollments"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <BookOpen className="w-4 h-4 mr-3" />
                          My Enrollments
                        </Link>
                        <Link
                          href="/my-skills"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <Award className="w-4 h-4 mr-3" />
                          My Skills
                        </Link>
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={() => {
                            logout()
                            setShowUserMenu(false)
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login" className="text-gray-700 hover:text-prussian-blue font-medium transition-colors duration-200">
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
              {!user && (
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/signup" className="w-full btn-primary mb-3" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                  <Link href="/login" className="w-full inline-block text-center text-gray-700 hover:text-prussian-blue font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </div>
              )}
              
              {user && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="px-4 py-3 mb-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900">{user.fullName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link href="/profile" className="w-full inline-block text-center text-gray-700 hover:text-prussian-blue font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                  <Link href="/my-enrollments" className="w-full inline-block text-center text-gray-700 hover:text-prussian-blue font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    My Enrollments
                  </Link>
                  <button 
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-center text-red-600 hover:text-red-700 font-medium py-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

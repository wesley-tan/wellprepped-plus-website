'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const leftNavItems = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'TUTORING', href: '/tutoring' },
  ]

  const rightNavItems = [
    { name: 'RESOURCES', href: '/resources' },
    { name: 'COLLEGE ADMISSIONS', href: '/admissions' },
  ]

  const allNavItems = [...leftNavItems, ...rightNavItems]

  return (
    <header className="bg-white/95 backdrop-blur-md text-dark-800 sticky top-0 z-50 shadow-lg border-b border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col items-center py-3 md:py-4 px-4 md:px-0 w-full">
          {/* Top Row - Logo and Mobile Menu */}
          <div className="flex items-center w-full mb-3 md:mb-4 relative">
            {/* Centered Logo */}
            <div className="w-full flex justify-center">
              <Link href="/">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center cursor-pointer"
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d231c] font-host-grotesk leading-tight text-center tracking-tight">
                    WellPrepped+
                  </h1>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button - Absolute positioned */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 absolute right-0"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Bottom Row - Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            {allNavItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-sm font-semibold text-dark-800 hover:text-primary-600 transition-colors duration-200 font-host-grotesk tracking-wide cursor-pointer"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden border-t border-gray-200 py-6 bg-white/95 backdrop-blur-md px-4"
          >
            {/* Home link for mobile */}
            <Link href="/">
              <motion.span
                className="block py-4 px-4 text-lg font-medium text-dark-800 hover:text-primary-600 hover:bg-gray-50 rounded-xl mb-2 transition-all duration-200 cursor-pointer font-host-grotesk tracking-wide"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.3 }}
              >
                HOME
              </motion.span>
            </Link>
            {allNavItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  className="block py-4 px-4 text-lg font-medium text-dark-800 hover:text-primary-600 hover:bg-gray-50 rounded-xl mb-2 transition-all duration-200 cursor-pointer font-host-grotesk tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header 
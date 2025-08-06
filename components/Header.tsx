'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const allNavItems = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'TUTORING', href: '/tutoring' },
    { name: 'COLLEGE ADMISSIONS', href: '/admissions' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md text-dark-800 sticky top-0 z-50 shadow-lg border-b border-gray-100 w-full overflow-hidden">
      <div className="container-custom max-w-full">
        <div className="flex flex-col items-center py-3 md:py-4 px-4 md:px-0 w-full">
          {/* Top Row - Logo and Mobile Menu */}
          <div className="flex items-center w-full mb-3 md:mb-4 relative">
                               {/* Centered Logo */}
                   <div className="w-full flex justify-center">
                     <Link href="/">
                       <div className="flex items-center justify-center cursor-pointer">
                         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d231c] font-libre-franklin leading-tight text-center tracking-tight">
                           WellPrepped+
                         </h1>
                       </div>
                     </Link>
                   </div>

                   {/* Mobile Menu Button - Absolute positioned */}
                   <button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 absolute right-0"
                   >
                     {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                   </button>
          </div>

          {/* Bottom Row - Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            {allNavItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <span className="text-sm font-semibold text-dark-800 hover:text-primary-600 transition-colors duration-200 font-libre-franklin tracking-wide cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-white/95 backdrop-blur-md px-4">
            {/* Home link for mobile */}
            <Link href="/">
              <span
                className="block py-4 px-4 text-lg font-medium text-dark-800 hover:text-primary-600 hover:bg-gray-50 rounded-xl mb-2 transition-all duration-200 cursor-pointer font-libre-franklin tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </span>
            </Link>
            {allNavItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <span
                  className="block py-4 px-4 text-lg font-medium text-dark-800 hover:text-primary-600 hover:bg-gray-50 rounded-xl mb-2 transition-all duration-200 cursor-pointer font-libre-franklin tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 
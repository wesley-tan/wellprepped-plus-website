'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <section id="home" className="min-h-screen bg-dark-900 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-libre-franklin mb-6"
        >
          Elite Mentorship from{' '}
          <span className="text-[#00FF88]">Top Universities</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-white/80 font-libre-franklin max-w-3xl mx-auto mb-12"
        >
          Connect 1:1 with mentors from Harvard, Oxford, MIT & beyond
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin text-lg hover:bg-[#00FF88]/80 transition-colors"
        >
          Find Your Mentor
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-sm font-libre-franklin mb-6">Our mentors come from</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center max-w-4xl mx-auto">
            {/* Harvard */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png" 
                alt="Harvard University" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Oxford */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png" 
                alt="University of Oxford" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* MIT */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png" 
                alt="Massachusetts Institute of Technology" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Cambridge */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Cambridge_coat_of_arms_official.svg/1200px-University_of_Cambridge_coat_of_arms_official.svg.png" 
                alt="University of Cambridge" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Stanford */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1200px-Seal_of_Leland_Stanford_Junior_University.svg.png" 
                alt="Stanford University" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* ETH Zurich */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ETH_Zurich_Logo_black.svg/1200px-ETH_Zurich_Logo_black.svg.png" 
                alt="ETH Zurich" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
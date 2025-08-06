'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TutoringHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-libre-franklin mb-6"
        >
          IB <span className="text-[#00FF88]">Tutoring</span> Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-white/80 font-libre-franklin max-w-3xl mx-auto mb-12"
        >
          Comprehensive support from top IB scorers worldwide. Personalized guidance to help you excel in your IB journey.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin text-lg hover:bg-[#00FF88]/80 transition-colors"
        >
          Book Your First Lesson
        </motion.button>
      </div>
    </section>
  )
}

export default TutoringHero
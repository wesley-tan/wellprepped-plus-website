'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ResourcesHero = () => {
  return (
    <section className="bg-[#1d231c] px-6 md:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl font-bold text-white font-libre-franklin mb-6"
        >
          IB Resources Hub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          className="text-lg text-white/80 font-libre-franklin max-w-3xl mx-auto mb-8"
        >
          Access comprehensive study materials, past papers, and exam preparation tools to excel in your IB journey.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin text-lg hover:bg-[#00FF88]/80 transition-colors"
        >
          Explore Resources
        </motion.button>
      </div>
    </section>
  )
}

export default ResourcesHero
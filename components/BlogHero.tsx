'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BlogHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-libre-franklin mb-6">
            Insights & <span className="text-[#00FF88]">Expertise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-libre-franklin max-w-3xl mx-auto mb-8">
            Expert insights on IB education, university admissions, and academic success from our team of top-scoring mentors
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span className="bg-white/10 px-4 py-2 rounded-full font-libre-franklin">Study Strategies</span>
            <span className="bg-white/10 px-4 py-2 rounded-full font-libre-franklin">Admissions Tips</span>
            <span className="bg-white/10 px-4 py-2 rounded-full font-libre-franklin">IB Insights</span>
            <span className="bg-white/10 px-4 py-2 rounded-full font-libre-franklin">Success Stories</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogHero
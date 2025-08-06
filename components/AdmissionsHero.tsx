'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AdmissionsHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-libre-franklin mb-6"
        >
          College <span className="text-[#00FF88]">Admissions</span> Support
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-white/80 font-libre-franklin max-w-3xl mx-auto mb-12"
        >
          Navigate university admissions with expert guidance. From application strategy to interview preparation, we help you secure your place at top institutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-libre-franklin">95%</div>
            <div className="text-white/70 text-sm font-libre-franklin">Acceptance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-libre-franklin">50+</div>
            <div className="text-white/70 text-sm font-libre-franklin">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-libre-franklin">500+</div>
            <div className="text-white/70 text-sm font-libre-franklin">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-libre-franklin">13</div>
            <div className="text-white/70 text-sm font-libre-franklin">Top Universities</div>
          </div>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin text-lg hover:bg-[#00FF88]/80 transition-colors"
        >
          Schedule Consultation
        </motion.button>
      </div>
    </section>
  )
}

export default AdmissionsHero
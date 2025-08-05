'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TutoringHero = () => {
  return (
    <section id="tutoring" className="bg-[#1d231c] px-6 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight">
            Expert IB Tutoring Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-host-grotesk leading-relaxed max-w-3xl mx-auto">
            Comprehensive support from top IB scorers worldwide. From subject mastery to extended essays, 
            we provide personalized guidance to help you excel in your IB journey.
          </p>
          <div className="pt-4">
            <button className="bg-[#283b28] hover:bg-[#1f2d1f] text-white font-semibold py-3 px-8 rounded-full text-base font-host-grotesk transition-all duration-300">
              Book Your First Lesson
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TutoringHero
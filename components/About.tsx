'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="bg-[#1d231c] py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 flex-1 items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight text-center lg:text-left w-full tracking-tight mb-4">
                The Future of Education is Personal
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-white/80 leading-relaxed font-host-grotesk w-full text-center lg:text-left max-w-2xl">
                <p>
                  <strong className="text-white">WellPrepped+</strong> connects you with elite mentors from the world's top universities — Harvard, Oxford, MIT, and ETH Zurich. We believe every student deserves personalized guidance from those who've already achieved their dreams.
                </p>
                <p>
                  Our global platform breaks down geographical barriers, bringing world-class mentorship to students in New York, Paris, Singapore, and beyond. The best mentors aren't just in your city — they're on WellPrepped+.
                </p>
              </div>

              <div className="w-full pt-2">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Connect with Elite Mentors
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="relative w-full max-w-[400px] h-[300px] md:h-[350px] mx-auto lg:mx-0 group"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="City skyline representing global reach"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
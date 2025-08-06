'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                About WellPrepped+
              </h2>
              
              <div className="space-y-4 text-white/90 text-sm leading-relaxed" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                <p>
                  WellPrepped+ is a premier education service crafted to support the learning needs of IB students worldwide, focusing on the IBDP syllabus and college admissions support.
                </p>
                <p>
                  We specialize in supporting international families seeking individualized guidance for their children — our clients come from New York, Paris, Zurich, Munich, Singapore and Shanghai.
                </p>
              </div>

              <div className="mt-8">
                <button 
                  className="bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                  style={{ fontFamily: 'Libre Franklin, sans-serif' }}
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* City Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-48 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="City skyline at sunset"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 
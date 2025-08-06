'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Statistics = () => {
  const stats = [
    { 
      number: "44", 
      label: "Average score of our tutors,", 
      sublabel: "our minimum is 43/45" 
    },
    { 
      number: "3000", 
      label: "Hours of Lessons taught and", 
      sublabel: "counting" 
    },
    { 
      number: "13", 
      label: "Number of T50 universities that", 
      sublabel: "WellPrepped students attend" 
    }
  ]

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.6, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                  <div>{stat.label}</div>
                  <div>{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics 
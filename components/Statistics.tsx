'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, GraduationCap } from 'lucide-react'

const Statistics = () => {
  const stats = [
    {
      number: '44',
      description: 'Average score of our tutors, our minimum is 43/45',
      icon: Award,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      number: '3000',
      description: 'Hours of Lessons taught and counting',
      icon: Clock,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      number: '13',
      description: 'Number of T50 universities that WellPrepped students attend',
      icon: GraduationCap,
      color: 'from-green-400 to-emerald-500'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="bg-gradient-to-b from-[#1d231c] via-[#1a201a] to-[#1d231c] py-16 md:py-20 px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                  
                  {/* Number */}
                  <motion.div 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-inter leading-tight text-center tracking-tight mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base font-medium text-white/80 font-inter leading-relaxed text-center max-w-[240px] mx-auto">
                    {stat.description}
                  </p>

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics 
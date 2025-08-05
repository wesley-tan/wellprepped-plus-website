'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, GraduationCap, Globe, Target, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Elite 1-on-1 Mentorship',
      description: 'Connect with top students from Harvard, Oxford, and MIT for personalized academic guidance that goes beyond traditional tutoring.',
      icon: BookOpen,
      color: 'from-primary-400 to-primary-600',
    },
    {
      title: 'Application Excellence',
      description: 'Strategic support for university applications, personal statements, and essays from mentors who gained admission to your dream schools.',
      icon: Target,
      color: 'from-accent-purple to-purple-600',
    },
    {
      title: 'Global Access',
      description: 'Access world-class mentorship regardless of your location. The planet\'s top students are now within your reach.',
      icon: Globe,
      color: 'from-accent-yellow to-yellow-600',
    },
  ]

  return (
    <section id="tutoring" className="bg-[#1d231c] py-16 md:py-20 px-6 md:px-8">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk mb-4">
            Beyond Tutoring
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            Strategic guidance for standout applications, essays, and interviews from those who've succeeded at your dream schools
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="card-modern p-6 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-host-grotesk group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-6 h-6 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 
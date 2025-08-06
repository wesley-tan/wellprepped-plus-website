'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "1-on-1 with Top IB Educators",
      description: "We connect your child with 43-45 point scoring tutors who attend the world's best universities.",
      detail: "They know what it's like to do the IB, but more importantly, how to score."
    },
    {
      title: "24/7 EE/IA/TOK Support",
      description: "Our dedicated tutoring team supports students through the EE/IA/TOK writing process through our bank of 100+ Grade A samples designed to score.",
      detail: "We provide 24/7 consultations services."
    },
    {
      title: "Elite College Admissions",
      description: "We believe that the best students take advantage of the best opportunities.",
      detail: "Our team of college advisors will craft your child's profile from the ground up to maximise their chances at elite admissions.",
      extra: "WellPrepped+ students have gone on to Columbia, UPenn, Oxford and many more."
    }
  ]

  return (
    <section className="py-16 px-4 bg-dark-900 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-white mb-12" 
          style={{ fontFamily: 'Libre Franklin, sans-serif' }}
        >
          Our Services
        </motion.h2>

        <div className="space-y-8">
          {/* First Service - Text Left, Pattern Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[0].title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[0].description}
              </p>
              <p className="text-white/80 text-sm" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[0].detail}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="bg-[#2A2A2A] rounded-lg h-48 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.05) 10px,
                      rgba(255,255,255,0.05) 20px
                    )`
                  }}
                ></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Service - Pattern Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="bg-[#2A2A2A] rounded-lg h-48 relative overflow-hidden md:order-1"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.05) 10px,
                      rgba(255,255,255,0.05) 20px
                    )`
                  }}
                ></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[1].title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[1].description}
              </p>
              <p className="text-white/80 text-sm" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[1].detail}
              </p>
            </motion.div>
          </motion.div>

          {/* Third Service - Text Left, Pattern Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[2].title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[2].description}
              </p>
              <p className="text-white/80 text-sm mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[2].detail}
              </p>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                {services[2].extra}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="bg-[#2A2A2A] rounded-lg h-48 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.05) 10px,
                      rgba(255,255,255,0.05) 20px
                    )`
                  }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services 
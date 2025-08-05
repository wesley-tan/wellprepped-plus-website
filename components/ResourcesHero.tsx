'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Download, Search } from 'lucide-react'

const ResourcesHero = () => {
  return (
    <section className="bg-[#1d231c] px-6 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight">
            IB Study Resources
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-host-grotesk leading-relaxed max-w-3xl mx-auto">
            Access comprehensive study materials, practice tests, and academic tools designed by top IB achievers. 
            Everything you need to excel in your IB studies, all in one place.
          </p>
          
          {/* Quick Access Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: "Study Guides", desc: "Subject-specific materials" },
              { icon: Download, title: "Practice Tests", desc: "Past papers & mock exams" },
              { icon: Search, title: "Academic Tools", desc: "Calculators & planners" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-host-grotesk font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white/70 text-xs font-host-grotesk">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResourcesHero
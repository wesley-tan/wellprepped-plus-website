'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Users, Award } from 'lucide-react'

const AdmissionsHero = () => {
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
            College Admissions Support
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-host-grotesk leading-relaxed max-w-3xl mx-auto">
            Navigate the competitive world of university admissions with expert guidance. From application strategy 
            to interview preparation, we help you secure your place at top institutions worldwide.
          </p>
          
          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {[
              { icon: GraduationCap, number: "95%", label: "Acceptance Rate" },
              { icon: MapPin, number: "50+", label: "Countries" },
              { icon: Users, number: "500+", label: "Students Placed" },
              { icon: Award, number: "13", label: "Top 50 Universities" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
              >
                <metric.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white font-inter">{metric.number}</div>
                <div className="text-white/70 text-xs font-host-grotesk">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4">
            <button className="bg-[#283b28] hover:bg-[#1f2d1f] text-white font-semibold py-3 px-8 rounded-full text-base font-host-grotesk transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdmissionsHero
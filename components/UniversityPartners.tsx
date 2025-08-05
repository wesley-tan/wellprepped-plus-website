'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Users, Award } from 'lucide-react'

const UniversityPartners = () => {
  const regions = [
    {
      region: "United States",
      universities: ["Harvard University", "MIT", "Stanford", "Yale", "Princeton"],
      count: "25+ Universities",
      icon: MapPin,
      color: "from-blue-400 to-cyan-500"
    },
    {
      region: "United Kingdom", 
      universities: ["Oxford", "Cambridge", "Imperial College", "LSE", "UCL"],
      count: "20+ Universities",
      icon: Award,
      color: "from-green-400 to-emerald-500"
    },
    {
      region: "Canada & Australia",
      universities: ["University of Toronto", "UBC", "Melbourne", "ANU", "Sydney"],
      count: "15+ Universities", 
      icon: TrendingUp,
      color: "from-purple-400 to-violet-500"
    },
    {
      region: "Europe & Asia",
      universities: ["ETH Zurich", "NUS", "HKU", "Sciences Po", "Bocconi"],
      count: "30+ Universities",
      icon: Users,
      color: "from-orange-400 to-red-500"
    }
  ]

  const stats = [
    { number: "90+", label: "Partner Universities" },
    { number: "85%", label: "Top 100 Acceptances" },
    { number: "50+", label: "Countries Represented" },
    { number: "$2M+", label: "Scholarships Secured" }
  ]

  return (
    <section className="bg-[#1d231c] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight mb-4">
            University Network
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            Our students have been accepted to top universities worldwide
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 font-inter mb-1">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-host-grotesk">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* University Regions */}
        <div className="grid md:grid-cols-2 gap-6">
          {regions.map((region, index) => {
            const IconComponent = region.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${region.color} p-2.5 group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-host-grotesk">
                        {region.region}
                      </h3>
                      <div className="text-green-400 text-sm font-semibold font-host-grotesk">
                        {region.count}
                      </div>
                    </div>
                  </div>

                  {/* University List */}
                  <div className="space-y-2">
                    {region.universities.map((uni, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-white/80 text-sm font-host-grotesk">{uni}</span>
                      </div>
                    ))}
                    <div className="pt-2">
                      <span className="text-white/60 text-xs font-host-grotesk">+ many more...</span>
                    </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${region.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2 font-host-grotesk">
              Ready to Apply?
            </h3>
            <p className="text-white/80 text-sm mb-4 font-host-grotesk">
              Schedule a consultation to discuss your university goals and create your personalized application strategy.
            </p>
            <button className="bg-gradient-to-r from-[#283b28] to-[#1f2d1f] hover:from-[#1f2d1f] hover:to-[#141a14] text-white font-semibold py-3 px-8 rounded-full text-base font-host-grotesk transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UniversityPartners
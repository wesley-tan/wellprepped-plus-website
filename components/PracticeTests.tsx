'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, CheckCircle, Target, TrendingUp } from 'lucide-react'

const PracticeTests = () => {
  const testTypes = [
    {
      title: "Past Papers",
      subtitle: "Official IB Exams",
      description: "Complete collection of past IB examination papers with marking schemes",
      features: ["2015-2024 Papers", "All Subjects", "Marking Schemes"],
      icon: CheckCircle,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Mock Exams",
      subtitle: "Practice Under Pressure",
      description: "Full-length mock examinations with time limits and realistic conditions",
      features: ["Timed Tests", "Auto-Grading", "Performance Analytics"],
      icon: Clock,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Topic Tests",
      subtitle: "Focused Practice",
      description: "Targeted tests for specific topics and learning objectives",
      features: ["Subject-Specific", "Difficulty Levels", "Instant Feedback"],
      icon: Target,
      color: "from-purple-400 to-violet-500"
    }
  ]

  return (
    <section className="bg-[#1d231c] py-16 px-6 md:px-8 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-libre-franklin leading-tight tracking-tight mb-4">
            Practice Tests
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-libre-franklin">
            Comprehensive test preparation with past papers, mock exams, and targeted practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testTypes.map((test, index) => {
            const IconComponent = test.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden h-full">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${test.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 flex justify-center mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${test.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 font-libre-franklin">
                      {test.title}
                    </h3>
                    <h4 className="text-green-400 font-semibold text-sm mb-3 font-libre-franklin">
                      {test.subtitle}
                    </h4>
                    <p className="text-white/80 leading-relaxed text-sm mb-4">
                      {test.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {test.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span className="text-white/70 text-xs font-libre-franklin">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Access Button */}
                    <button className="bg-gradient-to-r from-[#283b28] to-[#1f2d1f] hover:from-[#1f2d1f] hover:to-[#141a14] text-white font-semibold py-2 px-6 rounded-full text-sm font-libre-franklin transition-all duration-300">
                      Start Practice
                    </button>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 w-6 h-6 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-300"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeTests
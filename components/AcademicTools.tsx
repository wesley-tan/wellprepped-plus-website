'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, Calendar, BarChart3, FileSpreadsheet, Clock, BookOpenCheck } from 'lucide-react'

const AcademicTools = () => {
  const tools = [
    {
      title: "Grade Calculator",
      description: "Calculate your predicted IB grade based on current performance",
      icon: Calculator,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Study Planner",
      description: "Organize your study schedule with personalized timetables",
      icon: Calendar,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Progress Tracker",
      description: "Monitor your learning progress across all subjects",
      icon: BarChart3,
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "IA Tracker",
      description: "Manage Internal Assessment deadlines and requirements",
      icon: FileSpreadsheet,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "CAS Logger",
      description: "Track your Creativity, Activity, Service hours and reflections",
      icon: Clock,
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "TOK Planner",
      description: "Structure your Theory of Knowledge essay and exhibition",
      icon: BookOpenCheck,
      color: "from-yellow-400 to-amber-500"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-[#1d231c] via-[#1a201a] to-[#1d231c] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight mb-4">
            Academic Tools
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            Essential tools to organize, track, and optimize your IB journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-3 font-host-grotesk">
                      {tool.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm flex-grow">
                      {tool.description}
                    </p>
                    
                    {/* Launch Button */}
                    <div className="mt-4">
                      <button className="text-green-400 hover:text-green-300 font-semibold text-sm font-host-grotesk transition-colors duration-300 flex items-center justify-center gap-1">
                        Launch Tool →
                      </button>
                    </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
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
              Need a Custom Tool?
            </h3>
            <p className="text-white/80 text-sm mb-4 font-host-grotesk">
              We're always developing new tools based on student needs. Let us know what would help you most!
            </p>
            <button className="bg-gradient-to-r from-[#283b28] to-[#1f2d1f] hover:from-[#1f2d1f] hover:to-[#141a14] text-white font-semibold py-2 px-6 rounded-full text-sm font-host-grotesk transition-all duration-300">
              Request a Tool
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AcademicTools
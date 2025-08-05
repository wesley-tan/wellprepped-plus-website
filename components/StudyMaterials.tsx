'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, FileText, Video, Headphones } from 'lucide-react'

const StudyMaterials = () => {
  const materials = [
    {
      title: "Subject Guides",
      description: "Comprehensive study guides for all IB subjects with key concepts, formulas, and exam tips",
      icon: BookOpen,
      count: "50+ Guides",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Revision Notes",
      description: "Condensed notes covering essential topics for quick review before exams",
      icon: FileText,
      count: "200+ Notes",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video explanations of complex concepts and problem-solving techniques",
      icon: Video,
      count: "100+ Videos",
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "Audio Summaries",
      description: "Audio content for on-the-go learning and revision of key topics",
      icon: Headphones,
      count: "75+ Audio",
      color: "from-orange-400 to-red-500"
    }
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="bg-gradient-to-b from-[#1d231c] via-[#1a201a] to-[#1d231c] py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight mb-4">
            Study Materials
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            High-quality study resources created by IB experts and top scorers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {materials.map((material, index) => {
            const IconComponent = material.icon
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
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${material.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                  
                  {/* Count Badge */}
                  <div className="text-center mb-3">
                    <span className="text-green-400 text-sm font-semibold font-host-grotesk">
                      {material.count}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 font-host-grotesk">
                      {material.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {material.description}
                    </p>
                  </div>

                  {/* Access Button */}
                  <div className="mt-4 text-center">
                    <button className="text-green-400 hover:text-green-300 font-semibold text-sm font-host-grotesk transition-colors duration-300">
                      Access Now →
                    </button>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${material.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default StudyMaterials
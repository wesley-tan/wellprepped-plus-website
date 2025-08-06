'use client'

import React from 'react'
import { motion } from 'framer-motion'

const StudyMaterials = () => {
  const materials = [
    {
      title: "Subject Guides",
      description: "Comprehensive study guides for all IB subjects with key concepts, formulas, and exam tips",
      count: "50+ Guides"
    },
    {
      title: "Revision Notes", 
      description: "Condensed notes covering essential topics for quick review before exams",
      count: "200+ Notes"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video explanations of complex concepts and problem-solving techniques",
      count: "100+ Videos"
    },
    {
      title: "Audio Summaries",
      description: "Audio content for on-the-go learning and revision of key topics",
      count: "75+ Audio"
    }
  ]

  return (
    <section className="bg-[#1d231c] py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-libre-franklin mb-4">
            Study Materials
          </h2>
          <p className="text-lg text-white/70 font-libre-franklin">
            High-quality study resources created by IB experts and top scorers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white font-libre-franklin">
                  {material.title}
                </h3>
                <span className="text-emerald-400 text-sm font-medium font-libre-franklin">
                  {material.count}
                </span>
              </div>
              <p className="text-white/80 text-sm font-libre-franklin leading-relaxed">
                {material.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudyMaterials
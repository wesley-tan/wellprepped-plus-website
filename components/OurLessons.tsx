'use client'

import React from 'react'
import { motion } from 'framer-motion'

const OurLessons = () => {
  const lessons = [
    {
      title: "IB Subject Lessons",
      subtitle: "3 SL and 3 HL subjects",
      description: "Learn any subject from 43-45 IB pointers who teach with detailed notes and exam based questions"
    },
    {
      title: "IA & Extended Essay Consults",
      subtitle: "24/7 IA and EE Consults",
      description: "Last-minute deadlines or final drafts, WellPrepped offers consults supported by top grade examples"
    },
    {
      title: "Theory of Knowledge",
      subtitle: "TOK Exhibition and Essay",
      description: "Demystify the requirements of the TOK exhibition and breakdown the TOK essay with guidance and samples"
    }
  ]

  return (
    <section className="bg-[#1d231c] px-6 md:px-8 py-16 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-libre-franklin mb-4">
            Our Lessons
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div 
              key={lesson.title} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.6, 0, 0.2, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2 font-libre-franklin">
                {lesson.title}
              </h3>
              <p className="text-emerald-400 text-sm mb-3 font-libre-franklin">
                {lesson.subtitle}
              </p>
              <p className="text-white/80 text-sm font-libre-franklin">
                {lesson.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin text-lg hover:bg-[#00FF88]/80 transition-colors"
          >
            Start Your Learning Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurLessons
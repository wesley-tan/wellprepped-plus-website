'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const OurLessons = () => {
  const lessons = [
    {
      title: "IB Subject Lessons",
      subtitle: "3 SL and 3 HL subjects.",
      description: "Learn any subject from 43-45 IB pointers who teach with detailed notes and exam based questions",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Students in lecture hall learning IB subjects"
    },
    {
      title: "IA & Extended Essay Consults",
      subtitle: "24/7 IA and EE Consults.",
      description: "Last-minute deadlines or final drafts, WellPrepped offers consults supported by top grade examples",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Laboratory equipment for IA and EE research"
    },
    {
      title: "Theory of Knowledge",
      subtitle: "TOK Exhibition and Essay.",
      description: "Demystify the requirements of the TOK exhibition and breakdown the TOK essay with guidance and samples",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Library with books representing theory of knowledge"
    }
  ]

  return (
    <section className="bg-[#1d231c] px-6 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight mb-4">
            Our Lessons
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[20px] mb-6">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={lesson.image}
                    alt={lesson.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-host-grotesk text-center px-4 leading-tight">
                      {lesson.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg md:text-xl font-bold text-white font-host-grotesk leading-tight">
                  {lesson.subtitle}
                </h4>
                <p className="text-white/80 text-sm md:text-base font-host-grotesk leading-relaxed">
                  {lesson.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-[#283b28] hover:bg-[#1f2d1f] text-white font-semibold py-3 px-8 rounded-full text-base font-host-grotesk transition-all duration-300">
            Start Your Learning Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurLessons
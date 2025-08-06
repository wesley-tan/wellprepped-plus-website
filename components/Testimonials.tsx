'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chiara Z",
      role: "Economics HL",
      school: "British School Jakarta",
      quote: "Mr. Ammel is the best tutor I have ever learned with. As a student who did not study IGCSE Economics, I was totally unprepared to go into IB Higher Level Economics. However, my concerns all went away when Mr. Ammel started tutoring me. He introduced concepts and definitions, diagrams, and concepts crucial to Economics in the most digestible way possible. His teaching style is not only encouraging but also practical. He always makes time to respond online to my countless questions no matter how early or late, before you turn them in. Thank you so much for helping me!"
    },
    {
      name: "Charlie M",
      role: "Economics HL", 
      school: "British School Istanbul",
      quote: "Ammel is an outstanding economics tutor. His ability to explain complex concepts in a clear and relatable way has made a significant difference in my understanding of the subject. He is super methodical in his approach and always ensures that every detail is covered. Ammel approaches all my questions patiently, breaking down difficult topics into manageable pieces and making them easy to grasp. Thanks to his excellent guidance, I achieved a 7 in IB Economics. His approachable teaching style creates a comfortable learning environment, allowing me to gain a deeper understanding. Highly recommended!"
    },
    {
      name: "Caroline",
      role: "Biology HL",
      school: "ICS Singapore",
      quote: "Although my son was initially hesitant about accepting of being tutored by someone who was physically and geographically distant (Abel was in Oxford and we are in Singapore), once he started engaging Abel, I could see a difference. Abel do so with Abel when you meet and learn with him, as he was friendly and personable."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            Trusted by students and parents,
            <br />
            worldwide.
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: [0.6, 0, 0.2, 1] }}
                className="bg-[#2A2A2A] rounded-lg border-2 border-[#3A3A3A] p-8"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-[#00FF88] text-lg font-semibold mb-2" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-white text-sm mb-1" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {testimonials[currentIndex].school}
                  </p>
                </div>

                {/* Quote */}
                <p className="text-white text-base leading-relaxed" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                  "{testimonials[currentIndex].quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#00FF88]' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 
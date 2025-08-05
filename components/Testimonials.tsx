'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah L',
      location: 'Singapore',
      university: 'Harvard University',
      content: 'Through WellPrepped+, I connected with a Harvard mentor who guided me through my application. The global access to elite mentors is game-changing.',
      rating: 5,
    },
    {
      name: 'Marcus T',
      location: 'London, UK',
      university: 'Oxford University',
      content: 'The personal mentorship from an Oxford graduate was exactly what I needed. WellPrepped+ made world-class guidance accessible from anywhere.',
      rating: 5,
    },
    {
      name: 'Emma K',
      location: 'Toronto, Canada',
      university: 'MIT',
      content: 'My MIT mentor understood my goals perfectly. The future of education truly is personal, and WellPrepped+ proves it.',
      rating: 5,
    },
  ]

  return (
    <section className="bg-[#1d231c] section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk mb-4">
            Global Students, Elite Mentors
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto font-host-grotesk">
            Students worldwide are connecting with mentors from Harvard, Oxford, and MIT
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-white/40 mb-4" />
                <p className="text-white/80 leading-relaxed italic font-host-grotesk">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Student Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold font-host-grotesk">{testimonial.name}</h4>
                <p className="text-white/60 text-sm font-host-grotesk">{testimonial.location}</p>
                <p className="text-green-400 text-sm font-medium font-host-grotesk">{testimonial.university}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 
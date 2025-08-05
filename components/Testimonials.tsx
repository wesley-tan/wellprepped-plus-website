'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Chiara Z',
      school: 'British School Jakarta',
      subject: 'H. Economics',
      content: 'Mr. Ammiel provides clear notes, thorough teaching, and is very responsive.',
      rating: 5,
    },
    {
      name: 'Alex',
      school: 'Canadian International School',
      subject: 'Geography',
      content: 'WellPrepped+ lessons are enjoyable, informative, with compact and easy-to-read notes.',
      rating: 5,
    },
    {
      name: 'Charlie M',
      school: 'British School Istanbul',
      subject: 'Economics',
      content: 'Ammiel explains complex concepts clearly, methodical approach, patient and encouraging.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-white font-host-grotesk mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from our satisfied students
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
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Student Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.school}</p>
                <p className="text-gray-400 text-sm">{testimonial.subject}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 
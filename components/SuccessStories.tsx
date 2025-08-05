'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, MapPin } from 'lucide-react'

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      university: "Harvard University",
      program: "Economics",
      country: "Singapore",
      quote: "WellPrepped+ helped me craft a compelling narrative that showcased my unique background. Their essay guidance was invaluable in getting into my dream school.",
      grade: "44/45 IB Points",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Marcus Johnson", 
      university: "Oxford University",
      program: "Philosophy, Politics & Economics",
      country: "United Kingdom",
      quote: "The interview preparation sessions gave me the confidence I needed. The mock interviews were so realistic that the actual interview felt familiar.",
      grade: "43/45 IB Points",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Elena Rodriguez",
      university: "Stanford University",
      program: "Computer Science",
      country: "Spain",
      quote: "From university selection to final submission, WellPrepped+ guided me through every step. I couldn't have navigated the US application process without them.",
      grade: "45/45 IB Points",
      color: "from-purple-400 to-violet-500"
    }
  ]

  const achievements = [
    { metric: "95%", label: "Acceptance Rate to Top 50 Universities" },
    { metric: "88%", label: "First Choice University Acceptance" },
    { metric: "$500K+", label: "Average Scholarship Value per Student" },
    { metric: "100%", label: "Student Satisfaction Rate" }
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
            Success Stories
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            Real students, real results. See how our guidance helped them achieve their university dreams.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 font-inter mb-1">
                {achievement.metric}
              </div>
              <div className="text-white/70 text-xs font-host-grotesk leading-tight">
                {achievement.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Student Stories */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-green-400/60" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-white/90 text-sm leading-relaxed mb-4 flex-grow font-host-grotesk italic">
                  "{story.quote}"
                </blockquote>

                {/* Student Info */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${story.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm font-host-grotesk">
                        {story.name}
                      </div>
                      <div className="text-green-400 text-xs font-semibold font-host-grotesk">
                        {story.grade}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-white/80 text-xs font-host-grotesk mb-1">
                    {story.program}
                  </div>
                  <div className="text-white font-semibold text-sm font-host-grotesk mb-2">
                    {story.university}
                  </div>
                  <div className="flex items-center gap-1 text-white/60 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span className="font-host-grotesk">{story.country}</span>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${story.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-lg font-bold text-white mb-4 font-host-grotesk">
            Ready to Write Your Success Story?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#283b28] to-[#1f2d1f] hover:from-[#1f2d1f] hover:to-[#141a14] text-white font-semibold py-3 px-8 rounded-full text-base font-host-grotesk transition-all duration-300">
              Start Your Journey
            </button>
            <button className="text-white/80 hover:text-white font-semibold py-3 px-6 rounded-full text-base font-host-grotesk transition-all duration-300 border border-white/20 hover:border-white/40">
              View More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessStories
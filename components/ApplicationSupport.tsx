'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Users, MessageSquare, Calendar, Search, CheckCircle } from 'lucide-react'

const ApplicationSupport = () => {
  const services = [
    {
      title: "Application Strategy",
      description: "Develop a comprehensive application strategy tailored to your goals and profile",
      features: ["University Selection", "Timeline Planning", "Profile Assessment", "Competitive Analysis"],
      icon: Search,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Personal Statements",
      description: "Craft compelling personal statements and essays that showcase your unique story",
      features: ["Essay Brainstorming", "Draft Reviews", "Structure Guidance", "Final Editing"],
      icon: FileText,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Interview Preparation",
      description: "Practice and prepare for university interviews with mock sessions and feedback",
      features: ["Mock Interviews", "Question Banks", "Confidence Building", "Technique Coaching"],
      icon: MessageSquare,
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "Application Management",
      description: "Stay organized with deadlines, requirements, and submission tracking",
      features: ["Deadline Tracking", "Document Management", "Submission Support", "Progress Monitoring"],
      icon: Calendar,
      color: "from-orange-400 to-red-500"
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
            Comprehensive Application Support
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            End-to-end guidance through every step of the university application process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 font-host-grotesk">
                        {service.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="relative z-10 grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-white/70 text-xs font-host-grotesk">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="relative z-10 mt-4 text-right">
                    <button className="text-green-400 hover:text-green-300 font-semibold text-sm font-host-grotesk transition-colors duration-300">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6 font-host-grotesk">
            Our Proven Process
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            {[
              "Initial Consultation",
              "Strategy Development", 
              "Application Creation",
              "Review & Submit",
              "Interview Prep",
              "Decision Support"
            ].map((step, index) => (
              <React.Fragment key={step}>
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 min-w-0 flex-shrink-0">
                  <div className="text-green-400 text-xs font-semibold mb-1">Step {index + 1}</div>
                  <div className="text-white text-sm font-host-grotesk">{step}</div>
                </div>
                {index < 5 && (
                  <div className="hidden md:block w-8 h-px bg-white/20"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationSupport
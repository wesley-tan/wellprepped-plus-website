'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-libre-franklin mb-6">
            Get in <span className="text-[#00FF88]">Touch</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-libre-franklin max-w-3xl mx-auto mb-8">
            Ready to unlock your academic potential? We're here to help you succeed with personalized guidance and expert mentorship.
          </p>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* WhatsApp */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
              <MessageCircle className="text-green-400" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2 font-libre-franklin">WhatsApp</h3>
            <p className="text-white/70 text-sm font-libre-franklin mb-3">Quick messages and consultations</p>
            <button className="text-green-400 hover:text-green-300 font-semibold text-sm font-libre-franklin transition-colors">
              Message Us
            </button>
          </div>

          {/* Phone */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Phone className="text-blue-400" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2 font-libre-franklin">Phone</h3>
            <p className="text-white/70 text-sm font-libre-franklin mb-3">Direct consultation calls</p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm font-libre-franklin transition-colors">
              Call Now
            </button>
          </div>

          {/* Email */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
              <Mail className="text-purple-400" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2 font-libre-franklin">Email</h3>
            <p className="text-white/70 text-sm font-libre-franklin mb-3">Detailed inquiries and support</p>
            <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm font-libre-franklin transition-colors">
              Send Email
            </button>
          </div>

          {/* Office */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
              <MapPin className="text-yellow-400" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2 font-libre-franklin">Global Reach</h3>
            <p className="text-white/70 text-sm font-libre-franklin mb-3">Serving students worldwide</p>
            <button className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm font-libre-franklin transition-colors">
              View Locations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
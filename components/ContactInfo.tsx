'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Globe, Users, Award } from 'lucide-react'

const ContactInfo = () => {
  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Available across all time zones for international students",
      details: "Get help when you need it, regardless of your location"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Mentors from top universities worldwide",
      details: "Access to expertise from Harvard, Oxford, MIT, and more"
    },
    {
      icon: Users,
      title: "Personalized Matching",
      description: "Paired with the perfect mentor for your needs",
      details: "Based on your subjects, goals, and learning style"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of academic excellence",
      details: "95% of our students achieve their target grades"
    }
  ]

  const offices = [
    {
      region: "Asia Pacific",
      cities: ["Singapore", "Shanghai", "Hong Kong"],
      timezone: "GMT+8",
      languages: ["English", "Mandarin", "Cantonese"]
    },
    {
      region: "Europe",
      cities: ["London", "Zurich", "Munich", "Paris"],
      timezone: "GMT+1",
      languages: ["English", "German", "French"]
    },
    {
      region: "North America",
      cities: ["New York", "Boston", "Toronto"],
      timezone: "GMT-5",
      languages: ["English", "French"]
    },
    {
      region: "Online Global",
      cities: ["Available Worldwide"],
      timezone: "All Timezones",
      languages: ["Multiple Languages"]
    }
  ]

  return (
    <section className="py-16 px-4 bg-dark-900 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Support Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-libre-franklin text-center mb-12">
            Why Choose WellPrepped+?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#00FF88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-[#00FF88]" size={32} />
                </div>
                <h3 className="text-white font-bold mb-2 font-libre-franklin">{feature.title}</h3>
                <p className="text-white/80 text-sm mb-2 font-libre-franklin">{feature.description}</p>
                <p className="text-white/60 text-xs font-libre-franklin">{feature.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Locations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-libre-franklin text-center mb-12">
            Global Presence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-bold mb-3 font-libre-franklin">{office.region}</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-white/70 text-sm font-libre-franklin mb-1">Cities:</p>
                    <p className="text-white text-sm font-libre-franklin">
                      {office.cities.join(", ")}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-white/70 text-sm font-libre-franklin mb-1">Timezone:</p>
                    <p className="text-white text-sm font-libre-franklin">{office.timezone}</p>
                  </div>
                  
                  <div>
                    <p className="text-white/70 text-sm font-libre-franklin mb-1">Languages:</p>
                    <p className="text-white text-sm font-libre-franklin">
                      {office.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white font-libre-franklin mb-6">
            Ready to Get Started?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2 font-libre-franklin">General Inquiries</h3>
              <p className="text-[#00FF88] font-libre-franklin">hello@wellpreppedplus.com</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-2 font-libre-franklin">Admissions Support</h3>
              <p className="text-[#00FF88] font-libre-franklin">admissions@wellpreppedplus.com</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-2 font-libre-franklin">Tutoring Services</h3>
              <p className="text-[#00FF88] font-libre-franklin">tutoring@wellpreppedplus.com</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/70 text-sm font-libre-franklin">
              Response time: Within 24 hours | Available 7 days a week
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
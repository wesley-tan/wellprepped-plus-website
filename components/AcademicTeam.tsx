'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AcademicTeam = () => {
  const tutors = [
    {
      name: "Tutor Name",
      university: "University",
      degree: "Degree", 
      score: "IB Score"
    },
    {
      name: "Tutor Name",
      university: "University",
      degree: "Degree",
      score: "IB Score"
    },
    {
      name: "Tutor Name", 
      university: "University",
      degree: "Degree",
      score: "IB Score"
    },
    {
      name: "Tutor Name",
      university: "University", 
      degree: "Degree",
      score: "IB Score"
    },
    {
      name: "Tutor Name",
      university: "University",
      degree: "Degree", 
      score: "IB Score"
    },
    {
      name: "Tutor Name",
      university: "University",
      degree: "Degree",
      score: "IB Score"
    },
    {
      name: "Tutor Name",
      university: "University",
      degree: "Degree",
      score: "IB Score"
    },
    {
      name: "Tutor Name",
      university: "University", 
      degree: "Degree",
      score: "IB Score"
    }
  ]

  return (
    <section className="bg-[#1d231c] py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            The WellPrepped+ Academic Team
          </h2>
          <p className="text-white/80 text-sm" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            We believe that the best people to teach the IB are graduates who have aced it.
          </p>
          <p className="text-white/80 text-sm mt-2" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            That's why our tutors are the top 1% of world scorers, with a minimum of 43/45 points. Our 70 tutors come from the world's best universities across the US, UK, and Asia Pacific region.
          </p>
        </motion.div>

        {/* University Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <p className="text-white/60 text-sm text-center mb-6" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            Our mentors come from
          </p>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-6 items-center justify-items-center">
            {/* Yale */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png" 
                alt="Yale University" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Dartmouth */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Dartmouth_College_shield.svg/1200px-Dartmouth_College_shield.svg.png" 
                alt="Dartmouth College" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* UPenn */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png" 
                alt="University of Pennsylvania" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* UChicago */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png" 
                alt="University of Chicago" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Oxford */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png" 
                alt="University of Oxford" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Cambridge */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Cambridge_coat_of_arms_official.svg/1200px-University_of_Cambridge_coat_of_arms_official.svg.png" 
                alt="University of Cambridge" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* NUS */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png" 
                alt="National University of Singapore" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* College Mentor Matcher */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-lg p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-6" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            College Mentor Matcher
          </h3>
          
          {/* Tutor Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tutors.map((tutor, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.6, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Profile Image Placeholder */}
                <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt={tutor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Tutor Info */}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-black" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {tutor.name}
                  </h4>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {tutor.university}
                  </p>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {tutor.degree}
                  </p>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
                    {tutor.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AcademicTeam
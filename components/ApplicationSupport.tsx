'use client'

import React from 'react'

const ApplicationSupport = () => {
  const services = [
    {
      title: "Application Strategy",
      description: "Develop a comprehensive application strategy tailored to your goals and profile",
      features: ["University Selection", "Timeline Planning", "Profile Assessment", "Competitive Analysis"]
    },
    {
      title: "Personal Statements", 
      description: "Craft compelling personal statements and essays that showcase your unique story",
      features: ["Essay Brainstorming", "Draft Reviews", "Structure Guidance", "Final Editing"]
    },
    {
      title: "Interview Preparation",
      description: "Practice and prepare for university interviews with mock sessions and feedback",
      features: ["Mock Interviews", "Question Banks", "Confidence Building", "Technique Coaching"]
    },
    {
      title: "Application Management",
      description: "Stay organized with deadlines, requirements, and submission tracking",
      features: ["Deadline Tracking", "Document Management", "Submission Support", "Progress Monitoring"]
    }
  ]

  return (
    <section className="bg-[#1d231c] py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-libre-franklin mb-4">
            Application Support
          </h2>
          <p className="text-lg text-white/70 font-libre-franklin">
            Comprehensive guidance for university applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3 font-libre-franklin">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm mb-4 font-libre-franklin">
                {service.description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-white/70 text-sm font-libre-franklin">
                    • {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicationSupport
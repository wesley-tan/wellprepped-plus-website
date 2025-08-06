'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneCountry: '+45',
    phoneNumber: '',
    remarks: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            Have questions?
          </h2>
          <p className="text-white/70 mb-8" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            Fill out our form, or book a slot to get in touch.
          </p>
          <button 
            className="bg-black text-white px-6 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
            style={{ fontFamily: 'Libre Franklin, sans-serif' }}
          >
            Contact Us
          </button>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-12"></div>

        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            Contact our tutoring team.
          </h3>
          <p className="text-white/70" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
            Ask a question or request info.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto space-y-4"
        >
          {/* Name Field */}
          <div>
            <label className="block text-white/70 text-sm mb-2 text-left" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 bg-white rounded text-black placeholder-gray-500 focus:outline-none"
              placeholder="Jane Smith"
              required
              style={{ fontFamily: 'Libre Franklin, sans-serif' }}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-white/70 text-sm mb-2 text-left" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
              Phone Number
            </label>
            <div className="flex space-x-2">
              <select
                value={formData.phoneCountry}
                onChange={(e) => handleInputChange('phoneCountry', e.target.value)}
                className="px-3 py-3 bg-white rounded text-black focus:outline-none"
                style={{ fontFamily: 'Libre Franklin, sans-serif' }}
              >
                <option value="+45">🇩🇰 +45</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+65">🇸🇬 +65</option>
                <option value="+86">🇨🇳 +86</option>
              </select>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="flex-1 px-4 py-3 bg-white rounded text-black placeholder-gray-500 focus:outline-none"
                placeholder="80 80 80 80"
                required
                style={{ fontFamily: 'Libre Franklin, sans-serif' }}
              />
            </div>
          </div>

          {/* Remarks Field */}
          <div>
            <label className="block text-white/70 text-sm mb-2 text-left" style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
              Remarks
            </label>
            <textarea
              value={formData.remarks}
              onChange={(e) => handleInputChange('remarks', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white rounded text-black placeholder-gray-500 focus:outline-none resize-none"
              placeholder="Anything we should know"
              style={{ fontFamily: 'Libre Franklin, sans-serif' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
            style={{ fontFamily: 'Libre Franklin, sans-serif' }}
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm 
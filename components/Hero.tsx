'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#1d231c] via-[#1a201a] to-[#1d231c] flex flex-col justify-center items-center min-h-[100vh] px-6 md:px-8 lg:px-16 py-12 md:py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div 
        className="max-w-[1072px] mx-auto text-center w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Content */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Brand Statement */}
          <motion.div variants={itemVariants} className="text-center mb-4">
            <div className="text-sm md:text-base text-green-400 font-medium tracking-wide font-host-grotesk">
              We believe that the future of education is personal.
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-host-grotesk leading-tight text-center tracking-tight px-2">
              World-class mentorship from the{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  planet's top students
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
              {' '}now within your reach.
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-xl lg:text-2xl text-white/90 font-host-grotesk text-center max-w-4xl px-6 leading-relaxed"
          >
            Connect 1:1 with mentors from Harvard, Oxford, ETH Zurich, and beyond — regardless of your location.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-white/70 px-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-host-grotesk font-medium text-xs md:text-sm">Elite University Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-host-grotesk font-medium text-xs md:text-sm">Global Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-host-grotesk font-medium text-xs md:text-sm">Borderless Opportunity</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 w-full">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Connect with Elite Mentors
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary w-full sm:w-auto justify-center py-4"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Elite Universities */}
        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-16 max-w-[800px] mx-auto px-4"
        >
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
            <div className="text-center mb-3">
              <span className="text-white/60 text-sm font-host-grotesk font-medium tracking-wide">
                Our mentors come from
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/80 font-host-grotesk font-semibold text-sm">
              <span>Harvard</span>
              <span>•</span>
              <span>Oxford</span>
              <span>•</span>
              <span>ETH Zurich</span>
              <span>•</span>
              <span>MIT</span>
              <span>•</span>
              <span>Cambridge</span>
              <span>•</span>
              <span>Stanford</span>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3 md:gap-4 mt-6 md:mt-8 z-[2] px-4"
        >
          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <span className="text-white/80 font-host-grotesk font-medium text-sm ml-1">4.9/5 rating</span>
          </div>

          {/* Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face", 
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + i * 0.1, duration: 0.4 }}
                >
                  <img 
                    src={src}
                    alt="Student" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white flex items-center justify-center shadow-md"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
              >
                <span className="text-white text-xs font-bold">+</span>
              </motion.div>
            </div>
            
            <motion.span 
              className="text-white/80 text-base font-host-grotesk font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              The best mentors aren't just in your city. <span className="text-green-400 font-semibold">They're on WellPrepped+.</span>
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
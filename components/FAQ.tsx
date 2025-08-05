'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I connect with mentors from top universities?",
      answer: "Our platform connects you directly with elite mentors from Harvard, Oxford, MIT, ETH Zurich, and other top institutions. Simply tell us your goals and location, and we'll match you with the perfect mentor regardless of where you are in the world."
    },
    {
      question: "What makes WellPrepped+ different from traditional tutoring?",
      answer: "We go beyond tutoring to provide strategic mentorship from students who've succeeded at your dream schools. Our mentors offer personal insights into university applications, study strategies, and career guidance that only comes from lived experience."
    },
    {
      question: "Can I access mentors if I'm not in a major city?",
      answer: "Absolutely. Our mission is to make elite mentorship borderless. Whether you're in a small town or a major city, you have the same access to world-class mentors as students in New York, London, or Singapore."
    },
    {
      question: "What kind of application support do you provide?",
      answer: "Our mentors provide strategic guidance for university applications, personal statements, and essays based on their own successful applications to top schools. They share insider knowledge about what admissions committees actually look for."
    },
    {
      question: "How personalized is the mentorship experience?",
      answer: "We believe the future of education is personal. Each mentorship is 1:1 and tailored to your specific goals, learning style, and aspirations. Your mentor becomes your personal guide to academic and career success."
    },
    {
      question: "What universities do your mentors attend or graduate from?",
      answer: "Our mentors come from the world's most prestigious institutions including Harvard, Oxford, MIT, Stanford, Cambridge, ETH Zurich, and other top-ranked universities globally. Each mentor is carefully vetted for both academic excellence and mentoring ability."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-[#1d231c] via-[#1a201a] to-[#1d231c]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-host-grotesk leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-host-grotesk">
            Learn more about connecting with elite mentors and accessing world-class guidance from anywhere
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-modern p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2 font-host-grotesk">
              Ready to connect with elite mentors?
            </h3>
            <p className="text-white/80 text-sm mb-4 font-host-grotesk">
              Join students worldwide who are accessing world-class mentorship from the planet's top universities.
            </p>
            <button className="btn-primary">
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
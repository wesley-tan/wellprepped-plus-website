'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Statistics from '@/components/Statistics'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
} 
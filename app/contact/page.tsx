import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - WellPrepped+',
  description: 'Get in touch with WellPrepped+ for expert IB tutoring and university admissions guidance. Available worldwide with personalized support.',
  keywords: 'contact WellPrepped, IB tutoring contact, admissions guidance, international education support',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  )
}
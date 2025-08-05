import type { Metadata } from 'next'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - WellPrepped+',
  description: 'We believe that the future of education is personal. Connect with elite mentors from Harvard, Oxford, and top universities worldwide.',
  keywords: 'personal education, elite mentors, global mentorship, Harvard, Oxford, MIT, personalized learning',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <About />
      <Footer />
    </main>
  )
}
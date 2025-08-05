import type { Metadata } from 'next'
import Header from '@/components/Header'
import TutoringHero from '@/components/TutoringHero'
import OurLessons from '@/components/OurLessons'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tutoring Services - WellPrepped+',
  description: 'Comprehensive IB tutoring services including subject lessons, IA & EE consults, and Theory of Knowledge support from top IB scorers.',
  keywords: 'IB tutoring, IB subjects, Internal Assessment, Extended Essay, Theory of Knowledge, TOK, IB support',
}

export default function TutoringPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <TutoringHero />
      <OurLessons />
      <Footer />
    </main>
  )
}
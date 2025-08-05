import type { Metadata } from 'next'
import Header from '@/components/Header'
import AdmissionsHero from '@/components/AdmissionsHero'
import ApplicationSupport from '@/components/ApplicationSupport'
import UniversityPartners from '@/components/UniversityPartners'
import SuccessStories from '@/components/SuccessStories'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'College Admissions - WellPrepped+',
  description: 'Expert college admissions support for IB students. Get help with applications, essays, interviews, and university selection from admissions specialists.',
  keywords: 'college admissions, university applications, personal statements, IB university admissions, college counseling',
}

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <AdmissionsHero />
      <ApplicationSupport />
      <UniversityPartners />
      <SuccessStories />
      <Footer />
    </main>
  )
}
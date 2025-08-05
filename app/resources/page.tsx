import type { Metadata } from 'next'
import Header from '@/components/Header'
import ResourcesHero from '@/components/ResourcesHero'
import StudyMaterials from '@/components/StudyMaterials'
import PracticeTests from '@/components/PracticeTests'
import AcademicTools from '@/components/AcademicTools'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Resources - WellPrepped+',
  description: 'Comprehensive IB study resources including materials, practice tests, academic tools, and guides for success in your IB journey.',
  keywords: 'IB resources, study materials, practice tests, IB guides, academic tools, IB preparation',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <ResourcesHero />
      <StudyMaterials />
      <PracticeTests />
      <AcademicTools />
      <Footer />
    </main>
  )
}
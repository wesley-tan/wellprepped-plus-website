import type { Metadata } from 'next'
import Header from '@/components/Header'
import BlogHero from '@/components/BlogHero'
import BlogGrid from '@/components/BlogGrid'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - WellPrepped+',
  description: 'Expert insights on IB education, university admissions, and academic success. Tips and strategies from our team of top-scoring mentors.',
  keywords: 'IB blog, education insights, university admissions tips, academic success, study strategies, college preparation',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  )
}

import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'
import './globals.css'

const libreFranklin = Libre_Franklin({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WellPrepped+ - Elite Mentorship from Top Universities',
  description: 'World-class mentorship from the planet\'s top students, now within your reach. Connect 1:1 with mentors from Harvard, Oxford, ETH Zurich, and beyond.',
  keywords: 'elite mentorship, Harvard tutors, Oxford mentors, MIT guidance, university admissions, personalized education, global mentorship',
  authors: [{ name: 'WellPrepped+' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} bg-dark-900 text-white`}>
        {children}
      </body>
    </html>
  )
} 
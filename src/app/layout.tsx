import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WellPrepped+ | World's Leading IB Education Company",
  description: "Expert IB tutoring and university admissions guidance. Personalized support from 43-45 point scoring tutors worldwide. Excel in the IB and gain admission to top universities like Oxford, Cambridge, Harvard, and more.",
  keywords: "IB tutoring, International Baccalaureate, university admissions, college admissions, Oxford, Cambridge, Harvard, IB tutor, 45 points, Extended Essay, Internal Assessment, TOK",
  authors: [{ name: "WellPrepped+" }],
  creator: "WellPrepped+",
  publisher: "WellPrepped+",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wellprepped-plus-website.vercel.app",
    siteName: "WellPrepped+",
    title: "WellPrepped+ | World's Leading IB Education Company",
    description: "Expert IB tutoring and university admissions guidance. Personalized support from 43-45 point scoring tutors worldwide.",
    images: [
      {
        url: "https://wellprepped-plus-website.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "WellPrepped+ - IB Education Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WellPrepped+ | World's Leading IB Education Company",
    description: "Expert IB tutoring and university admissions guidance from 43-45 point scoring tutors.",
    images: ["https://wellprepped-plus-website.vercel.app/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

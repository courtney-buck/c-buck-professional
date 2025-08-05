import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://courtneybuck.com'),
  title: 'Courtney Buck - Generalist',
  description: 'Professional generalist bridging gaps across domains with adaptable solutions for complex challenges.',
  keywords: ['generalist', 'problem solver', 'consultant', 'strategist'],
  authors: [{ name: 'Courtney Buck' }],
  openGraph: {
    title: 'Courtney Buck - Generalist',
    description: 'Professional generalist bridging gaps across domains with adaptable solutions for complex challenges.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courtney Buck - Generalist',
    description: 'Professional generalist bridging gaps across domains with adaptable solutions for complex challenges.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 
'use client'

import { Space_Mono } from 'next/font/google'
import './globals.css'
import NightSky from './components/NightSky'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const aboutSection = document.getElementById('about')
      const projectsSection = document.getElementById('projects')

      if (aboutSection && projectsSection) {
        if (scrollPosition >= projectsSection.offsetTop) {
          setActiveSection('projects')
        } else if (scrollPosition >= aboutSection.offsetTop) {
          setActiveSection('about')
        } else {
          setActiveSection('home')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-mono bg-black text-white">
        <NightSky />
        <div id="content-wrapper">
        <nav className="fixed top-0 right-0 p-4 z-10">
  <ul className="flex space-x-4">
    <li>
      <Link href="/"
        className="transition-opacity duration-200 hover:opacity-70 active:opacity-50"
      >
        Home
      </Link>
    </li>
    {/* <li>
      <button
        onClick={() => scrollToSection('projects')}
        className="transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        Projects
      </button>
    </li> */}
    <li>
      <Link href="/blog"
        className="transition-opacity duration-200 hover:opacity-70 active:opacity-50"
      >
        Blog
      </Link>
    </li>
  </ul>
</nav>
          <main className="container mx-auto px-4 pt-16">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}


'use client'
import { Analytics } from "@vercel/analytics/react"
import { Space_Mono } from 'next/font/google'
import './globals.css'
import NightSky from './components/NightSky'
//import { useState, useEffect } from 'react'
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
  // Remove unused state and functions
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
        <Analytics />
      </body>

    </html>
  )
}
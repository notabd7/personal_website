'use client'

import { Github, Linkedin } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 mt-auto">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://github.com/notabd7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://twitter.com/notabd7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FaXTwitter className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad07/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
        <p className="text-white text-sm opacity-70">© {new Date().getFullYear()}  a notabd7 production</p>
      </div>
    </footer>
  )
}
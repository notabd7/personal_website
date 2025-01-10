'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  videoUrl?: string
  loomUrl?: string
  giphyUrl?: string
}

export default function ProjectCard({ title, description, videoUrl, loomUrl, giphyUrl }: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
          } else if (videoRef.current) {
            videoRef.current.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="bg-opacity-20 bg-black backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer"
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <h3 className="text-2xl font-bold text-center py-4">{title}</h3>
      <div className="aspect-video">
        {giphyUrl ? (
          <iframe 
            src={giphyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        ) : loomUrl ? (
          <iframe 
            src={loomUrl}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        ) : videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-500" />
        )}
      </div>
      <div className="p-4 text-center">
        <p>{description}</p>
      </div>
    </motion.div>
  )
}
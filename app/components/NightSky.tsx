'use client'

import React, { useEffect, useRef } from 'react'

const NightSky: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; size: number }[] = []
    const shootingStars: { x: number; y: number; speed: number; size: number }[] = []

    // Create static stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
      })
    }

    // Draw stars
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Create and animate shooting stars
    function createShootingStar() {
      const x = -10 // Start off-screen
      const y = Math.random() * canvas.height
      const speed = Math.random() * 5 + 3 // Adjust speed as needed
      const size = Math.random() * 2 + 1 // Size of the shooting star

      shootingStars.push({ x, y, speed, size })

      setTimeout(() => {
        const index = shootingStars.findIndex((star) => star.x === x && star.y === y)
        if (index !== -1) {
          shootingStars.splice(index, 1)
        }
      }, 2000) // Remove after 2 seconds
    }

    // Draw shooting stars
    function drawShootingStars() {
      ctx.fillStyle = 'white'

      shootingStars.forEach((star, index) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.speed

        // Remove star if it's off-screen
        if (star.x > canvas.width) {
          shootingStars.splice(index, 1)
        }
      })
    }

    // Animation loop
    function animate() {
      drawStars()
      drawShootingStars()
      requestAnimationFrame(animate)
    }

    animate()

    // Create shooting stars every 10 seconds
    setInterval(createShootingStar, 6667) // Approximately 10000 / 1.5

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars.length = 0
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default NightSky


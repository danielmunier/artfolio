'use client'

import { useEffect, useRef } from 'react'

interface DynamicBackgroundProps {
  backgroundType: string
  className?: string
}

export function DynamicBackground({ backgroundType, className = '' }: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    console.log('DynamicBackground: backgroundType =', backgroundType)
    
    if (!canvasRef.current) {
      console.log('DynamicBackground: canvas not found')
      return
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('DynamicBackground: context not found')
      return
    }

    console.log('DynamicBackground: initializing', backgroundType)

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      console.log('DynamicBackground: resized to', canvas.width, 'x', canvas.height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Background types
    switch (backgroundType) {
      case 'starry-head':
        console.log('DynamicBackground: initializing starry-head')
        initStarryHeadBackground(canvas, ctx)
        break
      case 'gradient':
        console.log('DynamicBackground: initializing gradient')
        initGradientBackground(canvas, ctx)
        break
      case 'particles':
        console.log('DynamicBackground: initializing particles')
        initParticleBackground(canvas, ctx)
        break
      default:
        console.log('DynamicBackground: initializing default')
        initDefaultBackground(canvas, ctx)
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [backgroundType])

  console.log('DynamicBackground: rendering with type =', backgroundType)

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full ${className}`}
      style={{ 
        zIndex: 0,
        backgroundColor: 'transparent'
      }}
    />
  )
}

// Simple gradient background
function initGradientBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  console.log('Drawing gradient background')
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, '#667eea')
  gradient.addColorStop(1, '#764ba2')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  console.log('Gradient background drawn')
}

// Particle background
function initParticleBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  console.log('Drawing particle background')
  const particles: any[] = []
  
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1
    })
  }

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(animate)
  }

  animate()
  console.log('Particle background drawn')
}

// Default background
function initDefaultBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  console.log('Drawing default background')
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  console.log('Default background drawn')
}

// Starry Head Background (Cabeça Estelar) - Versão completa com animação
function initStarryHeadBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  console.log('Drawing starry head background')
  
  
  let particles: any[] = []
  let stars: any[] = []
  let shootingStars: any[] = []
  let squareSize: number
  let frameCount = 0


  class Star {
    x: number = 0
    y: number = 0
    size: number = 0
    opacity: number = 0
    twinkle: number = 0

    constructor() {
      this.reset()
    }

    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 1.2
      this.opacity = Math.random() * 0.8 + 0.2
      this.twinkle = Math.random() * 0.05 + 0.01
    }

    draw() {
      this.opacity += this.twinkle * (Math.random() > 0.5 ? 1 : -1)
      this.opacity = Math.max(0.2, Math.min(this.opacity, 1))
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  class ShootingStar {
    x: number = 0
    y: number = 0
    len: number = 0
    speed: number = 0
    angle: number = 0
    size: number = 0
    alpha: number = 0

    constructor() {
      this.reset()
    }

    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height * 0.5
      this.len = Math.random() * 300 + 100
      this.speed = Math.random() * 10 + 6
      this.angle = Math.PI / 4
      this.size = 1
      this.alpha = 1
    }

    update() {
      this.x += this.speed * Math.cos(this.angle)
      this.y += this.speed * Math.sin(this.angle)
      this.alpha -= 0.005
      if (this.alpha <= 0) this.reset()
    }

    draw() {
      ctx.strokeStyle = `rgba(255,255,255,${this.alpha})`
      ctx.lineWidth = this.size
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(this.x - this.len * Math.cos(this.angle), this.y - this.len * Math.sin(this.angle))
      ctx.stroke()
    }
  }

 

  function init() {
    particles = []


    



   
  }


  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, "#1b0033")
    gradient.addColorStop(1, "#330066")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw stars
    stars.forEach(star => star.draw())

    // Draw shooting stars
    shootingStars.forEach(star => {
      star.update()
      star.draw()
    })

    // Draw square border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'

    // Draw particles
    ctx.save()
    ctx.globalAlpha = Math.min(1, frameCount / 100)
    particles.forEach(particle => {
      particle.update()
      particle.draw()
    })
    ctx.restore()

    frameCount++
    requestAnimationFrame(animate)
  }

  // Initialize stars
  for (let i = 0; i < 800; i++) stars.push(new Star())
  for (let i = 0; i < 1; i++) shootingStars.push(new ShootingStar())

  


  init()
  animate()
  console.log('Starry head background drawn')


}

import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, -120]) // slower parallax for background
  const splineY = useTransform(scrollY, [0, 600], [0, -60]) // very subtle parallax for spline

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0b0e13]">
      {/* Parallax background network pattern */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)]" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grid" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#1f2937"/>
              <stop offset="100%" stopColor="#0f172a"/>
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#grid)" />
          {Array.from({ length: 20 }).map((_, i) => (
            <g key={i}>
              <line x1={(i+1)*40} y1="0" x2={(i+1)*40} y2="600" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
              <line x1="0" y1={(i+1)*30} x2="800" y2={(i+1)*30} stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Spline animation center */}
      <motion.div
        style={{ y: splineY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[900px] max-w-[90vw] h-[900px] max-h-[90vh] opacity-90">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,255,0.25),transparent_60%)]" />
        </div>
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
        >
          Accelerate Your Career. Master AI & Cloud with Expert-Led, Project-First Learning Paths.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
        >
          A modern platform combining hands-on projects, world-class instruction, and a clear roadmap to land roles in AI & Cloud.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2fb3ff] hover:bg-[#1da8ff] text-slate-900 font-semibold px-6 py-3 shadow-[0_0_0_4px_rgba(47,179,255,0.15)] transition-colors"
          >
            Start Your 7-Day Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how" className="text-slate-300 hover:text-white transition-colors">
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  )
}

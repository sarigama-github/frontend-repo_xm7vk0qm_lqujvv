import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: 'The projects directly mapped to my interview loops. I landed my first ML Engineer role in 8 weeks.',
    author: 'Priya S.',
    title: 'ML Engineer @ FinTech'
  },
  {
    quote: 'The Cloud path is elite—hands-on and practical. I finally understood IaC and pipelines end-to-end.',
    author: 'Marcus T.',
    title: 'Cloud Engineer @ SaaS'
  },
  {
    quote: 'Mentor feedback on my repo was game-changing. The portfolio boost got me 3 callbacks.',
    author: 'Elena R.',
    title: 'Data Engineer @ Startup'
  }
]

export default function SocialProof() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]) // minor, delayed parallax

  return (
    <section ref={ref} className="relative bg-[#0b0e13]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div style={{ y }} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.author} • {t.title}</div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

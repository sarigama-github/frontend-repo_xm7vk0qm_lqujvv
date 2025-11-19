import { motion } from 'framer-motion'
import { PlayCircle, Rocket, Wrench } from 'lucide-react'

const steps = [
  {
    title: 'Pick a path',
    desc: 'Choose AI or Cloud tracks with role-specific blueprints.',
    icon: PlayCircle,
  },
  {
    title: 'Build guided projects',
    desc: 'Work through real architectures with mentor walkthroughs.',
    icon: Wrench,
  },
  {
    title: 'Launch your career',
    desc: 'Interview prep, portfolio polish, and career support to land offers.',
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#0b0e13]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8"
            >
              <s.icon className="w-8 h-8 text-[#2fb3ff]" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

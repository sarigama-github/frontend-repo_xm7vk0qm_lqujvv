import { motion } from 'framer-motion'
import { CheckCircle2, Map, GraduationCap } from 'lucide-react'

const features = [
  {
    title: 'Project-First',
    desc: 'Build real, portfolio-ready projects from day one to cement skills fast.',
    icon: CheckCircle2,
  },
  {
    title: 'Instructor Quality',
    desc: 'Learn from seasoned engineers and architects with industry track records.',
    icon: GraduationCap,
  },
  {
    title: 'Career Path Mapping',
    desc: 'Follow guided paths tailored to roles like MLE, Cloud Eng, and Data Eng.',
    icon: Map,
  },
]

export default function Features() {
  return (
    <section className="relative bg-[#0b0e13]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.15 * i, duration: 0.6, ease: 'easeOut' }}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-[#2fb3ff]/40 transition-colors"
            >
              <f.icon className="w-8 h-8 text-[#2fb3ff]" />
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#0b0e13]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800"
        >
          <div className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(47,179,255,0.25),transparent_40%)] blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
              Start Your 7-Day Free SkillStream Trial
            </h2>
            <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
              Get instant access to all learning paths, projects, and mentor Q&A.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-[#2fb3ff] hover:bg-[#1da8ff] text-slate-900 font-semibold px-8 py-4 shadow-[0_0_0_6px_rgba(47,179,255,0.15)] transition-colors"
              >
                Claim Free Trial
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

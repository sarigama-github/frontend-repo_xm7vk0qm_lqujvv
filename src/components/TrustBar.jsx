import { motion } from 'framer-motion'

export default function TrustBar() {
  const logos = ['AWS', 'Azure', 'GCP', 'OpenAI', 'NVIDIA']
  return (
    <section className="bg-[#0b0e13] border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-slate-400 text-center mb-6">Trusted by learners from top teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="text-center text-slate-400"
            >
              <div className="text-slate-300/80 text-sm font-medium tracking-wide">
                {name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

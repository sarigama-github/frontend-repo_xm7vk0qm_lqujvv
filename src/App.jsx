import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white">
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
      <footer className="bg-[#0b0e13] border-t border-slate-800/80 py-10 text-center text-slate-500">
        © {new Date().getFullYear()} SkillStream. All rights reserved.
      </footer>
    </div>
  )
}

export default App

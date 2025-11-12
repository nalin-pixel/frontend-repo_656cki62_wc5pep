import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06070D]/60 via-[#06070D]/70 to-[#06070D]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">Portfolio · Frontend Engineer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Crafting sleek, human-centered web experiences
          </h1>
          <p className="mt-6 text-white/70 max-w-xl">
            I blend thoughtful interactions, performance, and modern aesthetics to build products that feel effortless.
          </p>
          <div className="mt-10 pointer-events-auto flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">View Work</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/15 transition">Contact</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06070D] to-transparent" />
    </section>
  )
}

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#06070D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-white text-3xl sm:text-4xl font-semibold">About Me</h2>
            <p className="text-white/70 mt-4">I design and build clean, delightful web interfaces with attention to micro-interactions and details that make a product feel premium.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', value: '4+' },
                { label: 'Projects', value: '20+' },
                { label: 'Focus', value: 'Frontend' },
                { label: 'Location', value: 'Indonesia' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                  <p className="text-white/60 text-xs">{item.label}</p>
                  <p className="text-white text-lg font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-cyan-500/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-white/90" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

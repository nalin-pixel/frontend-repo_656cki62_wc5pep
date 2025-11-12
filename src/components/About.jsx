import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    { label: 'Pengalaman', value: '4+ tahun' },
    { label: 'Proyek', value: '20+ selesai' },
    { label: 'Fokus', value: 'Frontend' },
    { label: 'Domisili', value: 'Indonesia' },
  ]

  const skills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Next.js', 'Accessibility']

  return (
    <section id="about" className="relative py-24 bg-[color:var(--lux-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Visual / Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_-10%,rgba(200,164,93,0.18),transparent_55%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-[color:var(--lux-ring)]/25 blur-xl" />
                  <div className="relative h-28 w-28 rounded-full border border-white/20 bg-gradient-to-br from-white to-white/80 shadow-inner" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy / Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="order-2 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-[color:var(--lux-fg)]">Tentang Saya</h2>
            <p className="text-white/70 mt-4 max-w-prose">
              Saya membangun antarmuka web yang rapi, halus, dan terasa premium. Fokus pada detail kecil, transisi yang tidak mengganggu, serta performa—agar pengalaman terasa effortless namun berkelas.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="lux-card p-4">
                  <p className="text-xs text-white/60">{item.label}</p>
                  <p className="text-lg font-medium text-white mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-6">
              <p className="text-sm text-white/60">Keahlian utama</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs text-white/85 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'High-performance analytics dashboard with micro-animations and realtime data.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: 'https://example.com'
  },
  {
    title: '3D Landing Page',
    desc: 'Interactive hero using WebGL and Spline for a modern startup.',
    tags: ['Spline', 'Framer Motion'],
    link: 'https://example.com'
  },
  {
    title: 'Design System',
    desc: 'A crisp, accessible component library for fast product teams.',
    tags: ['Radix', 'CVA', 'Storybook'],
    link: 'https://example.com'
  }
]

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-[#0A0B13]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Selected Work</h2>
          <p className="text-white/60 mt-2">A few projects that reflect my taste and problem-solving.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 hover:from-white/15 hover:to-white/10 transition overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-medium">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white transition" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-white/80 bg-white/10 border border-white/15 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

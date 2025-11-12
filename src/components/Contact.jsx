import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[color:var(--lux-bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lux-card p-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white text-3xl font-semibold">Ayo bangun sesuatu yang berkelas</h3>
              <p className="text-white/70 mt-2 max-w-prose">Terbuka untuk freelance, kolaborasi, atau full-time. Kirim pesan—saya akan membalas secepatnya.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@aldo.dev" className="btn btn-primary"><Mail size={18} /> Email</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-ghost"><Github size={18} /> GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn btn-ghost"><Linkedin size={18} /> LinkedIn</a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="grid gap-4"
              onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesanmu sudah terkirim.') }}
            >
              <div className="grid gap-2">
                <label className="text-white/70 text-sm">Nama</label>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--lux-ring)]/40" placeholder="Nama kamu" />
              </div>
              <div className="grid gap-2">
                <label className="text-white/70 text-sm">Email</label>
                <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--lux-ring)]/40" placeholder="kamu@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-white/70 text-sm">Pesan</label>
                <textarea rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--lux-ring)]/40" placeholder="Ceritakan kebutuhan proyekmu" />
              </div>
              <button className="btn btn-primary justify-self-start">Kirim</button>
            </motion.form>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

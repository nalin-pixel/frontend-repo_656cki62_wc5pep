import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#06070D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white text-3xl font-semibold">Let’s build something great</h3>
              <p className="text-white/70 mt-2">Open to freelance, collaborations, and full-time roles. Drop a message and I’ll get back to you.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@aldo.dev" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
                  <Mail size={18} /> Email
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/15 transition">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/15 transition">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="grid gap-4"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out!') }}
            >
              <div className="grid gap-2">
                <label className="text-white/70 text-sm">Name</label>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-white/70 text-sm">Email</label>
                <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-white/70 text-sm">Message</label>
                <textarea rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell me about your project" />
              </div>
              <button className="justify-self-start px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Send</button>
            </motion.form>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

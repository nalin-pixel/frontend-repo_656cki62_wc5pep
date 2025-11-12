import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const NavLinks = ({ className = '' }) => (
    <div className={`flex items-center gap-6 ${className}`}>
      <button onClick={() => scrollTo('about')} className="text-sm text-white/80 hover:text-white transition-colors">About</button>
      <button onClick={() => scrollTo('work')} className="text-sm text-white/80 hover:text-white transition-colors">Work</button>
      <button onClick={() => scrollTo('contact')} className="text-sm text-white/80 hover:text-white transition-colors">Contact</button>
      <a
        href="mailto:aldo@yourmail.com"
        className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20 transition-colors"
      >
        Resume
      </a>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mt-4 flex items-center justify-between rounded-2xl border px-4 py-3 transition-all backdrop-blur-xl ${
            scrolled ? 'border-white/15 bg-white/8 shadow-[0_6px_30px_rgba(0,0,0,0.25)]' : 'border-white/10 bg-white/5'
          }`}
        >
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 via-sky-400 to-cyan-400 shadow-inner" />
            <span className="text-white font-semibold tracking-wide">Aldo W.</span>
          </button>

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-4">
            <NavLinks className="flex-col items-stretch gap-3" />
          </div>
        )}
      </div>
    </header>
  )
}

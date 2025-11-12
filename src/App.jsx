import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#06070D]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#06070D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-white/50">
          © {new Date().getFullYear()} Aldo Wiranata Putra — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

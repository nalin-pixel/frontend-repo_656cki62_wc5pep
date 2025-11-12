import React, { lazy, Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  // Soft entrance once Spline is loaded
  useEffect(() => {
    if (!loaded) return
    const t = setTimeout(() => {}, 50)
    return () => clearTimeout(t)
  }, [loaded])

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-[radial-gradient(1200px_600px_at_30%_-10%,rgba(200,164,93,0.15),transparent_60%)]" />
          }
        >
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setLoaded(true)}
          />
        </Suspense>
      </div>

      {/* Readability gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgb(6,7,13,0.55)] via-[rgb(6,7,13,0.70)] to-[rgb(6,7,13,0.95)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-white/60 mb-6">
            Portfolio · Frontend Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Aldo Wiranata Putra — Membuat pengalaman web yang elegan, cepat, dan manusiawi
          </h1>
          <p className="mt-6 text-white/70 max-w-xl">
            Fokus pada detail, animasi halus, dan performa, agar produk terasa effortless namun berkelas.
          </p>
          <div className="mt-10 pointer-events-auto flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">Lihat Karya</a>
            <a href="#contact" className="btn btn-ghost">Kontak</a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06070D] to-transparent" />

      {/* Subtle load indicator ring */}
      {!loaded && (
        <div className="absolute right-6 bottom-6 z-10">
          <div className="h-3 w-3 rounded-full bg-white/60 animate-pulse shadow-[0_0_20px_rgba(200,164,93,0.35)]" />
        </div>
      )}
    </section>
  )
}

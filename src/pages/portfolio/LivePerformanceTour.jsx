// src/pages/portfolio/live-performance-tour.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function LivePerformanceTour() {
  const [bgImage, setBgImage] = useState('/images/live-tour.jpg')

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.unsplash.com/photos/random?query=live concert artist performance&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
        )
        setBgImage(res.data.urls.regular)
      } catch {
        setBgImage('/images/live-tour.jpg')
      }
    }
    fetchImage()
  }, [])

  return (
    <section className="relative min-h-screen py-24 px-6 text-white bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <a
          href="/#portfolio"
          className="inline-flex items-center text-pink-300 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Portfolio
        </a>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text mb-6"
        >
          🎤 Live Performance Tour
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg leading-relaxed text-white/90 space-y-4"
        >
          <p>
            The 2024 summer tour was nothing short of magical. From open-air festivals to sold-out arena shows,
            each performance was a celebration of rhythm, energy, and deep musical connection with the crowd.
          </p>
          <p>
            Highlights included crowd sing-alongs, surprise collaborations, and visuals that turned the stage into
            a storytelling canvas. We brought to life the tracks in new, unexpected ways that resonated with both
            loyal fans and new listeners.
          </p>
          <p>
            Thank you to every city, every crew, and every soul that vibed with us. Your energy fuels our journey!
            Get ready for more shows and bigger dreams.
          </p>
        </motion.p>
      </div>
    </section>
  )
}

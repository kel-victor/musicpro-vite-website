// src/pages/portfolio/futuresounds-ep.jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FutureSoundsEP() {
  const [image, setImage] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.unsplash.com/photos/random?query=futuristic music sound studio&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
        )
        setImage(res.data.urls.full)
      } catch {
        setImage('/images/futuresounds.jpg')
      }
    }
    fetchImage()
  }, [])

  return (
    <section className="relative min-h-screen py-28 px-6 bg-gradient-to-br from-black via-indigo-900 to-purple-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-10 animate-fade-in">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-pink-300 hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Collab: FutureSounds EP
        </motion.h1>

        <motion.div
          className="text-purple-100 leading-relaxed text-lg space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            This collaborative project with the FutureSounds collective explores the boundaries between
            futuristic soundscapes and genre-bending rhythms. With contributions from synth wizards,
            vocal talents, and beat scientists, the EP embodies a journey through space and time.
          </p>
          <p>
            Each track layers ambient melodies, atmospheric textures, and percussive grooves to craft
            a unique sonic experience. From the pulsing intro of "Neon Drift" to the experimental
            closure "Void Language," this EP invites listeners to experience the future of sound.
          </p>
          <p>
            Released in early 2024, the EP received global acclaim in underground and experimental
            circles. It's a must-hear for music explorers and sonic adventurers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// src/pages/portfolio/midnight-vibes.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MidnightVibesArticle() {
  const [image, setImage] = useState('/images/midnight.jpg')

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.unsplash.com/photos/random?query=chill+music+night+vibes&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
        )
        setImage(res.data.urls.full)
      } catch {
        setImage('/images/midnight.jpg')
      }
    }
    fetchImage()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 space-y-8">
        <Link to="/" className="inline-flex items-center gap-2 text-pink-300 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 text-transparent bg-clip-text animate-text-glow">
          Midnight Vibes Album
        </h1>

        <p className="text-lg leading-relaxed text-white/90">
          The Midnight Vibes album brings a fusion of downtempo beats and ambient synths crafted for late-night listening.
          Inspired by solitude and the beauty of city lights, each track is a sonic painting of calm and color. This album was produced over several months, using analog gear and sampled textures from nature, cityscapes, and vocal fragments.
          <br /><br />
          Fans describe it as “a spiritual journey through rhythm and silence.” Available now on all platforms with visuals synchronized to guide your immersive listening.
        </p>
      </div>
    </div>
  )
}

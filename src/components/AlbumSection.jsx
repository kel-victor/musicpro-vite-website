import React, { useEffect, useState } from 'react'
import { Music, Mic, Headphones, Video, Star, Shield } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import axios from 'axios'

const UNSPLASH_KEY = 'Yno9tGDDXz-qYKrGIr17qbrid7GPOk9CrqyZPsqd3_4'

const albums = [
  {
    key: 'production',
    title: 'Romantic Acoustic Guitar',
    desc: 'Tailored beats and professional compositions with acoustic romance vibes.',
    fallback: '/music-production.jpg',
    query: 'romantic guitar',
    audio: '/audios/production.mp3',
    manualAudio: '/audios/production.mp3'
  },
  {
    key: 'vocal',
    title: 'Love Piano Melody',
    desc: 'Heart-touching piano melody perfect for love stories.',
    fallback: '/vocal-recording.jpg',
    query: 'love piano music',
    audio: '/audios/vocal.mp3',
    manualAudio: '/audios/vocal.mp3'
  },
  {
    key: 'mixing',
    title: 'Sentimental Strings',
    desc: 'String symphony that brings emotion to every moment.',
    fallback: '/mixing-mastering.jpg',
    query: 'romantic violin',
    audio: '/audios/mixing.mp3',
    manualAudio: '/audios/mixing.mp3'
  },
  {
    key: 'video',
    title: 'Soft Jazz Romance',
    desc: 'Smooth and relaxing jazz tunes for romantic evenings.',
    fallback: '/music-video.jpg',
    query: 'romantic jazz night',
    audio: '/audios/video.mp3',
    manualAudio: '/audios/video.mp3'
  },
  {
    key: 'promotion',
    title: 'Evening Chill Love',
    desc: 'Lo-fi beats blended with a touch of romance.',
    fallback: '/brand-promotion.jpg',
    query: 'chill lo-fi love',
    audio: '/audios/promotion.mp3',
    manualAudio: '/audios/promotion.mp3'
  },
  {
    key: 'licensing',
    title: 'Romantic Lo-Fi Vibes',
    desc: 'Soft lo-fi tunes that whisper love in every beat.',
    fallback: '/licensing.jpg',
    query: 'romantic lo-fi music',
    audio: '/audios/licensing.mp3',
    manualAudio: '/audios/licensing.mp3'
  }
]

const icons = {
  production: <Music className="w-6 h-6 text-purple-300 drop-shadow" />,
  vocal: <Mic className="w-6 h-6 text-pink-300 drop-shadow" />,
  mixing: <Headphones className="w-6 h-6 text-yellow-300 drop-shadow" />,
  video: <Video className="w-6 h-6 text-cyan-300 drop-shadow" />,
  promotion: <Star className="w-6 h-6 text-red-300 drop-shadow" />,
  licensing: <Shield className="w-6 h-6 text-green-300 drop-shadow" />,
}

export default function AlbumSection() {
  const [images, setImages] = useState({})
  const topControls = useAnimation()
  const bottomControls = useAnimation()

  useEffect(() => {
    const fetchImages = async () => {
      const imgMap = {}
      for (const item of albums) {
        try {
          const res = await axios.get(
            `https://api.unsplash.com/photos/random?query=${encodeURIComponent(item.query)}&client_id=${UNSPLASH_KEY}`
          )
          imgMap[item.key] = res.data.urls.regular
        } catch {
          imgMap[item.key] = item.fallback
        }
      }
      setImages(imgMap)
    }

    fetchImages()

    topControls.start({ x: [0, 100, 0], transition: { duration: 12, repeat: Infinity, ease: 'linear' } })
    bottomControls.start({ x: [0, -100, 0], transition: { duration: 12, repeat: Infinity, ease: 'linear' } })

    // 🔊 Ensure only one audio plays at a time
    const audios = document.querySelectorAll('audio')
    audios.forEach((audio) => {
      audio.addEventListener('play', () => {
        audios.forEach((otherAudio) => {
          if (otherAudio !== audio) {
            otherAudio.pause()
          }
        })
      })
    })
  }, [])

  const pauseAnimations = () => {
    topControls.stop()
    bottomControls.stop()
  }

  const resumeAnimations = () => {
    topControls.start({ x: [0, 100, 0], transition: { duration: 12, repeat: Infinity, ease: 'linear' } })
    bottomControls.start({ x: [0, -100, 0], transition: { duration: 12, repeat: Infinity, ease: 'linear' } })
  }

  return (
    <section id="albums" className="relative py-28 overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/music-vibe-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-purple-900/60 backdrop-blur-xs" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-transparent bg-clip-text animate-text-glow">
          🎼 Album Collection
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-14 text-white/80 font-semibold italic animate-fade-in">
          Experience vibrant soundscapes, romantic melodies, and soft vibes.
        </p>

        {/* TOP 3 SLIDE RIGHT */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 overflow-hidden mb-12"
          animate={topControls}
        >
          {albums.slice(0, 3).map((album) => (
            <div
              key={album.key}
              onMouseEnter={pauseAnimations}
              onMouseLeave={resumeAnimations}
              className="w-full sm:w-[300px] md:max-w-sm rounded-2xl overflow-hidden border border-white/30 backdrop-blur-2xl bg-white/10 shadow-xl hover:scale-105 transition-transform"
            >
              <div
                className="h-52 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images[album.key] || album.fallback})` }}
                aria-label={`${album.title} cover`}
              />
              <div className="p-6">
                <div className="flex items-center gap-3">{icons[album.key]}</div>
                <h3 className="text-xl font-bold mt-2">{album.title}</h3>
                <p className="text-sm text-purple-100 italic mb-4">{album.desc}</p>
                <audio controls preload="metadata" src={album.audio || album.manualAudio} className="w-full mb-3 rounded" />
                <a href={album.audio} download className="text-sm border border-pink-400 text-pink-300 px-4 py-1 rounded-full hover:bg-pink-500/20">
                  Download
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM 3 SLIDE LEFT */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 overflow-hidden"
          animate={bottomControls}
        >
          {albums.slice(3).map((album) => (
            <div
              key={album.key}
              onMouseEnter={pauseAnimations}
              onMouseLeave={resumeAnimations}
              className="w-full sm:w-[300px] md:max-w-sm rounded-2xl overflow-hidden border border-white/30 backdrop-blur-2xl bg-white/10 shadow-xl hover:scale-105 transition-transform"
            >
              <div
                className="h-52 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images[album.key] || album.fallback})` }}
                aria-label={`${album.title} cover`}
              />
              <div className="p-6">
                <div className="flex items-center gap-3">{icons[album.key]}</div>
                <h3 className="text-xl font-bold mt-2">{album.title}</h3>
                <p className="text-sm text-purple-100 italic mb-4">{album.desc}</p>
                <audio controls preload="metadata" src={album.audio || album.manualAudio} className="w-full mb-3 rounded" />
                <a href={album.audio} download className="text-sm border border-pink-400 text-pink-300 px-4 py-1 rounded-full hover:bg-pink-500/20">
                  Download
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

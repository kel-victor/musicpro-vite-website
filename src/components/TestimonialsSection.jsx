import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwipeable } from 'react-swipeable'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [testimonials, setTestimonials] = useState([])

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const fetched = [
      {
        name: 'Angela Daniels',
        role: 'Afrobeat Artist',
        message:
          'MusicPro Hub transformed my raw vocals into magic. Their mixing & mastering team gave my EP a global feel!',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        video: 'public/angeladaniels.mp4'
      },
      {
        name: 'Kelvin Blaze',
        role: 'Indie Musician',
        message:
          'Their music video production is cinematic and powerful. I’ve seen a surge in followers and engagement.',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        video: 'public/kelvinblaze.mp4'
      },
      {
        name: 'Zino Vibes',
        role: 'Trap Soul Artist',
        message:
          'From recording to licensing, they walked me through everything. Professional and passionate team.',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
        video: 'public/zinovibes.mp4'
      },
      {
        name: 'Nora Groove',
        role: 'Jazz Vocalist',
        message: 'Their studio feels like home. Calm atmosphere and high-tech gear that brought out the best in me.',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
        video: 'public/noragroove.mp4'
      },
      {
        name: 'Yusuf Tempo',
        role: 'Drill Rapper',
        message: 'Thanks to their promotion strategy, my Spotify monthly listeners grew by over 600%.',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
        video: 'public/yusuftempo.mp4'
      },
      {
        name: 'Tamara Waves',
        role: 'RnB Singer',
        message: 'Their guidance and audio engineers helped me refine my sound beyond expectation.',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
        video: 'public/tamarawaves.mp4'
      },
      {
        name: 'Jay Synth',
        role: 'Beat Producer',
        message: 'Every session is productive and inspiring. They provide both creativity and results.',
        stars: 5,
        avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
        video: 'public/jaysynth.mp4'
      }
    ]
    setTestimonials(fetched)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 12000)
    return () => clearInterval(interval)
  }, [testimonials])

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  const current = testimonials[index]

  return (
    <section
      id="testimonials"
      className="relative py-28 text-white bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 bg-fixed"
        style={{ backgroundImage: "url('/testimonials-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 bg-clip-text animate-text-glow">
          What Our Artists Say 💬
        </h2>

        {current && (
          <div className="max-w-3xl mx-auto relative" {...handlers}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[inset_0_0_30px_rgba(255,255,255,0.1),0_0_50px_rgba(255,255,255,0.2)] text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaQuoteLeft className="text-pink-400 text-4xl animate-pulse" />
                </div>
                <p className="text-lg text-white/90 italic font-medium mb-6 transition duration-500 ease-in-out">
                  {`"${current.message}"`}
                </p>
                <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                  {[...Array(current.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-pink-400 shadow-md"
                />
                <h4 className="text-xl font-bold text-white">{current.name}</h4>
                <span className="text-white/60 text-sm">{current.role}</span>

                {current.video && (
                  <video
                    className="w-full mt-6 rounded-xl shadow-2xl"
                    src={current.video}
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button onClick={prev} className="text-white/80 hover:text-white transition">
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      i === index ? 'bg-pink-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="text-white/80 hover:text-white transition">
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

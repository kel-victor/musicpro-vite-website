import React, { useEffect, useState } from 'react'
import { Play, Download, Music } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const genreLinks = {
    'Hip-Hop': 'https://open.spotify.com/genre/hiphop-page',
    'R&B': 'https://open.spotify.com/genre/rnb-page',
    'Pop': 'https://open.spotify.com/genre/pop-page',
    'Electronic': 'https://open.spotify.com/genre/electronic-page',
    'Soul': 'https://open.spotify.com/search/soul',
    'Jazz': 'https://open.spotify.com/genre/jazz-page'
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Sparkle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/60 via-black/80 to-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      {/* Music-themed glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/30 rounded-full blur-2xl animate-ping" />

      {/* Floating Music Notes */}
      {["♪", "♫", "♩", "♬"].map((note, i) => (
        <div
          key={i}
          className="absolute text-white text-2xl animate-bounce"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            animationDelay: `${i * 2}s`
          }}
        >
          {note}
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Artist Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&auto=format&q=80"
                alt="Alex Rivers artist photo"
                loading="lazy"
                className="w-full h-full object-cover animate-[spin_30s_linear_infinite]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-5 backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/10 shadow-lg">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Hi, I'm <span className="text-pink-400 animate-pulse">Alex Rivers</span>
              </h1>
              <div className="text-xl text-purple-200 font-medium">
                Music Producer & Recording Artist
              </div>
              <p className="text-md text-gray-300 max-w-lg leading-relaxed">
                Creating soulful melodies and powerful beats that connect hearts and move souls.
                Stream my latest albums and discover the sound that's taking the music world by storm.
              </p>

              {/* Genre Tags */}
              <div className="flex flex-wrap gap-3 pt-3">
                {Object.entries(genreLinks).map(([genre, url], i) => (
                  <a
                    key={genre}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 border border-purple-400 text-purple-300 px-3 py-1 text-sm rounded-full backdrop-blur hover:bg-purple-700/30 transition"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {genre}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-pink-400 transition"
              >
                <Play className="w-5 h-5" /> Stream Now
              </a>
              <a
                href="https://music.apple.com/us/browse"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-300 text-purple-200 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-800/20 transition"
              >
                <Download className="w-5 h-5" /> Download Albums
              </a>
            </div>

            {/* Latest Album */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center space-x-3 backdrop-blur-sm">
              <Music className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-300">Latest Release</p>
                <p className="font-semibold text-white">"Midnight Vibes" – New Album Out Now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

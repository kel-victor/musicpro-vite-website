import React, { useEffect, useRef, useState } from 'react'

export default function BackgroundAudio() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4
      const play = () => {
        audio.play().catch(() => {}) // silently ignore errors
      }
      play()
    }

    // Stop background music if any other media is played
    const stopOnMediaPlay = (e) => {
      const target = e.target
      if (
        (target.tagName === 'AUDIO' || target.tagName === 'VIDEO') &&
        target !== audioRef.current &&
        !target.muted
      ) {
        if (!audioRef.current.paused) {
          audioRef.current.pause()
          setIsPlaying(false)
        }
      }
    }

    document.addEventListener('play', stopOnMediaPlay, true)

    return () => {
      document.removeEventListener('play', stopOnMediaPlay, true)
    }
  }, [])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-400 animate-fade-in">
      <button
        onClick={togglePlayback}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300 animate-pulse ring-2 ring-white"
        title="Toggle background music"
      >
        {isPlaying ? (
          <span className="text-xl">❚❚</span>
        ) : (
          <span className="text-xl">▶️</span>
        )}
        {/* blinking arrow */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-sm animate-bounce">
          👈 Tap here
        </div>
      </button>
      <p className="text-pink-100 text-sm italic">
        {isPlaying ? 'Playing background love instrumental' : 'Background music is paused'}
      </p>
      <audio
        ref={audioRef}
        src="/audios/bg-love.mp3"
        loop
        preload="auto"
        autoPlay
      />
    </div>
  )
}
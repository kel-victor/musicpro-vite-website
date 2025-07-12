import React from 'react'

// Importing Sections
import HeroSection from '../components/HeroSection'
import AlbumSection from '../components/AlbumSection'
import PortfolioSection from '../components/PortfolioSection'
import StreamingSection from '../components/StreamingSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'

// Shared Layout Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="text-gray-800 bg-white dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <AlbumSection />
        <PortfolioSection />
        <StreamingSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
    </div>
  )
}

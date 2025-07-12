import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent' // ✅ Add this line

// Pages
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogList from './pages/BlogList'
import MidNightVibes from './pages/portfolio/MidNightVibes'
import LivePerformanceTour from './pages/portfolio/LivePerformanceTour'
import FutureSoundsEp from './pages/portfolio/FutureSoundsEp'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/portfolio/midnight-vibes" element={<MidNightVibes />} />
            <Route path="/portfolio/live-performance-tour" element={<LivePerformanceTour />} />
            <Route path="/portfolio/futuresounds-ep" element={<FutureSoundsEp />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent /> {/* ✅ Add the banner at the bottom */}
      </div>
    </Router>
  )
}

// src/router/AppRouter.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import BlogList from '../pages/BlogList'

import LivePerformanceTour from '../pages/portfolio/LivePerformanceTour'
import FutureSoundsEp from '../pages/portfolio/FutureSoundsEp'

// Optional dynamic portfolio routing
// import PortfolioArticle from '../pages/PortfolioArticle'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Portfolio Static Pages */}
        <Route path="/portfolio/midnight-vibes" element={<MidnightVibes />} />
        <Route path="/portfolio/live-performance-tour" element={<LivePerformanceTour />} />
        <Route path="/portfolio/futuresounds-ep" element={<FutureSoundsEp />} />

        {/* Optional: Dynamic Portfolio Articles */}
        {/* <Route path="/portfolio/:slug" element={<PortfolioArticle />} /> */}
      </Routes>
    </Router>
  )
}

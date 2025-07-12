import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-8 mt-20 border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">AlexMusic</h2>
          <p className="text-sm text-gray-600">
            Inspiring souls through sound. Discover my latest releases and stay connected for more musical journeys.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
            <li><a href="#streaming" className="hover:text-primary">Streaming</a></li>
          </ul>
        </div>

        {/* Blog & More */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="sm:text-center">
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-start sm:justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Facebook"
            >
              <span><Facebook size={22} /></span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Instagram"
            >
              <span><Instagram size={22} /></span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Twitter"
            >
              <span><Twitter size={22} /></span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="YouTube"
            >
              <span><Youtube size={22} /></span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        &copy; {new Date().getFullYear()} AlexMusic. All rights reserved.
      </div>
    </footer>
  )
}

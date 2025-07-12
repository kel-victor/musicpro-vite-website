import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Albums', href: '#albums' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Streaming', href: '#streaming' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blogs' },
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          Alex<span className="text-black">Music</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-primary transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white shadow-md px-4 pb-4 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-3 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-primary transition font-medium"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

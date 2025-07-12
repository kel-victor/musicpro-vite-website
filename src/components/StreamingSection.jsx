import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  FaSpotify,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaSoundcloud
} from 'react-icons/fa'
import { sanitizeInput } from '../utils/sanitizeInput'

export default function StreamingSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // Honeypot field
  })
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const recaptchaRef = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Honeypot bot detection
    if (form.website.trim() !== '') {
      alert('Bot detected.')
      return
    }

    if (!captchaVerified) {
      alert('Please verify that you are not a robot.')
      return
    }

    const sanitizedName = sanitizeInput(form.name)
    const sanitizedEmail = sanitizeInput(form.email)
    const sanitizedMessage = sanitizeInput(form.message)

    const whatsappURL = `https://api.whatsapp.com/send?phone=+2349012345678&text=${encodeURIComponent(
      `Hello, I'm ${sanitizedName} (${sanitizedEmail}) - ${sanitizedMessage}`
    )}`

    window.open(whatsappURL, '_blank')

    // Optional: Reset form and captcha
    setForm({ name: '', email: '', message: '', website: '' })
    setCaptchaVerified(false)
    recaptchaRef.current.reset()
  }

  return (
    <section id="streaming" className="relative py-28 overflow-hidden text-white bg-gradient-to-br from-black to-gray-900">
      {/* Background & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/streaming-vibe-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text animate-text-glow">
          🚀 Stream Our Music
        </h2>

        {/* Streaming Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {[
            { href: 'https://audiomack.com', icon: FaSoundcloud, color: 'text-orange-400', label: 'Audiomack' },
            { href: 'https://spotify.com', icon: FaSpotify, color: 'text-green-400', label: 'Spotify' },
            { href: 'https://youtube.com', icon: FaYoutube, color: 'text-red-500', label: 'YouTube' }
          ].map(({ href, icon: Icon, color, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-all shadow-lg backdrop-blur hover:scale-105"
            >
              <Icon className={`${color} w-5 h-5`} /> {label}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/5 border border-white/20 rounded-3xl shadow-[inset_0_0_40px_rgba(255,255,255,0.1),0_0_60px_rgba(255,255,255,0.15)] backdrop-blur-2xl px-8 py-12 max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-6 text-white">📩 Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
              tabIndex="-1"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 backdrop-blur border border-white/20 focus:outline-none focus:ring focus:ring-pink-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 backdrop-blur border border-white/20 focus:outline-none focus:ring focus:ring-pink-300"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Type your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 backdrop-blur border border-white/20 focus:outline-none focus:ring focus:ring-pink-300"
            ></textarea>

            {/* Google reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6LfRoYArAAAAAK2oGfjDdeiAxy6L3i0DZuJ_RDjb"
              onChange={() => setCaptchaVerified(true)}
              ref={recaptchaRef}
              className="scale-90"
            />

            <button
              type="submit"
              className="block w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              Send via WhatsApp
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 text-center">
            <p className="text-white/80">📧 Email: contact@musicprohub.com</p>
            <p className="text-white/80">📞 Phone: +2349012345678</p>
            <div className="mt-4 flex justify-center gap-5 text-white text-xl">
              {[FaFacebook, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href={
                    i === 3
                      ? 'https://wa.me/2349012345678'
                      : ['https://facebook.com', 'https://twitter.com', 'https://instagram.com'][i]
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Midnight Vibes Album',
    desc: 'A soulful blend of chill and vibrant beats.',
    image: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?fit=crop&w=800&q=80',
    link: '/portfolio/midnight-vibes',
  },
  {
    title: 'Live Performance Tour',
    desc: 'Snippets and highlights from my 2024 summer tour.',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?fit=crop&w=800&q=80',
    link: '/portfolio/live-performance-tour',
  },
  {
    title: 'Collab: FutureSounds',
    desc: 'An experimental EP with FutureSounds collective.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?fit=crop&w=800&q=80',
    link: '/portfolio/futuresounds-ep',
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 text-white overflow-hidden mt-10"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/portfolio-vibe-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text animate-text-glow">
          🎨 Creative Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[inset_0_0_40px_rgba(255,255,255,0.2),0_0_60px_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_60px_rgba(255,255,255,0.4),0_0_100px_rgba(255,255,255,0.25)] transform hover:scale-[1.03] transition-all duration-700 group relative overflow-hidden"
            >
              {/* Project Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Text Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text animate-fade-in">
                  {project.title}
                </h3>
                <p className="text-sm text-purple-100 leading-relaxed animate-fade-in delay-200">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-pink-300 font-medium text-sm hover:underline animate-fade-in delay-300"
                >
                  View Full Article <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Hover Glow */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { blogs } from '../data/blogs'
import { Calendar, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogSection() {
  return (
    <section
      id="blogs"
      className="py-24 bg-gradient-to-br from-white via-slate-100 to-gray-200"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-600 bg-clip-text animate-text-glow">
          From the Blog ✍️
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => {
            const imageUrl = blog.image?.trim()
              ? blog.image
              : `https://source.unsplash.com/600x400/?music,${encodeURIComponent(blog.title)}`

            return (
              <Link
                to={`/blog/${blog.id}`}
                key={index}
                className="group bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] shadow-xl"
              >
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/fallback.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {blog.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

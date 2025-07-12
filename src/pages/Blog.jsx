import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

const initialBlogs = [
  {
    id: 'grow-your-music-brand',
    title: 'Grow Your Music Brand Online',
    author: 'Victor Asabor',
    date: 'July 10, 2025',
    image: 'https://source.unsplash.com/600x400/?music,studio',
    content: `
      <p>Growing your music brand online is essential in the modern age. Make sure your visuals are clean, your social presence is consistent, and your website is optimized.</p>
      <p>Strategies include email marketing, regular blog posts, collaborations, and paid advertising to maximize reach.</p>
    `,
    tags: ['Branding', 'Tips'],
  },
  {
    id: 'website-for-musicians',
    title: 'Why Every Musician Needs a Website',
    author: 'Martins Jesurobo',
    date: 'July 12, 2025',
    image: 'https://source.unsplash.com/600x400/?website,technology',
    content: `
      <p>A website is a musician’s digital home. It lets fans connect directly, browse music, book shows, and purchase merchandise without the noise of social media.</p>
    `,
    tags: ['Web Design', 'Tips'],
  },
  {
    id: 'security-for-music-websites',
    title: 'Top Website Security Tips for Musicians',
    author: 'Victor Asa Kel',
    date: 'July 15, 2025',
    image: 'https://source.unsplash.com/600x400/?cybersecurity,security',
    content: `
      <p>Keep your fan data and music assets secure with proper web security practices. This includes HTTPS, firewalls, input sanitization, and strong passwords.</p>
    `,
    tags: ['Security', 'Development'],
  },
  {
    id: 'music-marketing-in-2025',
    title: 'Music Marketing in 2025: What Works Now',
    author: 'Victor Asa Kel',
    date: 'July 14, 2025',
    image: 'https://images.unsplash.com/photo-1616401786260-c423e11c16b6?w=800&q=80',
    content: `
      <p>With the rapid evolution of social platforms and streaming algorithms, what worked last year might not work today. In 2025, artists should embrace content marketing, short-form video, influencer collaborations, and data-driven ads to grow their presence.</p>
    `,
    tags: ['Marketing', 'Streaming', 'Tips']
  }
]

export default function Blog() {
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState(1)

  const blogsPerPage = 3

  const filteredBlogs = initialBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.tags.join(' ').toLowerCase().includes(search.toLowerCase())
  )

  const paginatedBlogs = filteredBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage)

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen py-10 px-4`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border rounded-full flex items-center gap-2"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring dark:bg-gray-800 dark:text-white"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
          />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {paginatedBlogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="text-xs text-gray-500 dark:text-gray-300">
                  By {blog.author} • {blog.date}
                </div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <div
                  className="prose max-w-none text-gray-700 dark:text-gray-200"
                  dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 200) + '...' }}
                />
                <div className="flex flex-wrap gap-2 text-xs">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t mt-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${blog.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Share on Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 text-sm hover:underline"
                  >
                    Share on Facebook
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {filteredBlogs.length > blogsPerPage && (
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-700 dark:text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page * blogsPerPage >= filteredBlogs.length}
              className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-700 dark:text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

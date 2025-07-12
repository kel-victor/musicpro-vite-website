import React, { useState } from 'react'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'

const POSTS_PER_PAGE = 6

export default function BlogList() {
  const allTags = ['All', ...new Set(blogs.flatMap(blog => blog.tags))]

  const [currentTag, setCurrentTag] = useState('All')
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

  const filteredBlogs = blogs.filter(blog =>
    currentTag === 'All' ? true : blog.tags.includes(currentTag)
  )

  const visibleBlogs = filteredBlogs.slice(0, visibleCount)

  const showMore = () => setVisibleCount(prev => prev + POSTS_PER_PAGE)

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-10">
        📚 All Blog Posts
      </h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => {
              setCurrentTag(tag)
              setVisibleCount(POSTS_PER_PAGE)
            }}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-all ${
              currentTag === tag
                ? 'bg-primary text-white border-primary'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleBlogs.map(blog => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {blog.excerpt}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                By {blog.author} • {blog.date}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredBlogs.length && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            className="px-6 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/80 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          No blog posts found for <strong>{currentTag}</strong>.
        </div>
      )}
    </section>
  )
}

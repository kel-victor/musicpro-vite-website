import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../data/portfolioArticles'

export default function PortfolioArticle() {
  const { slug } = useParams()
  const article = articles[slug]

  if (!article) {
    return <div className="text-center text-red-500 mt-20">Article Not Found</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-extrabold mb-6">{article.title}</h1>
      <img src={article.image} alt={article.title} className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />
      <p className="text-lg leading-7 text-white/90">{article.content}</p>
    </div>
  )
}

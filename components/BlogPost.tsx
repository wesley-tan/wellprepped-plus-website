'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'

interface BlogPostProps {
  post: {
    title: string
    excerpt: string
    author: string
    authorRole: string
    date: string
    readTime: string
    category: string
    tags: string[]
    featuredImage: string
    content: string
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const categoryColors = {
    'IB Subjects': 'bg-blue-500/20 text-blue-300',
    'Admissions': 'bg-green-500/20 text-green-300',
    'Extended Essay': 'bg-purple-500/20 text-purple-300',
    'Theory of Knowledge': 'bg-yellow-500/20 text-yellow-300',
  }

  // Render WordPress HTML content with proper styling
  const renderWordPressContent = (htmlContent: string) => {
    return (
      <div 
        className="wordpress-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )
  }

  return (
    <article className="pt-32 pb-16 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.6, 0, 0.2, 1] }}
          className="mb-8"
        >
          <Link href="/blog">
            <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-libre-franklin">
              <ArrowLeft size={20} />
              Back to Blog
            </button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="mb-8"
        >
          {/* Category */}
          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold font-libre-franklin ${categoryColors[post.category as keyof typeof categoryColors] || 'bg-gray-500/20 text-gray-300'}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-libre-franklin leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="font-libre-franklin">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="font-libre-franklin">{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <div>
                <span className="font-semibold text-white font-libre-franklin">{post.author}</span>
                <span className="text-white/60 font-libre-franklin"> - {post.authorRole}</span>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-white/80 font-libre-franklin leading-relaxed">
            {post.excerpt}
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
          className="mb-12"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          className="prose prose-lg max-w-none"
        >
          <div className="article-content">
            {renderWordPressContent(post.content)}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <h3 className="text-white font-semibold mb-4 font-libre-franklin">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full font-libre-franklin hover:bg-white/20 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="mt-12 p-6 bg-white/5 rounded-lg"
        >
          <h3 className="text-white font-bold mb-2 font-libre-franklin">About the Author</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#00FF88]/20 rounded-full flex items-center justify-center">
              <User size={24} className="text-[#00FF88]" />
            </div>
            <div>
              <div className="text-white font-semibold font-libre-franklin">{post.author}</div>
              <div className="text-white/70 font-libre-franklin">{post.authorRole}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}

export default BlogPost
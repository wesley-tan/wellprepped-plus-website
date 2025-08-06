'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { formatWordPressDate } from '@/lib/wordpress'

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
    content: string // Full HTML content from WordPress
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  const categoryColors = {
    'IB Subjects': 'bg-blue-500/20 text-blue-300',
    'Admissions': 'bg-green-500/20 text-green-300',
    'Extended Essay': 'bg-purple-500/20 text-purple-300',
    'Theory of Knowledge': 'bg-yellow-500/20 text-yellow-300',
    'Study Tips': 'bg-orange-500/20 text-orange-300',
    'General': 'bg-gray-500/20 text-gray-300',
  }

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
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.6, 0, 0.2, 1] }}
          className="mb-8"
        >
          <Link href="/blog">
            <button className="flex items-center gap-2 text-white/70 hover:text-[#00FF88] transition-colors font-libre-franklin">
              <ArrowLeft size={16} />
              Back to Blog
            </button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="mb-12"
        >
          {/* Category */}
          <div className="mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold font-libre-franklin ${categoryColors[post.category as keyof typeof categoryColors] || categoryColors.General}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-libre-franklin mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm font-libre-franklin mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <div>
                <span className="text-white font-semibold">{post.author}</span>
                <span className="text-white/60 ml-1">• {post.authorRole}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatWordPressDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-white/80 font-libre-franklin leading-relaxed mb-8">
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
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          className="mb-12"
        >
          {renderWordPressContent(post.content)}
        </motion.div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
            className="mb-12"
          >
            <h3 className="text-white font-semibold font-libre-franklin mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 bg-white/10 text-white/70 text-sm rounded-lg font-libre-franklin hover:bg-white/20 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="bg-white/5 rounded-lg p-8 text-center border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white font-libre-franklin mb-4">
            Ready to Excel in Your Studies?
          </h3>
          <p className="text-white/70 font-libre-franklin mb-6 max-w-2xl mx-auto">
            Connect with our top-scoring mentors for personalized guidance and support in your academic journey.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin hover:bg-[#00FF88]/80 transition-colors">
              Get Started Today
            </button>
          </Link>
        </motion.div>
      </div>
    </article>
  )
}

export default BlogPost
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Loader2 } from 'lucide-react'
import {
  getWordPressPosts,
  getFeaturedImageUrl,
  getAuthorInfo,
  getPostCategories,
  getPostTags,
  calculateReadingTime,
  formatWordPressDate,
  stripHtmlTags,
  type WordPressPost
} from '@/lib/wordpress'

const BlogGrid = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  const categoryColors = {
    'IB Subjects': 'bg-blue-500/20 text-blue-300',
    'Admissions': 'bg-green-500/20 text-green-300',
    'Extended Essay': 'bg-purple-500/20 text-purple-300',
    'Theory of Knowledge': 'bg-yellow-500/20 text-yellow-300',
    'Study Tips': 'bg-orange-500/20 text-orange-300',
    'General': 'bg-gray-500/20 text-gray-300',
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await getWordPressPosts({ per_page: 6, page: 1 })
        setPosts(response.posts)
        setTotalPages(response.totalPages)
        setError(null)
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.')
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const loadMorePosts = async () => {
    if (currentPage >= totalPages || loadingMore) return
    try {
      setLoadingMore(true)
      const nextPage = currentPage + 1
      const response = await getWordPressPosts({ per_page: 6, page: nextPage })
      setPosts(prevPosts => [...prevPosts, ...response.posts])
      setCurrentPage(nextPage)
    } catch (err) {
      console.error('Error loading more posts:', err)
    } finally {
      setLoadingMore(false)
    }
  }

  const transformPost = (post: WordPressPost) => {
    const author = getAuthorInfo(post)
    const categories = getPostCategories(post)
    const tags = getPostTags(post)
    
    return {
      id: post.slug,
      title: post.title.rendered,
      excerpt: stripHtmlTags(post.excerpt.rendered),
      author: author.name,
      authorRole: author.description || 'WellPrepped+ Expert',
      date: post.date,
      readTime: calculateReadingTime(post.content.rendered),
      category: categories[0] || 'General',
      tags: tags,
      featuredImage: getFeaturedImageUrl(post),
    }
  }

  if (loading) {
    return (
      <section className="py-16 px-4 bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-[#00FF88] mx-auto mb-4" />
              <p className="text-white/70 font-libre-franklin">Loading articles...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-red-400 font-libre-franklin mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#00FF88] text-black font-semibold rounded-lg font-libre-franklin hover:bg-[#00FF88]/80 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-libre-franklin mb-4">
            Latest Articles
          </h2>
          <p className="text-white/70 font-libre-franklin max-w-2xl mx-auto">
            Expert insights and practical guidance from our team of top-scoring mentors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((wpPost, index) => {
            const post = transformPost(wpPost)
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold font-libre-franklin ${categoryColors[post.category as keyof typeof categoryColors] || categoryColors.General}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-white/60 mb-3 font-libre-franklin">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{formatWordPressDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 font-libre-franklin group-hover:text-[#00FF88] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4 font-libre-franklin line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-white/60" />
                      <div>
                        <div className="text-sm font-semibold text-white font-libre-franklin">
                          {post.author}
                        </div>
                        <div className="text-xs text-white/60 font-libre-franklin">
                          {post.authorRole}
                        </div>
                      </div>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <button className="flex items-center gap-1 text-[#00FF88] hover:text-[#00FF88]/80 transition-colors text-sm font-semibold font-libre-franklin">
                        Read More
                        <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded font-libre-franklin"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {currentPage < totalPages && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMorePosts}
              disabled={loadingMore}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg font-libre-franklin transition-all duration-300 border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {loadingMore && <Loader2 className="w-4 h-4 animate-spin" />}
              {loadingMore ? 'Loading...' : 'Load More Articles'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default BlogGrid
// WordPress REST API integration
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2'

export interface WordPressPost {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[]
  categories: number[]
  tags: number[]
  _links: {
    [key: string]: any
  }
  _embedded?: {
    author?: WordPressAuthor[]
    'wp:featuredmedia'?: WordPressMedia[]
    'wp:term'?: WordPressTerm[][]
  }
}

export interface WordPressAuthor {
  id: number
  name: string
  description: string
  link: string
  slug: string
  avatar_urls: {
    [size: string]: string
  }
}

export interface WordPressMedia {
  id: number
  date: string
  slug: string
  type: string
  link: string
  title: {
    rendered: string
  }
  author: number
  media_type: string
  mime_type: string
  media_details: {
    width: number
    height: number
    file: string
    sizes: {
      [key: string]: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
    }
  }
  source_url: string
}

export interface WordPressTerm {
  id: number
  link: string
  name: string
  slug: string
  taxonomy: string
}

export interface WordPressCategory extends WordPressTerm {
  count: number
  description: string
  parent: number
}

// Fetch blog posts from WordPress REST API
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  categories?: number[]
  tags?: number[]
  search?: string
  orderby?: string
  order?: 'asc' | 'desc'
} = {}): Promise<{
  posts: WordPressPost[]
  totalPages: number
  totalPosts: number
}> {
  try {
    // If no WordPress URL is configured, return sample data for testing
    if (!WORDPRESS_API_URL || WORDPRESS_API_URL.includes('your-wordpress-site.com')) {
      console.log('Using sample blog data - configure NEXT_PUBLIC_WORDPRESS_API_URL for WordPress integration')
      return getSampleBlogData(params)
    }

    const searchParams = new URLSearchParams({
      _embed: 'true', // Include author, featured media, and terms
      per_page: (params.per_page || 10).toString(),
      page: (params.page || 1).toString(),
      orderby: params.orderby || 'date',
      order: params.order || 'desc',
    })

    if (params.categories?.length) {
      searchParams.append('categories', params.categories.join(','))
    }
    if (params.tags?.length) {
      searchParams.append('tags', params.tags.join(','))
    }
    if (params.search) {
      searchParams.append('search', params.search)
    }

    const response = await fetch(`${WORDPRESS_API_URL}/posts?${searchParams}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`)
    }

    const posts: WordPressPost[] = await response.json()
    
    // Get pagination info from headers
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0')
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1')

    return {
      posts,
      totalPages,
      totalPosts,
    }
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    // Fallback to sample data on error
    return getSampleBlogData(params)
  }
}

// Sample blog data for testing when WordPress is not configured
function getSampleBlogData(params: any): { posts: WordPressPost[], totalPages: number, totalPosts: number } {
  const samplePosts: Partial<WordPressPost>[] = [
    {
      id: 1,
      slug: 'how-to-ace-ib-economics',
      title: { rendered: 'How to Ace IB Economics: A Complete Guide' },
      excerpt: { rendered: 'Master the key concepts, evaluation techniques, and exam strategies that helped our mentors achieve 7s in IB Economics.' },
      content: { rendered: '<h2>Understanding Core Concepts</h2><p>Economics can seem daunting at first, but with the right approach...</p>' },
      date: '2024-01-15T10:00:00Z',
      _embedded: {
        author: [{ id: 1, name: 'Sarah Chen', description: 'Economics Mentor, Cambridge Graduate' }],
        'wp:term': [[{ name: 'IB Subjects' }], [{ name: 'Economics' }, { name: 'Study Tips' }]],
        'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80' }]
      }
    },
  ]

  return {
    posts: samplePosts as WordPressPost[],
    totalPages: 1,
    totalPosts: samplePosts.length
  }
}

// Fetch a single post by slug
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`)
    }

    const posts: WordPressPost[] = await response.json()
    return posts[0] || null
  } catch (error) {
    console.error('Error fetching WordPress post:', error)
    return null
  }
}

// Fetch categories
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress categories:', error)
    return []
  }
}

// Fetch tags
export async function getWordPressTags(): Promise<WordPressTerm[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/tags?per_page=100`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress tags:', error)
    return []
  }
}

// Helper function to extract plain text from WordPress content
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = stripHtmlTags(content).split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Helper function to format WordPress date
export function formatWordPressDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper function to get featured image URL
export function getFeaturedImageUrl(post: WordPressPost, size: string = 'large'): string {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
  if (featuredMedia?.media_details?.sizes?.[size]) {
    return featuredMedia.media_details.sizes[size].source_url
  }
  return featuredMedia?.source_url || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
}

// Helper function to get author info
export function getAuthorInfo(post: WordPressPost): {
  name: string
  description: string
  avatar: string
} {
  const author = post._embedded?.author?.[0]
  return {
    name: author?.name || 'WellPrepped+ Team',
    description: author?.description || 'Expert IB Educator',
    avatar: author?.avatar_urls?.['96'] || ''
  }
}

// Helper function to get categories
export function getPostCategories(post: WordPressPost): string[] {
  const categories = post._embedded?.['wp:term']?.[0] || []
  return categories.map(cat => cat.name)
}

// Helper function to get tags
export function getPostTags(post: WordPressPost): string[] {
  const tags = post._embedded?.['wp:term']?.[1] || []
  return tags.map(tag => tag.name)
}
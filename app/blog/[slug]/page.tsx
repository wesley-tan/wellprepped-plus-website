import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'
import { 
  getWordPressPost, 
  getFeaturedImageUrl, 
  getAuthorInfo, 
  getPostCategories, 
  getPostTags,
  calculateReadingTime,
  stripHtmlTags 
} from '@/lib/wordpress'

type BlogPostParams = {
  slug: string
}

export async function generateMetadata({ params }: { params: BlogPostParams }): Promise<Metadata> {
  const wpPost = await getWordPressPost(params.slug)
  
  if (!wpPost) {
    return {
      title: 'Post Not Found - WellPrepped+',
    }
  }

  const tags = getPostTags(wpPost)
  const excerpt = stripHtmlTags(wpPost.excerpt.rendered)

  return {
    title: `${wpPost.title.rendered} - WellPrepped+ Blog`,
    description: excerpt,
    keywords: tags.join(', '),
    openGraph: {
      title: wpPost.title.rendered,
      description: excerpt,
      images: [getFeaturedImageUrl(wpPost)],
      type: 'article',
      publishedTime: wpPost.date,
      authors: [getAuthorInfo(wpPost).name],
    },
    twitter: {
      card: 'summary_large_image',
      title: wpPost.title.rendered,
      description: excerpt,
      images: [getFeaturedImageUrl(wpPost)],
    },
  }
}

// Note: We can't generateStaticParams with WordPress API without knowing all slugs
// This will be generated at runtime instead

export default async function BlogPostPage({ params }: { params: BlogPostParams }) {
  const wpPost = await getWordPressPost(params.slug)
  
  if (!wpPost) {
    notFound()
  }

  // Transform WordPress post to the format expected by BlogPost component
  const author = getAuthorInfo(wpPost)
  const categories = getPostCategories(wpPost)
  const tags = getPostTags(wpPost)
  
  const post = {
    title: wpPost.title.rendered,
    excerpt: stripHtmlTags(wpPost.excerpt.rendered),
    author: author.name,
    authorRole: author.description || 'WellPrepped+ Expert',
    date: wpPost.date,
    readTime: calculateReadingTime(wpPost.content.rendered),
    category: categories[0] || 'General',
    tags: tags,
    featuredImage: getFeaturedImageUrl(wpPost, 'full'),
    content: wpPost.content.rendered, // Full HTML content
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <BlogPost post={post} />
      <Footer />
    </main>
  )
}
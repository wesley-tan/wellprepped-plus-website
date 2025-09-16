import React from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Component to render Notion content blocks
const ContentBlock = ({ block }: { block: any }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mb-4 text-foreground/90 leading-relaxed">{block.content}</p>;
    case 'h1':
      return <h1 className="text-4xl font-display font-bold text-foreground mb-6 mt-8">{block.content}</h1>;
    case 'h2':
      return <h2 className="text-3xl font-display font-bold text-foreground mb-4 mt-6">{block.content}</h2>;
    case 'h3':
      return <h3 className="text-2xl font-display font-semibold text-foreground mb-3 mt-5">{block.content}</h3>;
    case 'li':
      return <li className="text-foreground/90 mb-2">{block.content}</li>;
    case 'oli':
      return <li className="text-foreground/90 mb-2">{block.content}</li>;
    case 'image':
      return (
        <div className="my-8">
          <Image
            src={block.url}
            alt={block.caption || "Blog image"}
            width={800}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {block.caption && (
            <p className="text-center text-foreground/60 text-sm mt-2 italic">{block.caption}</p>
          )}
        </div>
      );
    case 'code':
      return (
        <pre className="bg-foreground/10 p-4 rounded-lg overflow-x-auto my-6">
          <code className="text-accent text-sm">{block.content}</code>
        </pre>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-foreground/80">
          {block.content}
        </blockquote>
      );
    default:
      return null;
  }
};

// Static blog posts data - same as in blog page
const staticPosts = {
  "how-to-score-45-points-ib": {
    title: "How to Score 45 Points in the IB Diploma Programme",
    excerpt: "Discover the strategies and study techniques that helped our students achieve perfect scores in their IB exams.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "IB Strategy",
    cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center",
    content: [
      { type: "paragraph", content: "Achieving a perfect 45 points in the IB Diploma Programme is the ultimate goal for many students. While challenging, it's absolutely achievable with the right strategies and mindset." },
      { type: "h2", content: "1. Master Your Study Schedule" },
      { type: "paragraph", content: "Consistency is key. Create a study schedule that allocates time for each subject while leaving room for unexpected challenges and revision." },
      { type: "h2", content: "2. Focus on Internal Assessments" },
      { type: "paragraph", content: "IAs can make or break your final grade. Start early, choose topics you're passionate about, and seek feedback from your teachers throughout the process." },
      { type: "h2", content: "3. Understand the Assessment Criteria" },
      { type: "paragraph", content: "Know exactly what examiners are looking for in each component. This knowledge will help you structure your responses effectively." }
    ]
  },
  "oxford-vs-cambridge-guide": {
    title: "Oxford vs Cambridge: Which is Right for You?",
    excerpt: "A comprehensive guide to understanding the differences between these prestigious universities and making the right choice.",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "University Guide",
    cover: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop&crop=center",
    content: [
      { type: "paragraph", content: "Both Oxford and Cambridge are world-renowned institutions, but they have distinct characteristics that might make one more suitable for you than the other." },
      { type: "h2", content: "Academic Structure" },
      { type: "paragraph", content: "Oxford uses a tutorial system with weekly one-on-one or small group sessions, while Cambridge emphasizes supervisions in slightly larger groups." },
      { type: "h2", content: "College Life" },
      { type: "paragraph", content: "The college system differs between the two universities, affecting everything from accommodation to social life and academic support." },
      { type: "h2", content: "Application Process" },
      { type: "paragraph", content: "While both use UCAS and have similar requirements, the interview processes and specific subject requirements can vary significantly." }
    ]
  },
  "perfect-personal-statement": {
    title: "Writing the Perfect Personal Statement",
    excerpt: "Expert tips from our admissions team on crafting compelling personal statements that stand out to admissions officers.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Admissions",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop&crop=center",
    content: [
      { type: "paragraph", content: "Your personal statement is your opportunity to show admissions officers who you are beyond grades and test scores." },
      { type: "h2", content: "Start with a Hook" },
      { type: "paragraph", content: "Begin with something that immediately captures the reader's attention and makes them want to learn more about you." },
      { type: "h2", content: "Show, Don't Tell" },
      { type: "paragraph", content: "Instead of simply stating that you're passionate about your subject, provide specific examples that demonstrate this passion." },
      { type: "h2", content: "Connect Everything" },
      { type: "paragraph", content: "Make sure every paragraph connects back to why you want to study your chosen subject and why you'd be a great addition to their university." }
    ]
  }
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  
  // Get post from static data
  const post = staticPosts[slug as keyof typeof staticPosts];
  
  if (!post) {
    notFound();
  }

  const featuredImage = post.cover;
  const formattedDate = post.date;
  const readingTime = post.readTime;
  const categoryName = post.category;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-foreground/70">
                  <li>
                    <Link href="/" className="hover:text-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-foreground/50">/</li>
                  <li>
                    <Link href="/blog" className="hover:text-accent transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li className="text-foreground/50">/</li>
                  <li className="text-foreground">{post.title}</li>
                </ol>
              </nav>

              {/* Post Header */}
              <header className="mb-12">
                {/* Category */}
                <div className="mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {categoryName}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-foreground/70">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">By WellPrepped+ Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{readingTime}</span>
                  </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-foreground/10 text-foreground px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Featured Image */}
              {featuredImage && (
                <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
                  <Image
                    src={featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-6">
            <article className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {post.content && post.content.map((block: any, index: number) => (
                  <ContentBlock key={index} block={block} />
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="bg-background-alt py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Stay Updated
              </h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Get the latest IB study tips, university admissions insights, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-foreground text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-background/60"
                />
                <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BlogPostPage;
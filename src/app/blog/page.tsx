import React from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPosts, getCategories, formatDate } from "@/lib/notion";

const BlogPage = async () => {
  // Fetch posts and categories from Notion
  let blogPosts = [];
  let categories = ["All"];

  try {
    // Fetch Notion data
    const [notionPosts, notionCategories] = await Promise.all([
      getPosts(),
      getCategories()
    ]);

    // Transform Notion posts to our format
    blogPosts = notionPosts.map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || "Read more about this topic...",
      date: formatDate(post.date),
      readTime: `${post.readTime} min read`,
      category: post.category,
      image: post.cover || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
      slug: post.slug,
      tags: post.tags
    }));

    // Use Notion categories
    categories = notionCategories;

  } catch (error) {
    console.error('Error fetching Notion data:', error);

    // Fallback to static data if Notion is not available
    blogPosts = [
      {
        id: 1,
        title: "How to Score 45 Points in the IB Diploma Programme",
        excerpt: "Discover the strategies and study techniques that helped our students achieve perfect scores in their IB exams.",
        date: "March 15, 2024",
        readTime: "8 min read",
        category: "IB Strategy",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
        slug: "how-to-score-45-points-ib"
      },
      {
        id: 2,
        title: "Oxford vs Cambridge: Which is Right for You?",
        excerpt: "A comprehensive guide to understanding the differences between these prestigious universities and making the right choice.",
        date: "March 10, 2024",
        readTime: "12 min read",
        category: "University Guide",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop&crop=center",
        slug: "oxford-vs-cambridge-guide"
      },
      {
        id: 3,
        title: "Writing the Perfect Personal Statement",
        excerpt: "Expert tips from our admissions team on crafting compelling personal statements that stand out to admissions officers.",
        date: "March 5, 2024",
        readTime: "10 min read",
        category: "Admissions",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop&crop=center",
        slug: "perfect-personal-statement"
      }
    ];
    categories = ["All", "IB Strategy", "Admissions", "University Guide"];
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-display font-bold text-foreground mb-6">
                WellPrepped+ Blog
              </h1>
              <p className="text-xl text-[#d0cfc8] mb-8 max-w-3xl mx-auto">
                Expert insights, study strategies, and admissions guidance from our team of 43-45 point IB graduates and university admissions specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="bg-background-alt py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-foreground/10 text-background border border-background/20 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={post.id || index} href={`/blog/${post.slug}`} className="block">
                  <article className="bg-background-alt rounded-lg overflow-hidden border border-background/10 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-background mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-background/90 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-background/70">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 text-accent hover:text-accent/80 font-semibold text-sm transition-colors duration-200 flex items-center gap-1">
                      Read More <span>→</span>
                    </div>
                  </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-background mb-6">
                Stay Updated
              </h2>
              <p className="text-background/90 mb-8 leading-relaxed">
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

export default BlogPage;

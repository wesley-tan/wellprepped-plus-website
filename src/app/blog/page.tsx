import React from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  // Static blog posts data
  const blogPosts = [
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
    },
    {
      id: 4,
      title: "IB Physics: Mastering Complex Problem Solving",
      excerpt: "Step-by-step approaches to tackle the most challenging IB Physics problems and boost your confidence in exams.",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "IB Strategy",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop&crop=center",
      slug: "ib-physics-problem-solving"
    },
    {
      id: 5,
      title: "Economics IA: A Complete Guide to Success",
      excerpt: "Everything you need to know about writing an outstanding Economics Internal Assessment that will impress your examiner.",
      date: "February 25, 2024",
      readTime: "10 min read",
      category: "IB Strategy",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
      slug: "economics-ia-guide"
    },
    {
      id: 6,
      title: "Ivy League Admissions: What You Need to Know",
      excerpt: "Insider tips on what top US universities really look for in international students and how to stand out.",
      date: "February 20, 2024",
      readTime: "15 min read",
      category: "Admissions",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop&crop=center",
      slug: "ivy-league-admissions-guide"
    }
  ];

  const categories = ["All", "IB Strategy", "Admissions", "University Guide"];

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
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        index === 0 
                          ? "bg-accent text-white border-accent shadow-lg" 
                          : "bg-foreground/10 text-background border-background/20 hover:bg-accent hover:text-white hover:border-accent"
                      }`}
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
              {blogPosts.map((post: any, index: number) => (
                <Link key={post.id || index} href={`/blog/${post.slug}`} className="block">
                  <article className="bg-background-alt rounded-xl overflow-hidden border border-background/10 hover:shadow-2xl hover:border-accent/30 hover:-translate-y-2 transition-all duration-500 group cursor-pointer hover:bg-background-alt/90 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-accent/20 shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-background mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-background font-medium mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-background/80 font-medium mb-4">
                      <span>{post.date}</span>
                      <span className="bg-background/20 px-2 py-1 rounded-full">{post.readTime}</span>
                    </div>
                    <div className="mt-4 text-accent hover:text-accent/80 font-bold text-sm transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                      Read More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-background-alt to-background py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-5xl font-display font-bold text-background mb-6">
                Stay Updated
              </h2>
              <p className="text-background font-medium mb-8 leading-relaxed text-lg">
                Get the latest IB study tips, university admissions insights, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl bg-white text-background border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent placeholder:text-background/60 font-medium shadow-lg transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
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

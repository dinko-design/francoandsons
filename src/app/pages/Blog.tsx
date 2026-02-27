import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Clock, User, Search, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "../data/blogData";
import { LEAD_MAGNETS } from "../data/promotionsData";
import { AngularDivider, BlueprintLines } from "../components/shared/AngularDivider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCategory = activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const featuredPosts = BLOG_POSTS.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] bg-accent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bloggrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bloggrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Blog & Resources
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Remodeling Tips, Guides &{" "}
              <span className="text-[#60A5FA]">Real Project Stories</span>
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Honest advice from a father-and-son team with 30+ years of experience. No fluff, no sales pitches — just useful information to help you make smart remodeling decisions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Category Filter + Search */}
      <section className="py-8 -mt-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-border shadow-sm p-4 flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-input-background rounded-lg border border-border text-[0.9rem] focus:outline-none focus:border-primary"
              />
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 rounded-lg text-[0.8rem] transition-colors ${
                  activeCategory === "All"
                    ? "bg-primary text-white"
                    : "bg-input-background text-muted-foreground hover:bg-primary/10"
                }`}
                style={{ fontWeight: 600 }}
              >
                All
              </button>
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-[0.8rem] transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-input-background text-muted-foreground hover:bg-primary/10"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && !searchQuery && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[1.15rem] mb-6 flex items-center gap-2" style={{ fontWeight: 700 }}>
              <BookOpen className="w-5 h-5 text-primary" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider" style={{ fontWeight: 700 }}>
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[0.75rem] text-muted-foreground mb-2">
                      <span className="text-primary" style={{ fontWeight: 600 }}>{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h3 className="text-[1rem] mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.85rem] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="slant-right" />

      {/* All Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts grid */}
            <div className="lg:col-span-2">
              <h2 className="text-[1.15rem] mb-6" style={{ fontWeight: 700 }}>
                {activeCategory === "All" ? "All Articles" : activeCategory}
                <span className="text-muted-foreground text-[0.85rem] ml-2" style={{ fontWeight: 400 }}>
                  ({filteredPosts.length})
                </span>
              </h2>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-input-background rounded-xl">
                  <Search className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground text-[0.95rem]">No articles found. Try a different search or category.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group flex flex-col sm:flex-row gap-5 bg-background rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/20 transition-all p-4"
                    >
                      <div className="w-full sm:w-48 aspect-[16/10] sm:aspect-square rounded-lg overflow-hidden shrink-0">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 text-[0.75rem] text-muted-foreground mb-2">
                          <span className="text-primary" style={{ fontWeight: 600 }}>{post.category}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                          <span>·</span>
                          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <h3 className="text-[1rem] mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-[0.85rem] leading-relaxed line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-1 text-[0.8rem] text-muted-foreground mt-3">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Lead Magnets */}
              <div>
                <h3 className="text-[1rem] mb-4 flex items-center gap-2" style={{ fontWeight: 700 }}>
                  <Tag className="w-4 h-4 text-primary" />
                  Free Resources
                </h3>
                <div className="space-y-4">
                  {LEAD_MAGNETS.slice(0, 3).map((lm) => (
                    <Link
                      key={lm.id}
                      to={`/free/${lm.slug}`}
                      className="block bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-4 hover:border-primary/40 hover:shadow-sm transition-all"
                    >
                      <div className="text-[0.7rem] text-primary uppercase tracking-wider mb-1" style={{ fontWeight: 700 }}>
                        Free {lm.format.split("—")[0].trim()}
                      </div>
                      <div className="text-[0.9rem] mb-1" style={{ fontWeight: 700 }}>{lm.title}</div>
                      <div className="text-[0.8rem] text-muted-foreground mb-3">{lm.subtitle}</div>
                      <span className="text-primary text-[0.8rem] flex items-center gap-1" style={{ fontWeight: 600 }}>
                        Download Free <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category list */}
              <div>
                <h3 className="text-[1rem] mb-4" style={{ fontWeight: 700 }}>Categories</h3>
                <div className="space-y-1">
                  {BLOG_CATEGORIES.map((cat) => {
                    const count = BLOG_POSTS.filter((p) => p.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-[0.875rem] text-left transition-colors ${
                          activeCategory === cat ? "bg-primary text-white" : "hover:bg-input-background"
                        }`}
                        style={{ fontWeight: 500 }}
                      >
                        {cat}
                        <span className={`text-[0.75rem] ${activeCategory === cat ? "text-white/70" : "text-muted-foreground"}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#1E3A5F" variant="slant-left" />
    </div>
  );
}
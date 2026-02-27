import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, Clock, User, Tag, Share2 } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";
import { LEAD_MAGNETS } from "../data/promotionsData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AngularDivider } from "../components/shared/AngularDivider";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { VideoPlaceholder } from "../components/shared/VideoPlaceholder";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const relevantMagnet = LEAD_MAGNETS.find((lm) =>
    lm.applicableServices.includes("all") || post.tags.some((t) => lm.slug.includes(t))
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[350px] flex items-end pb-[80px]">
        <div className="absolute inset-0">
          <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/60 to-[#0F172A]/30" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 text-[0.85rem] hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-[0.8rem] text-white/70 mb-3">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider" style={{ fontWeight: 700 }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} read</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 className="text-[1.75rem] md:text-[2.25rem] text-white" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-2 mt-4 text-white/60 text-[0.85rem]">
            <User className="w-4 h-4" />
            <span>By {post.author}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
            <polygon points="0,20 0,60 1440,60 1440,0" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <article className="lg:col-span-2">
              <div className="prose-custom space-y-6">
                {post.content.map((paragraph, i) => (
                  <div key={i}>
                    {paragraph.startsWith("**") ? (
                      <p className="text-[0.95rem] leading-relaxed">
                        <span
                          style={{ fontWeight: 700 }}
                          dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/\*\*(.*?)\*\*/g, "$1"),
                          }}
                        />
                      </p>
                    ) : (
                      <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{paragraph}</p>
                    )}
                    {/* Insert video placeholder after 2nd paragraph */}
                    {i === 1 && (
                      <div className="my-8">
                        <VideoPlaceholder
                          title={`Watch: ${post.title.slice(0, 40)}...`}
                          subtitle="Video coming soon"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-input-background text-muted-foreground px-3 py-1 rounded-full text-[0.75rem]" style={{ fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 bg-secondary rounded-xl p-6 lg:p-8 border border-border">
                <LeadCaptureForm
                  title="Ready to Start Your Project?"
                  subtitle="Get a free, no-obligation estimate from Cristian. We'll discuss your vision and provide a detailed plan."
                  compact
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Lead Magnet */}
              {relevantMagnet && (
                <Link
                  to={`/free/${relevantMagnet.slug}`}
                  className="block bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-5 hover:border-primary/40 transition-all"
                >
                  <div className="text-[0.7rem] text-primary uppercase tracking-wider mb-2" style={{ fontWeight: 700 }}>
                    Free Download
                  </div>
                  <div className="text-[0.95rem] mb-1" style={{ fontWeight: 700 }}>{relevantMagnet.title}</div>
                  <div className="text-[0.8rem] text-muted-foreground mb-3">{relevantMagnet.subtitle}</div>
                  <span className="text-primary text-[0.85rem] flex items-center gap-1" style={{ fontWeight: 600 }}>
                    Get Free Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-[1rem] mb-4" style={{ fontWeight: 700 }}>Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        to={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2">
                          <ImageWithFallback
                            src={rp.image}
                            alt={rp.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="text-[0.9rem] group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>
                          {rp.title}
                        </div>
                        <div className="text-[0.75rem] text-muted-foreground mt-1">{rp.readTime} read</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#1E3A5F" variant="slant-left" />
    </div>
  );
}
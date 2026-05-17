import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | WK Roofbuild",
  description: "Tips, guides, and news about roofing, painting, and tiling from the WK Roofbuild team in London.",
};

type Post = { id: number; title: string; slug: string; excerpt: string | null; coverImage: string | null; createdAt: string };

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/blog`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Banner */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg,#131F31,#1B2A41)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="label-orange">Tips &amp; Insights</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Blog</h1>
          <p className="text-gray-400 text-lg">Expert advice on roofing, painting, and tiling from the WK Roofbuild team.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span style={{ color: "#FF5A1A" }}>Blog</span>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F5F7FA" }}>
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "#1B2A41" }}>No posts yet</h2>
              <p className="text-gray-500 text-sm mb-6">Check back soon — our team is working on some great content.</p>
              <Link href="/admin/blog/new"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm font-bold"
                style={{ backgroundColor: "#FF5A1A" }}>
                + Add First Post (Admin)
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.id} className="border border-gray-200 bg-white service-card">
                  {/* Cover image */}
                  {post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.coverImage} alt={post.title}
                      className="w-full object-cover" style={{ height: "200px" }} loading="lazy" />
                  ) : (
                    <div className="flex items-center justify-center" style={{ height: "200px", background: "linear-gradient(135deg,#1B2A41,#2a4060)" }}>
                      <svg className="w-12 h-12 opacity-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}

                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2">
                      {new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <h2 className="text-base font-bold mb-2 leading-snug" style={{ color: "#1B2A41" }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    )}
                    <div className="text-center">
                      <Link href={`/blog/${post.slug}`} className="read-more-btn inline-block px-8">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Admin shortcut */}
      <section className="py-10 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-3">Are you the site admin?</p>
          <Link href="/admin/blog"
            className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
            style={{ color: "#FF5A1A" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Manage Blog Posts →
          </Link>
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStoredPosts } from "../utils/storage";

function BlogDetails() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD POST
  // =========================
  useEffect(() => {
    const storedPosts = getStoredPosts();

    const foundPost = storedPosts.find(
      (item) => item.slug === slug && item.status === "published"
    );

    if (foundPost) {
      setPost(foundPost);

      const related = storedPosts
        .filter(
          (item) =>
            item.status === "published" &&
            item.id !== foundPost.id &&
            item.category === foundPost.category
        )
        .slice(0, 3);

      setRelatedPosts(related);

      const storedBookmarks =
        JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];

      setBookmarked(storedBookmarks.includes(foundPost.id));
    }

    setLoading(false);
  }, [slug]);

  // =========================
  // BOOKMARK
  // =========================
  const handleBookmark = () => {
    if (!post) return;

    const storedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];

    let updatedBookmarks;

    if (storedBookmarks.includes(post.id)) {
      updatedBookmarks = storedBookmarks.filter((id) => id !== post.id);

      setBookmarked(false);
    } else {
      updatedBookmarks = [...storedBookmarks, post.id];

      setBookmarked(true);
    }

    localStorage.setItem("bookmarkedPosts", JSON.stringify(updatedBookmarks));
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-slate-400">Loading article...</p>
        </div>
      </main>
    );
  }

  // =========================
  // NOT FOUND
  // =========================
  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl">📄</div>

          <h1 className="mt-6 text-3xl font-bold">Article not found</h1>

          <p className="mt-3 text-slate-400">
            The article you're looking for doesn't exist or is no longer
            published.
          </p>

          <Link
            to="/blog"
            className="mt-8 inline-flex rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* =========================
          ARTICLE HEADER
      ========================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-6">
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
              {post.category}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>
              By{" "}
              <span className="font-medium text-slate-300">{post.author}</span>
            </span>

            <span>{post.date}</span>

            <span>{post.readingTime}</span>
          </div>

          {/* Bookmark */}
          <div className="mt-8">
            <button
              type="button"
              onClick={handleBookmark}
              className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                bookmarked
                  ? "border-amber-400/30 bg-amber-400/10 text-amber-400"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-amber-400/30 hover:text-amber-400"
              }`}
            >
              <span>{bookmarked ? "🔖" : "♡"}</span>

              {bookmarked ? "Bookmarked" : "Bookmark"}
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          COVER IMAGE
      ========================= */}
      {post.image && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <img
            src={post.image}
            alt={post.title}
            className="h-auto max-h-[600px] w-full rounded-3xl object-cover"
          />
        </section>
      )}

      {/* =========================
          ARTICLE CONTENT
      ========================= */}
      <article className="mx-auto max-w-3xl px-6 pb-20">
        <div className="space-y-6 text-[17px] leading-8 text-slate-300">
          {Array.isArray(post.content) ? (
            post.content.map((block, index) => {
              // Heading
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="pt-6 text-2xl font-bold text-white sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              // Subheading
              if (block.type === "subheading") {
                return (
                  <h3
                    key={index}
                    className="pt-4 text-xl font-semibold text-white"
                  >
                    {block.text}
                  </h3>
                );
              }

              // Code block
              if (block.type === "code") {
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
                  >
                    <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {block.language || "code"}
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-300">
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              }

              // List
              if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-6">
                    {block.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }

              // Paragraph
              return <p key={index}>{block.text}</p>;
            })
          ) : (
            <p>{post.content}</p>
          )}
        </div>

        {/* =========================
            TAGS
        ========================= */}
        {post.tags?.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* =========================
          RELATED ARTICLES
      ========================= */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
                Keep Reading
              </p>

              <h2 className="mt-2 text-3xl font-bold">Related Articles</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-400/20"
                >
                  {relatedPost.category && (
                    <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                      {relatedPost.category}
                    </span>
                  )}

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-white transition group-hover:text-amber-400">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    {relatedPost.description}
                  </p>

                  <div className="mt-5 text-xs text-slate-600">
                    {relatedPost.readingTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default BlogDetails;

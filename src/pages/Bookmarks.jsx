import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStoredPosts } from "../utils/storage";

function Bookmarks() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = () => {
    const storedPosts = getStoredPosts();

    const storedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];

    const savedPosts = storedPosts.filter(
      (post) => post.status === "published" && storedBookmarks.includes(post.id)
    );

    setBookmarkedPosts(savedPosts);
  };

  const removeBookmark = (postId) => {
    const storedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];

    const updatedBookmarks = storedBookmarks.filter((id) => id !== postId);

    localStorage.setItem("bookmarkedPosts", JSON.stringify(updatedBookmarks));

    loadBookmarks();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* =========================
          HEADER
      ========================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-400">
            Your Library
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Bookmarked Articles
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Save useful articles and come back to them whenever you want.
          </p>
        </div>
      </section>

      {/* =========================
          BOOKMARKED POSTS
      ========================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {bookmarkedPosts.length > 0 ? (
          <>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {bookmarkedPosts.length}{" "}
                {bookmarkedPosts.length === 1
                  ? "saved article"
                  : "saved articles"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bookmarkedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-amber-400/30"
                >
                  {/* Image */}
                  {post.image && (
                    <Link to={`/blog/${post.slug}`}>
                      <div className="overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {post.category}
                    </span>

                    {/* Title */}
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="mt-3 text-xl font-bold leading-snug transition group-hover:text-amber-400">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Description */}
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                      <div className="text-xs text-slate-500">
                        <p>{post.author}</p>
                        <p className="mt-1">{post.readingTime}</p>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeBookmark(post.id)}
                        className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-red-400/30 hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Read */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-5 inline-flex text-sm font-semibold text-amber-400 transition hover:text-amber-300"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          /* =========================
             EMPTY STATE
          ========================= */
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center">
            <div className="text-5xl">🔖</div>

            <h2 className="mt-6 text-2xl font-bold">No bookmarks yet</h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Articles you bookmark will appear here. Start exploring the blog
              and save the ones you want to read later.
            </p>

            <Link
              to="/blog"
              className="mt-8 inline-flex rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Explore Articles →
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Bookmarks;

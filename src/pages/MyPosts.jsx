import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getStoredPosts, savePosts } from "../utils/storage";

function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const storedPosts = getStoredPosts();
    setMyPosts(storedPosts);
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) {
      return;
    }

    const updatedPosts = myPosts.filter((post) => post.id !== id);

    savePosts(updatedPosts);
    setMyPosts(updatedPosts);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
              Dashboard
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              My Posts
            </h1>

            <p className="mt-4 text-slate-400">
              Manage your published articles and drafts.
            </p>
          </div>

          <Link
            to="/create"
            className="inline-flex w-fit rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            + Create Post
          </Link>
        </div>

        {/* Posts */}
        {myPosts.length > 0 ? (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            {/* Desktop Header */}
            <div className="hidden border-b border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid md:grid-cols-[1fr_140px_180px]">
              <span>Post</span>
              <span>Status</span>
              <span className="text-right">Actions</span>
            </div>

            {myPosts.map((post) => (
              <div
                key={post.id}
                className="grid gap-5 border-b border-white/10 px-6 py-6 last:border-b-0 md:grid-cols-[1fr_140px_180px] md:items-center"
              >
                {/* Post */}
                <div>
                  <h2 className="font-semibold text-white">{post.title}</h2>

                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                    {post.description || "No description added."}
                  </p>

                  <p className="mt-2 text-xs text-slate-600">
                    {post.category || "Uncategorized"}
                  </p>
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      post.status === "published"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-amber-400/10 text-amber-400"
                    }`}
                  >
                    {post.status === "published" ? "Published" : "Draft"}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {post.status === "published" && (
                    <Link
                      to={`/blog/${post.slug}`}
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-amber-400/30 hover:text-amber-400"
                    >
                      View
                    </Link>
                  )}

                  <Link
                    to={`/create?edit=${post.id}`}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-amber-400/30 hover:text-amber-400"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(post.id)}
                    className="rounded-lg border border-red-400/10 px-3 py-2 text-xs font-medium text-red-400 transition hover:bg-red-400/10"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center">
            <div className="text-4xl">📝</div>

            <h2 className="mt-5 text-2xl font-bold">No posts yet</h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Create your first article and it will appear here.
            </p>

            <Link
              to="/create"
              className="mt-6 inline-flex rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Create Your First Post
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default MyPosts;

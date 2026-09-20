import { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getStoredPosts } from "../utils/storage";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = getStoredPosts();

    const publishedPosts = storedPosts.filter(
      (post) => post.status === "published"
    );

    setPosts(publishedPosts);
  }, []);

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category).filter(Boolean)),
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        categoryFromUrl === "All" || post.category === categoryFromUrl;

      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(searchText) ||
        post.description.toLowerCase().includes(searchText) ||
        post.category.toLowerCase().includes(searchText) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchText));

      return matchesCategory && matchesSearch;
    });
  }, [posts, categoryFromUrl, searchTerm]);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ================= HEADER ================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-400">
            The Blog
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Articles
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Practical ideas, tutorials and insights about modern web
            development.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="max-w-2xl">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = categoryFromUrl === category;

            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-amber-400 bg-amber-400 text-slate-950"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-amber-400/30 hover:text-amber-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </p>

          {categoryFromUrl !== "All" && (
            <p className="text-sm text-amber-400">
              Category: {categoryFromUrl}
            </p>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center">
            <div className="text-4xl">🔎</div>

            <h2 className="mt-5 text-2xl font-bold">No articles found</h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Try a different search term or select another category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSearchParams({});
              }}
              className="mt-6 rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Blog;

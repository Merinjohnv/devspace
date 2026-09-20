import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStoredPosts } from "../utils/storage";

function Categories() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = getStoredPosts();

    const publishedPosts = storedPosts.filter(
      (post) => post.status === "published"
    );

    setPosts(publishedPosts);
  }, []);

  const categories = [
    ...new Set(posts.map((post) => post.category)),
  ];

  const getCategoryCount = (category) => {
    return posts.filter(
      (post) => post.category === category
    ).length;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =========================
          HEADER
      ========================= */}
      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-400">
            Explore Topics
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Categories
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Browse articles by topic and discover ideas,
            tutorials and insights across modern web
            development.
          </p>

        </div>

      </section>


      {/* =========================
          CATEGORY GRID
      ========================= */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        {categories.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => {

              const count = getCategoryCount(category);

              return (
                <Link
                  key={category}
                  to={`/blog?category=${encodeURIComponent(category)}`}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
                >

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-xl text-amber-400">
                    #
                  </div>


                  {/* Category */}
                  <h2 className="mt-6 text-2xl font-bold transition group-hover:text-amber-400">
                    {category}
                  </h2>


                  {/* Count */}
                  <p className="mt-2 text-sm text-slate-500">
                    {count}{" "}
                    {count === 1 ? "article" : "articles"}
                  </p>


                  {/* Link */}
                  <p className="mt-6 text-sm font-semibold text-amber-400">
                    Explore articles →
                  </p>

                </Link>
              );
            })}

          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center">

            <div className="text-4xl">
              📝
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              No published articles yet
            </h2>

            <p className="mt-3 text-slate-500">
              Published articles will appear here by category.
            </p>

          </div>
        )}

      </section>

    </main>
  );
}

export default Categories;
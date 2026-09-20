import { Link } from "react-router-dom";
import posts from "../data/posts";
import BlogCard from "../components/BlogCard";
import CategoryBadge from "../components/CategoryBadge";

function Home() {
  const featuredPost = posts.find((post) => post.featured);
  const latestPosts = posts.filter((post) => !post.featured).slice(0, 3);
  const categoryCounts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
              ✦ Developer thoughts & insights
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ideas, tutorials &
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                insights for developers.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Explore practical articles about React, JavaScript, frontend
              development, CSS and the journey of becoming a better developer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Explore Articles →
              </Link>

              <Link
                to="/create"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Start Writing
              </Link>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative hidden min-h-[420px] md:block">
            {/* Main glow */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-amber-400/10 blur-3xl" />

            {/* Main code/editor card */}
            <div className="absolute right-0 top-8 w-full max-w-md rotate-2 rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
              {/* Window header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="text-xs text-slate-500">article.jsx</span>
              </div>

              {/* Code */}
              <div className="rounded-2xl border border-white/5 bg-slate-950 p-5 font-mono text-sm leading-7">
                <p className="text-slate-600">01</p>

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-amber-300">developer</span> = {"{"}
                </p>

                <p className="pl-5">
                  <span className="text-sky-300">learn</span>:{" "}
                  <span className="text-green-300">"every day"</span>,
                </p>

                <p className="pl-5">
                  <span className="text-sky-300">build</span>:{" "}
                  <span className="text-green-300">"something"</span>,
                </p>

                <p className="pl-5">
                  <span className="text-sky-300">share</span>:{" "}
                  <span className="text-green-300">"knowledge"</span>
                </p>

                <p>{"}"};</p>
              </div>

              {/* Bottom info */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Build. Learn. Share.
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Thoughts from a frontend developer
                  </p>
                </div>

                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400">
                  #DevLife
                </span>
              </div>
            </div>

            {/* Floating article card */}
            <div className="absolute bottom-10 -left-4 w-64 -rotate-3 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-lg">
                  ⚡
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-400">
                    Latest
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    React & Frontend
                  </p>
                </div>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-3/4 rounded-full bg-amber-400" />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Keep learning • Keep building
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-3 bottom-24 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="text-lg">✦</span>

                <div>
                  <p className="text-xs text-slate-500">Articles</p>

                  <p className="text-sm font-bold text-white">8+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-6 pb-20">
          {/* Section Heading */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
                Featured
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Editor's Pick
              </h2>
            </div>

            <Link
              to="/blog"
              className="hidden text-sm font-medium text-slate-400 transition hover:text-amber-400 sm:block"
            >
              View all articles →
            </Link>
          </div>

          {/* Featured Card */}
          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-xl">
            <div className="grid md:grid-cols-2">
              {/* ================= IMAGE ================= */}
              <div className="relative min-h-[300px] overflow-hidden md:min-h-[440px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Featured Badge */}
                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-amber-400/30 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-amber-400 backdrop-blur-md">
                    ✦ Featured Article
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-slate-950">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>{featuredPost.date}</span>

                  <span>•</span>

                  <span>{featuredPost.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {featuredPost.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  {featuredPost.description}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">
                    M
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {featuredPost.author}
                    </p>

                    <p className="text-xs text-slate-500">Developer & Writer</p>
                  </div>
                </div>

                {/* Read Article */}
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex w-fit items-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ================= LATEST ARTICLES ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        {/* Section Heading */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
              Fresh from the blog
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Articles
            </h2>
          </div>

          <Link
            to="/blog"
            className="hidden text-sm font-medium text-slate-400 transition hover:text-amber-400 sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* ================= POPULAR CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
            Explore by topic
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Popular Categories
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <CategoryBadge key={category} category={category} count={count} />
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-white/[0.03] to-rose-400/10 p-8 sm:p-12">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-3xl">✉️</span>

            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
              Stay in the loop
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Keep learning. Keep building.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Get practical development insights, tutorials and project ideas
              delivered straight to your inbox.
            </p>

            <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-amber-400/50"
              />

              <button
                type="submit"
                className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-600">
              No spam. Just useful developer content.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

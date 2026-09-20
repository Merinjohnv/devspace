import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]">
      {/* Cover Image */}
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

          {/* Category */}
          <span className="absolute left-4 top-4 rounded-full border-amber-400/30 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{PerformanceObserverEntryList.readingTime}</span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mt-3 text-xl font-bold leading-snug text-white transition group-hover:text-amber-400">
            {post.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
          {post.description}
        </p>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-xs fonr-bold text-slate-950">
            M
          </div>
          <span className="text-xs font-medium text-slate-300">
            {post.author}
          </span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-semibold text-amber-400 transition hover:text-amber-300"
        >
          Read →
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;

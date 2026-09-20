import { Link } from "react-router-dom";

function CategoryBadge({ category, count }) {
  return (
    <Link
      to={`/blog?category=${encodeURIComponent(category)}`}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/[0.05]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-lg text-amber-400">
          #
        </span>

        <span className="font-medium text-slate-200 transition group-hover:text-amber-400">
          {category}
        </span>
      </div>

      <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-500">
        {count}
      </span>
    </Link>
  );
}

export default CategoryBadge;

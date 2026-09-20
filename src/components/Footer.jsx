import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Dev<span className="text-amber-400">Space</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-slate-500">
              A space for practical ideas, tutorials and insights about modern
              web development.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white">Explore</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-500 transition hover:text-amber-400"
              >
                Home
              </Link>

              <Link
                to="/blog"
                className="text-slate-500 transition hover:text-amber-400"
              >
                Blog
              </Link>

              <Link
                to="/categories"
                className="text-slate-500 transition hover:text-amber-400"
              >
                Categories
              </Link>
            </div>
          </div>

          {/* Create */}
          <div>
            <h3 className="font-semibold text-white">Create</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/create"
                className="text-slate-500 transition hover:text-amber-400"
              >
                Write a Post
              </Link>

              <Link
                to="/my-posts"
                className="text-slate-500 transition hover:text-amber-400"
              >
                My Posts
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-600">© 2026 DevSpace. Built with React.</p>

          <p className="text-sm text-slate-500">
            Designed & developed with 🧡 by{" "}
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-400 transition hover:text-amber-300"
            >
              Merin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

      {/* Decorative Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />


      {/* Content */}
      <div className="relative mx-auto max-w-2xl text-center">

        {/* 404 */}
        <div className="relative">

          <h1 className="text-[120px] font-black leading-none tracking-tighter text-white/5 sm:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-8xl">
              404
            </span>
          </div>

        </div>


        {/* Heading */}
        <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
          Looks like you got lost.
        </h2>


        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-400">
          The page you're looking for doesn't exist or may have
          been moved. Let's get you back to something useful.
        </p>


        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            ← Back Home
          </Link>

          <Link
            to="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400/30 hover:bg-white/10 hover:text-amber-400"
          >
            Explore Articles
          </Link>

        </div>


        {/* Small footer text */}
        <p className="mt-10 text-xs text-slate-600">
          DevSpace · Keep learning. Keep building.
        </p>

      </div>

    </main>
  );
}

export default NotFound;
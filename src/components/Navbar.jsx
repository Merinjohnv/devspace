import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Categories", path: "/categories" },
    { name: "Create Post", path: "/create" },
    { name: "My Posts", path: "/my-posts" },
    { name: "Bookmark", path: "/bookmarks" },
  ];

  const getLinkClass = ({ isActive }) =>
    `transition ${
      isActive ? "text-amber-400" : "text-slate-300 hover:text-amber-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group">
          <span className="text-2xl font-bold tracking-tight text-white">
            Dev<span className="text-amber-400">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/blog"}
              className={getLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-slate-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/blog"}
                onClick={() => setIsOpen(false)}
                className={getLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

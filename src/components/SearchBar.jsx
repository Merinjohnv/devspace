function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-500">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search articles..."
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400/40 focus:bg-white/[0.05]"
      />
    </div>
  );
}

export default SearchBar;

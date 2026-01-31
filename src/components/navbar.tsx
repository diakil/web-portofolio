export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 py-4 md:px-20 lg:px-40">
      <div className="flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-xl">palette</span>
        </div>
        <h2 className="text-primary dark:text-white text-xl font-bold">Diah Maulida Akil</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-background-light">
  <a href="/projects" className="hover:text-soft-pink transition-colors">Projects</a>
  <a href="/about" className="hover:text-soft-pink transition-colors">About</a>
  <a href="/about" className="hover:text-soft-pink transition-colors">Contact</a>
</nav>
      <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform">
        Let's Talk
      </button>
    </header>
  );
}
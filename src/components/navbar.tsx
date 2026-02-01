import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 py-4 md:px-20 lg:px-40">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">palette</span>
          </div>
          <h2 className="text-primary dark:text-white text-xl font-bold">Diah Maulida Akil</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-primary dark:text-gray-200">
          <a href="/projects" className="hover:text-soft-pink transition-colors">Projects</a>
          <a href="/about" className="hover:text-soft-pink transition-colors">About</a>
          <a href="/about" className="hover:text-soft-pink transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform">
            Let's Talk
          </button>

          {/* Hamburger Button */}
          <button 
            className="md:hidden text-primary dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-sm font-medium text-primary dark:text-gray-200 border-t border-primary/10 pt-4">
          <a href="/projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold w-full">
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
}
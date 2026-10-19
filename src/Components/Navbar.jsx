import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="#Home" className="text-xl sm:text-2xl font-bold text-blue-400">
          Roman.dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base text-gray-300">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="transition-colors duration-200 hover:text-blue-400">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 text-gray-200 hover:text-blue-400 hover:border-blue-400 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}>
          {open ? (
            <span className="text-2xl leading-none">&times;</span>
          ) : (
            <span className="text-2xl leading-none">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-[#0d0d0d] px-4 sm:px-6 py-3">
          <div className="max-w-7xl mx-auto flex flex-col">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="py-3 px-3 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors duration-200"
                onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

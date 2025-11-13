import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Beranda" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/artikel", label: "Artikel" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/modul", label: "Modul" },
  ];

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%]
        rounded-2xl px-6 py-3 flex items-center justify-between
        glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl rotate-0 z-50"
      >
        <div className="font-semibold text-lg">Himikom</div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navItems.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-white/80 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-20 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl p-6 z-40
        glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl
        flex flex-col gap-4 text-center text-lg transition-all duration-300
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
          {navItems.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-white/80 transition">
                {link.label}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}

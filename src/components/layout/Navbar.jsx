import { useMouseGlowRef } from "@/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();

  const navItems = [
    { to: "/", label: "Beranda" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/artikel", label: "Artikel" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/modul", label: "Modul" },
  ];

  return (
    <header
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="nav fixed z-101 top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] rounded-full"
    >
      <div
        className="
        w-full px-6 py-3 flex items-center justify-between"
      >
        <div className="nav-light rounded-full"></div>

        <div className="font-bold text-2xl">Himikom</div>

        <nav>
          <ul className="hidden md:flex gap-8 text-sm">
            {navItems.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="hover:text-white/80 transition cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <nav
        className={`fixed top-20 left-1/2 -translate-x-1/2 
        w-[90%] rounded-2xl p-6 z-102 transition-all duration-300 nav
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="
        flex flex-col gap-4 text-center text-lg 
        "
        >
          {navItems.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="hover:text-white/80 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

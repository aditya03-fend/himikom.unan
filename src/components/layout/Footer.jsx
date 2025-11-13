import { Link } from "react-router-dom";

const footerNavItems = [
  { to: "/arsip-dokumen", label: "Arsip Dokumen" },
  { to: "/panduan-organisasi", label: "Panduan Organisasi" },
  { to: "/kontak", label: "Kontak" },
  { to: "/kerja-sama", label: "Kerja Sama" },
];

export default function Footer() {
  return (
    <footer
      className="w-full mt-20 py-10 flex flex-col items-center justify-center gap-6
      glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl
      rounded-2xl mx-auto w-[90%] md:w-[80%] text-center"
    >
      <nav>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          {footerNavItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="hover:text-white/80 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-xs opacity-70">© {new Date().getFullYear()} Himikom. All rights reserved.</p>
    </footer>
  );
}
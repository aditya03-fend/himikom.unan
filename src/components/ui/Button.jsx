import React from "react";
import { Link } from "react-router-dom"; // Asumsi Anda menggunakan react-router-dom

export default function Button({
  to,
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const base =
    "px-8 py-3 rounded-full text-sm font-semibold transition active:scale-[0.97]";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:scale-[1.04] hover:-translate-y-0.5 duration-200",
    glass:
      "glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl text-white border border-white/30 hover:bg-white/10 hover:scale-[1.04] hover:-translate-y-0.5 duration-200",
  };

  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

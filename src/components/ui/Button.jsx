import { useMouseGlowRef } from "@/hooks";
import { Link } from "react-router-dom";

export default function Button({
  to,
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();

  const base =
    "btn px-8 py-3 rounded-full text-sm font-semibold transition active:scale-[0.97]";

  const variants = {
    primary:
      "bg-blue-600 md:bg-blue-600/50 text-white hover:bg-blue-700 shadow-md hover:scale-[1.04] duration-200",
    glass:
      "nav text-white border border-white/30 hover:bg-white/10 hover:scale-[1.04] duration-200",
  };

  return (
    <Link
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      to={to}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="btn-light"></div>
      {children}
    </Link>
  );
}

import { useRef } from "react";

export default function useMouseGlowRef() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    card.style.setProperty("--mouse-x", `-9999px`);
    card.style.setProperty("--mouse-y", `-9999px`);
  };

  return { cardRef, handleMouseMove, handleLeave };
}

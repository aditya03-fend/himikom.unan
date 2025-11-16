import { useMouseGlowRef } from "@/hooks";

const IconCard = ({ title, desc, icon }) => {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="glass p-6 text-center animate-fade-in-up delay-200"
    >
        <div className="glass-light"></div>
      {icon}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default IconCard;

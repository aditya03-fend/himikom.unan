import { useMouseGlowRef } from "@/hooks";

const ContactCard = ({ position, name, children }) => {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="glass p-8 animate-fade-in-up delay-200 flex flex-col gap-4"
    >
      <div className="glass-light"></div>
      <h2 className="text-2xl font-bold">{position}</h2>
      <p className="text-lg">{name}</p>
      {children}
    </div>
  );
};

export default ContactCard;

import { useMouseGlowRef } from "@/hooks";
import React from "react";

const ProfileCard = ({ title, desc, children }) => {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="glass p-8 animate-fade-in-up delay-200"
    >
      <div className="glass-light"></div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{desc}</p>
      {children}
    </div>
  );
};

export default ProfileCard;

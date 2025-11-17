import { Btn } from "@/components";
import useMouseGlowRef from "@/hooks/useMouseGlowRef";

const ProgramCard = ({ img, title, author, link }) => {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="
        glass
        relative overflow-hidden
        p-4 flex flex-col h-full
        transition-all duration-300 
        hover:shadow-2xl hover:-translate-y-1
        rounded-3xl
      "
    >
      <span className="glass-light"></span>

      <div className="w-full aspect-4/3 overflow-hidden rounded-sub mb-4 shadow-inner relative">
        <img
          src={img || "https://via.placeholder.com/400x300?text=HIMIKOM"}
          alt={title || "Program Image"}
          className="w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{title || "Judul Program"}</h3>

      <p className="mb-4 grow">
        {author || "Deskripsi singkat program..."}
      </p>

      <div className="mt-2 w-full flex justify-end">
        <Btn to={link}>Download</Btn>
      </div>
    </div>
  );
};

export default ProgramCard;

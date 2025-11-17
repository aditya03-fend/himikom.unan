import { useMouseGlowRef } from "@/hooks";
import { Btn } from "..";

const PortfolioCard = ({ link, imageUrl, title, author }) => {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="
      glass
      p-6
      flex flex-col 
      h-full 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
      justify-center items-center
      gap-4
    "
    >
      <div className="glass-light"></div>

      <div className="w-full aspect-square overflow-hidden rounded-sub mb-4 shadow-inner rounded-2xl">
        <img
          src={imageUrl || "https://via.placeholder.com/400x225?text=Karya"}
          alt={title || "Gambar Portofolio"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-start w-full">
        <h3 className="text-xl font-bold mb-1">
          {title || "Judul Portofolio"}
        </h3>

        <p className="text-sm text-gray-400 mb-3">
          {author || "Mahasiswa HIMIKOM"}
        </p>
      </div>

      <div className="w-full">
        <Btn
          target="_blank"
          to={link}
          className="inline-block px-6 py-2 rounded-full 
            text-sm font-semibold 
            transition-all duration-300 hover:opacity-80 w-full text-center"
        >
          Visit
        </Btn>
      </div>
    </div>
  );
};

export default PortfolioCard;

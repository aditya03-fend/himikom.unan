import { useMouseGlowRef } from "@/hooks";
import { Btn } from "..";

const formatDate = (dateString) => {
  if (!dateString) return "Tanggal tidak diketahui";
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ArticleCard = ({ slug, imageUrl, title, excerpt, author, date }) => {
  const { cardRef, handleMouseMove, handleLeave } = useMouseGlowRef();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="
      glass 
      p-4
      flex flex-col md:flex-row
      h-full
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
      gap-6
    "
    >
      <div className="glass-light"></div>

      <div className="w-full md:w-[40%] aspect-video rounded-2xl overflow-hidden rounded-sub mb-4 shadow-inner">
        <img
          src={imageUrl || "https://via.placeholder.com/400x225?text=HIMIKOM"}
          alt={title || "Gambar Artikel"}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl md:text-sm font-bold mb-2">
          {title || "Judul Artikel"}
        </h3>

        <div className="text-sm mb-3">
          <span>Oleh {author || "Tim HIMIKOM"}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(date)}</span>
        </div>

        <p className="text-gray-200 grow">
          {excerpt || "Cuplikan singkat artikel akan muncul di sini..."}
        </p>

        <div className="w-full flex justify-end">
          <Btn
            to={`/artikel/${slug}`}
            className="
            inline-block px-6 py-2 rounded-full 
            text-sm font-semibold 
            transition-all duration-300 hover:opacity-80
          "
          >
            Baca Selengkapnya
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

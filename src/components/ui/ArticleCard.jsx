import React from "react";
import { Btn } from "..";

// Placeholder untuk 'formatDate' (sampai Anda membuatnya di utils)
const formatDate = (dateString) => {
  if (!dateString) return "Tanggal tidak diketahui";
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ArticleCard = ({ slug, imageUrl, title, excerpt, author, date }) => {
  return (
    <div
      className="
      liquid-glass 
      p-4 
      flex flex-row 
      h-full 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
      gap-6
    "
    >
      <div className="w-[40%] aspect-[16/9] rounded-2xl overflow-hidden rounded-sub mb-4 shadow-inner">
        <img
          src={imageUrl || "https://via.placeholder.com/400x225?text=HIMIKOM"}
          alt={title || "Gambar Artikel"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
          {title || "Judul Artikel"}
        </h3>

        <div className="text-sm text-gray-400 mb-3">
          <span>Oleh {author || "Tim HIMIKOM"}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(date)}</span>
        </div>

        <p className="text-gray-200 flex-grow">
          {excerpt || "Cuplikan singkat artikel akan muncul di sini..."}
        </p>

        <div className="w-full flex justify-end">
          <Btn
            to={`/artikel/${slug}`}
            className="
            inline-block px-6 py-2 rounded-full 
            text-sm font-semibold 
            bg-primary-light dark:bg-primary-dark 
            text-white transition-all duration-300 hover:opacity-80
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

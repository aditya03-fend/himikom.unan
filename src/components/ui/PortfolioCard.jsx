import React from "react";
import { Btn } from "..";

/**
 * Komponen Kartu Portofolio
 * @param {object} props
 * @param {string} props.slug - URL unik untuk portofolio
 * @param {string} props.imageUrl - URL ke gambar thumbnail
 * @param {string} props.title - Judul portofolio
 * @param {string} props.author - Nama pembuat (mahasiswa/kelompok)
 * @param {string[]} props.tags - Kumpulan tag teknologi/kategori
 */
// const PortfolioCard = ({ slug, imageUrl, title, author, tags = [] }) => {
const PortfolioCard = ({ link, imageUrl, title, author }) => {
  return (
    <div
      className="
      liquid-glass 
      p-6
      flex flex-col 
      h-full 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
      justify-center items-center
      gap-4
    "
    >
      {/* 1. GAMBAR (Rasio 16:9) */}
      <div className="w-full aspect-[1/1] overflow-hidden rounded-sub mb-4 shadow-inner rounded-2xl">
        <img
          src={imageUrl || "https://via.placeholder.com/400x225?text=Karya"}
          alt={title || "Gambar Portofolio"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. JUDUL */}
      <div className="flex flex-col items-start w-full">
        <h3 className="text-3xl font-bold text-text-light dark:text-text-dark mb-1">
          {title || "Judul Portofolio"}
        </h3>

        {/* 3. AUTHOR (Pembuat) */}
        <p className="text-lg text-gray-400 mb-3">
          {author || "Mahasiswa HIMIKOM"}
        </p>
      </div>

      {/* 4. TAGS (Teknologi/Kategori) */}
      {/* <div className="flex flex-wrap gap-2 mb-4 flex-grow">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="
              px-2.5 py-0.5 
              rounded-full 
              text-xs font-semibold 
              bg-primary-light/10 dark:bg-primary-dark/10
              text-primary-light dark:text-primary-dark
              liquid-glass
            "
          >
            {tag}
          </span>
        ))}
      </div> */}

      {/* 5. TOMBOL (Selalu di bawah) */}
      <div className="w-full">
        <Btn
          target="_blank"
          to={link} // Nanti akan mengarah ke PortfolioDetail.jsx
          className="inline-block px-6 py-4 rounded-full 
            text-lg font-semibold 
            bg-primary-light dark:bg-primary-dark 
            text-white transition-all duration-300 hover:opacity-80 w-full text-center"
        >
          Lihat Detail
        </Btn>
      </div>
    </div>
  );
};

export default PortfolioCard;

import React from 'react';
import { Link } from 'react-router-dom';

const ModulCard = ({ slug, imageUrl, title, description }) => {
  return (
    <div className="
      glass 
      p-4 
      flex flex-col 
      h-full 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
    ">
      
      <div className="w-full aspect-video overflow-hidden rounded-2xl mb-4 shadow-inner">
        <img
          src={imageUrl || "https://via.placeholder.com/400x225?text=Modul"}
          alt={title || "Gambar Modul"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
        {title || "Judul Modul"}
      </h3>

      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 grow">
        {description || "Deskripsi singkat modul akan muncul di sini..."}
      </p>

      <div className="mt-auto">
        <Link
          to={`/modul/${slug}`}
          className="
            inline-block 
            px-6 py-2 rounded-full 
            text-sm font-semibold 
            bg-primary-light dark:bg-primary-dark 
            text-white 
            transition-all duration-300
            hover:opacity-80
          "
        >
          Baca Modul
        </Link>
      </div>
      
    </div>
  );
};

export default ModulCard;
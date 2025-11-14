import { Btn } from '@/components';
import React from 'react';

const ProgramCard = ({ imageUrl, title, description }) => {
  return (
    <div className="
      p-4 
      flex flex-col 
      h-full 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
      inner-shadow-custom drop-shadow-custom backdrop-blur-xl
      rounded-3xl
    ">
      
      {/* 1. GAMBAR (Rasio 4:3) */}
      <div className="
        w-full 
        aspect-[4/3] 
        overflow-hidden 
        rounded-sub 
        mb-4 
        shadow-inner
      ">
        <img
          src={imageUrl || "https://via.placeholder.com/400x300?text=HIMIKOM"}
          alt={title || "Gambar Program"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. JUDUL */}
      <h3 className="
        text-xl font-bold 
        text-text-light dark:text-text-dark 
        mb-2
      ">
        {title || "Judul Program"}
      </h3>

      {/* 3. DESKRIPSI */}
      <p className="
        text-text-secondary-light dark:text-text-secondary-dark 
        mb-4 
        flex-grow  {/* Memastikan deskripsi mengisi ruang yg ada */}
      ">
        {description || "Deskripsi singkat program akan muncul di sini..."}
      </p>

      {/* 4. TOMBOL (Selalu di bawah) */}
      <div className="mt-2 w-full flex justify-end">
        <Btn>
            More
        </Btn>
      </div>
      
    </div>
  );
};

export default ProgramCard;
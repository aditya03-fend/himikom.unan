import { Btn } from '@/components';
import React from 'react';

const PerformanceCard = ({ imageUrl, title, subTitle }) => {
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
        overflow-hidden 
        rounded-sub 
        mb-4 
        shadow-inner
      ">
        <img
          src={imageUrl || "https://via.placeholder.com/400x300?text=HIMIKOM"}
          alt={title || "Gambar Program"}
          className="w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. JUDUL */}
      <h3 className="
        text-2xl font-bold 
        text-gray-50
        mb-2
      ">
        {title || "Judul Program"}
      </h3>
      
      <h3 className="
        text-lg font-bold 
        text-gray-400
        mb-2
      ">
        {subTitle || "Sub-Judul Program"}
      </h3>

      {/* 4. TOMBOL (Selalu di bawah) */}
      <div className="mt-2 w-full flex justify-end">
        <Btn className='flex items-center gap-2'>
            Visit<svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>
        </Btn>
      </div>
      
    </div>
  );
};

export default PerformanceCard;
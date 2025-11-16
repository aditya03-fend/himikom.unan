import React from "react";
import { Btn } from "@/components";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div  className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 glass rotate-12 opacity-50"><div className="glass-light"></div></div>
        <div className="absolute bottom-[20%] right-[10%] w-40 h-40 glass -rotate-6 opacity-60"><div className="glass-light"></div></div>
        <div className="absolute top-[30%] right-[25%] w-24 h-24 glass rotate-45 opacity-40"><div className="glass-light"></div></div>
        <div className="absolute bottom-[5%] left-[20%] w-28 h-28 glass -rotate-12 opacity-30"><div className="glass-light"></div></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="
          text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none
          mb-6
          animate-fade-in-up
        ">
          Jelajahi Dunia Informatika Bersama Kami
        </h1>

        <p className="
          text-lg sm:text-xl
          mb-10 max-w-2xl mx-auto
          animate-fade-in-up delay-200
        ">
          HIMIKOM adalah wadah bagi mahasiswa Komputer untuk berinovasi, berkolaborasi, dan mengembangkan potensi di era digital.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-400">
          <Btn
          to="/tentang-kami"
          >
            Tentang Kami
          </Btn>
          <Btn
          to="/artikel"
          variant="glass"
          >
            Baca Artikel Kami
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
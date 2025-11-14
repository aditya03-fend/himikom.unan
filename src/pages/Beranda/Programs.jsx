import React from "react";
import { TitleSection } from "@/components"; // Sesuaikan path
import { ProgramCard } from "@/pages/Admin"; // Sesuaikan path

// DATA DUMMY (Nantinya ini diambil dari API/Database)
const DUMMY_PROGRAMS = [
  {
    id: 1,
    title: "HIMIKOM DevClass",
    description:
      "Kelas intensif mingguan untuk belajar pengembangan web modern (React, Node.js) dari dasar hingga mahir bersama mentor.",
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzMyMzEyNDY5&ixlib=rb-4.0.3&q=80&w=400",
    link: "/portfolio/devclass",
  },
  {
    id: 2,
    title: "UI/UX Workshop",
    description:
      "Pelatihan desain antarmuka dan pengalaman pengguna, berfokus pada studi kasus nyata dan penggunaan alat desain seperti Figma.",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8N3x8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHx8fDE3MzIzMTI1MjA&ixlib=rb-4.0.3&q=80&w=400",
    link: "/portfolio/workshop-uiux",
  },
  {
    id: 3,
    title: "E-Sports Tournament",
    description:
      "Kompetisi e-sports tahunan untuk menjalin silaturahmi antar mahasiswa dan mengasah kemampuan kompetitif.",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8Mnx8ZSUyMHNwb3J0c3xlbnwwfHx8fDE3MzIzMTI1NDU&ixlib=rb-4.0.3&q=80&w=400",
    link: "/portfolio/esports",
  },
];

const Programs = () => {
  return (
    <section className="container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6">
      {/* 1. JUDUL SECTION */}
      <div className="w-full fles justify-start">
        <TitleSection
          title="Program Kerja Kami"
          subtitle="Inilah inisiatif dan program unggulan yang kami jalankan untuk mendukung kreativitas dan inovasi mahasiswa."
        />
      </div>

      {/* 2. GRID KARTU PROGRAM */}
      <div
        className="
        grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-8
        max-w-6xl mx-auto
      "
      >
        {DUMMY_PROGRAMS.map((program) => (
          <div key={program.id} className="animate-fade-in-up">
            <ProgramCard
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              link={program.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;

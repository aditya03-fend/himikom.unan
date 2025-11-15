import { Btn } from '@/components';
import React, { useEffect } from 'react';

// --- Komponen Ikon SVG Sederhana (ditaruh di sini agar rapi) ---

const CodeIcon = () => (
  <svg className="w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-4.243-4.243l.707.707" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 110-12 6 6 0 010 12z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-2.37M17 20H7m10 0v-2c0-1.657-1.343-3-3-3H7m10 0v-2a3 3 0 00-3-3H7m0 10v2a3 3 0 003 3h3m-3-3v-2c0-1.657 1.343-3 3-3h3m-3 3c0-1.657 1.343-3 3-3h3v-2a3 3 0 00-3-3H7M7 4v2a3 3 0 003 3h3v2a3 3 0 003 3h3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a3 3 0 100-6 3 3 0 000 6zM12 8a3 3 0 100-6 3 3 0 000 6zM12 20a3 3 0 100-6 3 3 0 000 6zM12 8a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);
// ----------------------------------------------------------------

const TentangKami = () => {
  // Efek untuk scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in-up">
      
      {/* === SECTION 1: HERO === */}
      <section className="
        py-24 sm:py-32 
        text-center 
        relative overflow-hidden
        container mx-auto px-4 sm:px-6 lg:px-8
      ">
        <h1 className="
          text-5xl sm:text-6xl md:text-7xl font-extrabold 
          text-gray-50
          mb-6
        ">
          Mengenal HIMIKOM <br />
          Lebih Dekat
        </h1>
        <p className="
          text-xl sm:text-2xl 
          text-gray-200
          max-w-3xl mx-auto
        ">
          Kami adalah denyut inovasi, kreativitas, dan kolaborasi 
          di jantung Himpunan Mahasiswa Informatika.
        </p>
      </section>

      {/* === SECTION 2: VISI & MISI === */}
      <section className="py-16 sm:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* KARTU VISI */}
          <div className="liquid-glass p-8 animate-fade-in-up delay-200">
            <h2 className="text-3xl font-bold text-gray-200 mb-4">
              Visi Kami
            </h2>
            <p className="text-lg text-gray-400">
              Menjadi himpunan mahasiswa informatika yang unggul, inovatif, dan 
              berdampak, serta mampu menciptakan ekosistem belajar yang 
              mendukung perkembangan teknologi dan karakter.
            </p>
          </div>

          {/* KARTU MISI */}
          <div className="liquid-glass p-8 animate-fade-in-up delay-400">
            <h2 className="text-3xl font-bold text-gray-200 mb-4">
              Misi Kami
            </h2>
            <ul className="
              list-disc list-outside pl-5 
              space-y-2 
              text-lg text-gray-400
            ">
              <li>Menyelenggarakan pelatihan dan workshop untuk meningkatkan keahlian teknis.</li>
              <li>Mendorong budaya riset, inovasi, dan partisipasi dalam kompetisi.</li>
              <li>Membangun jaringan yang kuat antara mahasiswa, alumni, dan industri.</li>
              <li>Melaksanakan pengabdian masyarakat berbasis teknologi informasi.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* === SECTION 3: PILAR UTAMA === */}
      <section className="
        py-16 sm:py-20 
        bg-glass-bg-light/50 dark:bg-glass-bg-dark/50 
        mt-16
      ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Judul Section Ini */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="
              text-4xl sm:text-5xl 
              font-bold 
              text-text-light dark:text-text-dark 
              mb-4
            ">
              Pilar Utama Kami
            </h2>
            <p className="
              text-lg 
              text-text-secondary-light dark:text-text-secondary-dark
            ">
              Tiga fokus utama yang menggerakkan organisasi kami.
            </p>
          </div>

          {/* Grid 3 Kolom */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            
            {/* Pilar 1: Edukasi */}
            <div className="liquid-glass p-6 text-center animate-fade-in-up delay-200">
              <CodeIcon />
              <h3 className="text-2xl font-bold text-gray-200 mb-2">
                Edukasi & Workshop
              </h3>
              <p className="text-gray-400">
                Menyediakan platform belajar melalui DevClass, workshop, dan 
                modul praktis untuk mengasah *hard skill*.
              </p>
            </div>

            {/* Pilar 2: Inovasi */}
            <div className="liquid-glass p-6 text-center animate-fade-in-up delay-400">
              <LightbulbIcon />
              <h3 className="text-2xl font-bold text-gray-200 mb-2">
                Inovasi & Kompetisi
              </h3>
              <p className="text-gray-400">
                Mendorong anggota untuk berani berinovasi, berkarya, 
                dan berkompetisi di berbagai ajang teknologi.
              </p>
            </div>
            
            {/* Pilar 3: Komunitas */}
            <div className="liquid-glass p-6 text-center animate-fade-in-up delay-600">
              <UsersIcon />
              <h3 className="text-2xl font-bold text-gray-200 mb-2">
                Komunitas & Jaringan
              </h3>
              <p className="text-gray-400">
                Membangun relasi yang kuat antar anggota, alumni, dan 
                profesional industri untuk membuka peluang karir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: CALL TO ACTION (CTA) === */}
      <section className="
        py-24 
        text-center 
        container mx-auto 
        px-4 sm:px-6 lg:px-8
      ">
        <h2 className="
          text-4xl sm:text-5xl 
          font-bold 
          text-gray-50
          mb-4
        ">
          Jadilah Bagian dari Kami
        </h2>
        <p className="
          text-lg 
          text-gray-200
          mb-10 max-w-2xl mx-auto
        ">
          Lihat karya-karya yang telah kami hasilkan atau baca wawasan 
          terbaru dari komunitas kami.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Btn
            to="/portfolio"
            variant='primary'
          >
            Lihat Portfolio
          </Btn>
          <Btn
            to="/artikel"
            variant='glass'
          >
            Baca Artikel Kami
          </Btn>
        </div>
      </section>

    </div>
  );
};

export default TentangKami;
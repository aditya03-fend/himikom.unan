import { useEffect } from 'react';
import { Btn, IconCard, TitleSection } from '@/components';

const DownloadIcon = () => (
  <svg className="w-6 h-6 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const RulesIcon = () => (
  <svg className="w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M5 11v2m14-2v2" />
  </svg>
);

const PanduanOrganisasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documents = [
    { name: "Anggaran Dasar (AD)", fileUrl: "/docs/AD_HIMIKOM.pdf" },
    { name: "Anggaran Rumah Tangga (ART)", fileUrl: "/docs/ART_HIMIKOM.pdf" },
    { name: "Garis Besar Haluan Organisasi (GBHO)", fileUrl: "/docs/GBHO_HIMIKOM.pdf" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up mt-12">
      
      <TitleSection
        title="Panduan Organisasi"
        subtitle="Sumber daya terpusat untuk semua dokumen, peraturan, dan pedoman resmi HIMIKOM."
      />

      <div className="max-w-5xl mx-auto">

        <section className="my-16">
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6 text-center">
            Dokumen Resmi
          </h2>
          <div className="liquid-glass p-6 md:p-8">
            <ul className="space-y-4">
              {documents.map((doc) => (
                <li 
                  key={doc.name} 
                  className="
                    flex flex-col sm:flex-row 
                    items-center justify-between 
                    p-4 rounded-sub nav rounded-xl
                    bg-glass-border-light/50 dark:bg-glass-border-dark/50
                  "
                >
                  <span className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 sm:mb-0">
                    {doc.name}
                  </span>
                  <Btn
                    href={doc.fileUrl}
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 
                      px-4 py-2 rounded-full 
                      text-sm font-semibold 
                      bg-primary-light dark:bg-primary-dark 
                      text-white 
                      transition-all duration-300
                      hover:opacity-80
                    "
                  >
                    <DownloadIcon />
                    Unduh PDF
                  </Btn>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='flex flex-col gap-10'>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6 text-center">
            Pedoman & Struktur
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <IconCard 
            icon=<DocumentIcon />
            title="Struktur Organisasi"
            desc="Memahami alur koordinasi dan pembagian tugas antar divisi. Struktur kami 
                dirancang untuk efisiensi dan kolaborasi."
            />
            
            <IconCard 
            icon=<RulesIcon />
            title="Peraturan Umum"
            desc="Pedoman perilaku, etika, dan tata tertib yang berlaku bagi seluruh 
                anggota aktif Himpunan Mahasiswa Informatika."
            />


          </div>
        </section>

      </div>
    </div>
  );
};

export default PanduanOrganisasi;
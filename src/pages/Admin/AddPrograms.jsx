import React, { useState } from 'react';
import { ProgramCard, TitleSection } from '@/components'; // Sesuaikan path

const AddPrograms = () => {
  // State untuk menyimpan input form
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');

  // Handler saat form di-submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProgram = { title, description, imageUrl, link };
    
    // Di aplikasi nyata, Anda akan mengirim 'newProgram' ini ke API/database
    console.log("Program Baru Ditambahkan:", newProgram);
    
    // Reset form
    setTitle('');
    setDescription('');
    setImageUrl('');
    setLink('');
    alert('Program berhasil ditambahkan! (Cek console)');
  };

  // Fungsi untuk helper input styling
  const inputStyle = "w-full p-3 rounded-sub border border-glass-border-light dark:border-glass-border-dark bg-glass-bg-light dark:bg-glass-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <TitleSection 
        title="Admin: Tambah Program"
        subtitle="Isi form di bawah ini untuk menambahkan program kerja baru"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* === KOLOM KIRI: FORM INPUT === */}
        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
          <div>
            <label className="block mb-1 font-medium text-text-light dark:text-text-dark">Judul Program</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputStyle}
              placeholder="Contoh: HIMIKOM DevClass"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium text-text-light dark:text-text-dark">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={inputStyle}
              rows="4"
              placeholder="Deskripsi singkat program..."
              required
            ></textarea>
          </div>
          
          <div>
            <label className="block mb-1 font-medium text-text-light dark:text-text-dark">URL Gambar (4:3)</label>
            <input 
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className={inputStyle}
              placeholder="https://.../gambar.jpg"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium text-text-light dark:text-text-dark">Link (Tujuan Tombol)</label>
            <input 
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className={inputStyle}
              placeholder="/portfolio/devclass"
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full px-8 py-3 rounded-full text-lg font-semibold
              bg-primary-light dark:bg-primary-dark text-white 
              shadow-lg hover:shadow-xl
              transition-all duration-300 ease-in-out
              transform hover:-translate-y-1
            "
          >
            Tambahkan Program
          </button>
        </form>

        {/* === KOLOM KANAN: LIVE PREVIEW === */}
        <div className="md:w-1/2">
          <h4 className="text-2xl font-bold text-center mb-4 text-text-light dark:text-text-dark">
            Live Preview
          </h4>
          <ProgramCard
            title={title}
            description={description}
            imageUrl={imageUrl}
            link="#" // Link di preview tidak perlu aktif
          />
        </div>

      </div>
    </div>
  );
};

export default AddPrograms;
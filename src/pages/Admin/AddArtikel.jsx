import { useState } from 'react';
import TitleSection from '../../components/ui/TitleSection';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const AddArtikel = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { 
      id: Date.now(),
      title, 
      slug, 
      excerpt, 
      imageUrl, 
      author, 
      content, 
      date: new Date().toISOString() 
    };
    
    console.log("Artikel Baru Siap Dikirim ke API:", newArticle);
    alert('Artikel berhasil dibuat! (Cek console F12)');
  };

  const inputStyle = "w-full p-3 rounded-sub border border-glass-border-light dark:border-glass-border-dark bg-glass-bg-light dark:bg-glass-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <TitleSection 
        title="Admin: Tambah Artikel Baru"
        subtitle="Isi form di bawah ini untuk mempublikasikan artikel baru."
      />

      <form 
        onSubmit={handleSubmit} 
        className="max-w-3xl mx-auto space-y-6"
      >
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputStyle}
          placeholder="Judul Artikel..."
          required
        />
        <input 
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className={inputStyle}
          placeholder="slug-url-artikel (contoh: ini-artikel-baru)"
          required
        />
        <input 
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className={inputStyle}
          placeholder="https://.../gambar.jpg"
          required
        />
        <input 
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={inputStyle}
          placeholder="Nama Penulis (Contoh: Divisi Web Dev)"
          required
        />
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={inputStyle}
          rows="3"
          placeholder="Cuplikan singkat artikel (excerpt)..."
          required
        ></textarea>
        
        <div>
          <label className="block mb-2 font-medium">Isi Konten Artikel</label>
          <ReactQuill 
            theme="snow" 
            value={content} 
            onChange={setContent} 
            className="bg-white"
          />
        </div>

        <button
          type="submit"
          className="
            w-full px-8 py-3 rounded-full text-lg font-semibold
            bg-primary-light dark:bg-primary-dark text-white 
            shadow-lg hover:shadow-xl transition-all
          "
        >
          Publikasikan Artikel
        </button>
      </form>
    </div>
  );
};

export default AddArtikel;
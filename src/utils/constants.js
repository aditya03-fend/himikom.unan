export const DUMMY_ARTICLES = [
  {
    id: 1,
    slug: "mengenal-react-hooks",
    title: "Mengenal React Hooks: useState dan useEffect",
    excerpt:
      "Pelajari dasar-dasar React Hooks, dua hook paling penting (useState dan useEffect), dan bagaimana mereka mengubah cara kita...",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
    author: "Divisi Web Dev",
    date: "2025-11-10",
    content: `
      <p>Pelajari dasar-dasar React Hooks, dua hook paling penting (useState dan useEffect), dan bagaimana mereka mengubah cara kita membangun komponen di React.</p>
      <p>Sebelum Hooks, kita menggunakan komponen kelas untuk mengelola state. Sekarang, dengan functional components, kita bisa 'hook' ke fitur-fitur React.</p>
      <h2>Apa itu useState?</h2>
      <p><code>useState</code> adalah hook yang memungkinkan Anda menambahkan state React ke komponen fungsional. Kita memanggilnya dengan nilai awal, dan ia mengembalikan array berisi nilai state saat ini dan fungsi untuk memperbaruinya.</p>
      <pre><code class="language-javascript">
const [count, setCount] = useState(0);
      </code></pre>
      <h2>Apa itu useEffect?</h2>
      <p><code>useEffect</code> memungkinkan Anda melakukan 'side effects' di komponen fungsional. Contoh side effects adalah mengambil data (fetching), mengatur subscription, atau memanipulasi DOM secara manual.</p>
    `,
  },
  {
    id: 2,
    slug: "panduan-desain-figma-untuk-pemula",
    title: "Panduan Desain Figma untuk Pemula",
    excerpt:
      "Figma telah menjadi standar industri untuk desain UI/UX. Panduan ini akan memandu Anda melalui fitur-fitur dasarnya...",
    imageUrl:
      "https://images.unsplash.com/photo-1635776062043-f85b81f337a6?w=400&q=80",
    author: "Divisi UI/UX",
    date: "2025-11-05",
    content: `
      <p>Figma telah menjadi standar industri untuk desain UI/UX. Panduan ini akan memandu Anda melalui fitur-fitur dasarnya, mulai dari frame, shape, hingga prototyping.</p>
      <h2>Mengapa Figma?</h2>
      <p>Figma berbasis cloud, yang berarti kolaborasi tim menjadi sangat mudah. Anda dapat bekerja dengan desainer lain secara real-time, sama seperti Google Docs.</p>
      <ul>
        <li>Kolaborasi Real-time</li>
        <li>Berjalan di browser (tidak perlu install)</li>
        <li>Fitur Prototyping yang kuat</li>
        <li>Komunitas plugin yang besar</li>
      </ul>
    `,
  },
];

export const DUMMY_PORTFOLIOS = [
  {
    id: 1,
    slug: "Aditya Tri Susanto",
    title: "Aditya Tri Susanto",
    author: "Frontend Developer",
    imageUrl: "WhatsApp Image 2025-11-15 at 05.30.05_e9ea319b.jpg",
    tags: ["Web App", "React", "Node.js"],
    link: "https://aditya-fend.vercel.app",
    content: "<p>Detail konten untuk Sistem Informasi Perpustakaan...</p>",
  },
];

export const DUMMY_CONTACT = [
  {
    id: 1,
    slug: "Ketua Himpunan",
    position: "Ketua Himpunan",
    name: "Amrully Arun Hadi",
    contacts: [
      { type: "email", value: "budi.santoso@himikom.org" },
      { type: "whatsapp", value: "6281234567890" },
    ],
  },
];

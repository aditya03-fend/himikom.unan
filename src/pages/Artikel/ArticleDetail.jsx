import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DUMMY_ARTICLES } from "../../utils/constants";

const formatDate = (dateString) => {
  if (!dateString) return "Tanggal tidak diketahui";
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = DUMMY_ARTICLES.find((a) => a.slug === slug) || null;
    setArticle(foundArticle);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="h-screen flex items-center justify-center">
        Memuat artikel...
      </div>
    );
  }

  return (
    <article
      className="
      container mx-auto px-4 sm:px-6 lg:px-8 
      py-16 md:py-24
      max-w-3xl
      animate-fade-in-up
    "
    >
      <Link
        to="/artikel"
        className="font-semibold hover:underline mb-6 inline-block"
      >
        &larr; Kembali ke semua artikel
      </Link>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        {article.title}
      </h1>

      <p className="text-lg mb-8">
        Oleh {article.author} • {formatDate(article.date)}
      </p>

      <div className="w-full aspect-vudeo rounded-main overflow-hidden mb-12">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
};

export default ArticleDetail;

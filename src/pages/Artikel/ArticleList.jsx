import React from 'react';
import TitleSection from '../../components/ui/TitleSection'; 
import ArticleCard from '../../components/ui/ArticleCard';   
// 1. Impor data dummy kita
import { DUMMY_ARTICLES } from '../../utils/constants'; 

const ArticleList = () => {
  return (
    <section className="container flex flex-col gap-6 mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16">
      
      <TitleSection 
        title="Artikel & Wawasan"
        subtitle="Kumpulan tulisan, wawasan, dan tutorial terbaru dari anggota dan alumni HIMIKOM."
      />

      <div className="
        flex flex-col
        gap-8
        max-w-6xl mx-auto
      ">
        {/* 2. Loop dan render data dummy */}
        {DUMMY_ARTICLES.map((article) => (
          <div key={article.id} className="animate-fade-in-up">
            <ArticleCard 
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              author={article.author}
              date={article.date}
            />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ArticleList;
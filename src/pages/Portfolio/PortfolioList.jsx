import { DUMMY_PORTFOLIOS } from "@/utils/constants";
import { PortfolioCard, TitleSection } from "@/components";

const performanceImages = import.meta.glob(
  "@/assets/images/Portfolio/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const getImage = (name) => {
  return performanceImages[`/src/assets/images/Portfolio/${name}`];
};

const PortfolioList = () => {
  return (
    <section>
      <div className="container mt-10 mx-auto px-16 sm:px-16 lg:px-8 py-16 flex flex-col gap-8">
        <TitleSection
          title="Portfolio Mahasiswa"
          subtitle="Inilah kumpulan Portfolio mahasiswa HIMIKOM."
        />

        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        max-w-6xl mx-auto
      "
        >
          {DUMMY_PORTFOLIOS.map((portfolio) => (
            <div key={portfolio.id} className="animate-fade-in-up">
              <PortfolioCard
                slug={portfolio.slug}
                title={portfolio.title}
                author={portfolio.author}
                imageUrl={getImage(portfolio.imageUrl)}
                tags={portfolio.tags}
                link={portfolio.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;

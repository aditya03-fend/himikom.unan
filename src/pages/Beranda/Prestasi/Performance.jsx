import { TitleSection, PerformanceCard } from "@/components"; // Sesuaikan path

const performanceImages = import.meta.glob(
  "@/assets/images/Performance/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const getImage = (name) => {
  return performanceImages[`/src/assets/images/Performance/${name}`];
};

const DUMMY_PROGRAMS = [
  {
    id: 1,
    title: "Afif Kisnadhya Putra",
    subTitle: "Google Student Ambasador",
    imageUrl:
      "SnapInsta.to_549236315_17888673666346018_7845114067133122512_n.jpg",
    link: "/portfolio/devclass",
  },
  {
    id: 2,
    title: "Muhammad Nabil M.",
    subTitle: "Nusantara Creative Competation",
    imageUrl:
      "SnapInsta.to_551185456_17889326340346018_1737473372670203826_n.jpg",
    link: "/portfolio/workshop-uiux",
  },
  {
    id: 3,
    title: "Afif Kisnadhya Putra",
    subTitle: "Nusantara Creative Competation",
    imageUrl:
    "SnapInsta.to_551348745_17889326349346018_2692914504738200842_n.jpg",
    link: "/portfolio/esports",
  },
];

const Performance = () => {
  return (
    <section className="container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6">

      <div className="w-full fles justify-start">
        <TitleSection title="Prestasi Mahasiswa" />
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
            <PerformanceCard
              title={program.title}
              subTitle={program.subTitle}
              description={program.description}
              imageUrl={getImage(program.imageUrl)}
              link={program.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Performance;

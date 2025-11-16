import { TitleSection } from "@/components";

const PROFILE_VIDEO_ID = "gMDSj4vd7fM";
const PROFILE_VIDEO_URL = `https://www.youtube.com/watch?v=${PROFILE_VIDEO_ID}`;
const THUMBNAIL_URL = `https://img.youtube.com/vi/${PROFILE_VIDEO_ID}/maxresdefault.jpg`;

const Profile = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div
        className="
        flex flex-col md:flex-row   
        md:items-center
        gap-12 lg:gap-16
        max-w-6xl mx-auto
      "
      >
        <div className="md:w-1/2 animate-fade-in-up delay-200">
          <a
            href={PROFILE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-2xl
              block relative 
              rounded-main 
              overflow-hidden 
              group 
              shadow-glass-light dark:shadow-glass-dark
              transition-all duration-300
              transform hover:shadow-2xl hover:-translate-y-1
            "
            aria-label="Tonton video profil di YouTube"
          >
            <img
              src={THUMBNAIL_URL}
              alt="Thumbnail Video Profil HIMIKOM"
              className="w-full h-auto object-full"
            />

            <div
              className="
              absolute inset-0 
              flex items-center justify-center 
              bg-black/40 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
            "
            >
              <svg
                className="w-16 h-16 text-white/90 transform group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                />
              </svg>
            </div>
          </a>
        </div>

        <div className="md:w-1/2 animate-fade-in-up">
          {" "}
          <TitleSection title="Profil" />
          {/* 2. PARAGRAF DESKRIPSI */}
          <p
            className="
            text-lg
            text-left
            max-w-none
          "
          >
            Sobat Coding... stalking organisasi kami di channel Youtube ini ya,
            agar kalian bisa bergabung menjadi mahasiswa keren era digital AI
            nih..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

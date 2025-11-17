import { useEffect } from 'react';
import { DUMMY_MODULS } from '../../utils/constants';
import { ModulCard, SideBar, TitleSection } from '@/components';

const ModulList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12">
      
      <TitleSection
        title="Pustaka Modul"
        subtitle="Tingkatkan keahlian Anda dengan panduan dan modul yang kami siapkan."
      />
      
      <div className="
        flex flex-col md:flex-row 
        max-w-7xl mx-auto my-12
        gap-8 lg:gap-12
        animate-fade-in-up
      ">
        
        <div className="w-full md:w-1/4 lg:w-1/5">
          <SideBar />
        </div>

        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {DUMMY_MODULS.map((modul) => (
              <ModulCard
                key={modul.id}
                slug={modul.slug}
                title={modul.title}
                description={modul.description}
                imageUrl={modul.imageUrl}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ModulList;
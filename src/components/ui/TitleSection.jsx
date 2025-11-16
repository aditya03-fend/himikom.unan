import React from 'react';

const TitleSection = ({ title, subtitle, customClass }) => {
  return (
    <div className={`
      ${customClass}
      max-w-3xl
      animate-fade-in-up
    `}>
      
      <h2 className="
        text-4xl sm:text-5xl 
        font-bold 
        mb-4
      ">
        {title}
      </h2>

      {subtitle && (
        <p className="
          text-lg 
        ">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSection;
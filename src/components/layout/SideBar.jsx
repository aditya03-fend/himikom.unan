import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: "Semua Modul", slug: "semua" },
  { name: "Dasar Web (HTML/CSS)", slug: "dasar-web" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React.js", slug: "react" },
  { name: "Alat (Tools)", slug: "tools" },
  { name: "UI/UX", slug: "ui-ux" },
];

const SideBar = () => {

  const getNavLinkClass = ({ isActive }) => {
    const baseStyle = "block w-full px-4 py-2.5 rounded-sub transition-colors duration-200";
    if (isActive) {
      return `${baseStyle} bg-glass-border-light dark:bg-glass-border-dark text-text-light dark:text-text-dark font-semibold`;
    }
    return `${baseStyle} text-text-secondary-light dark:text-text-secondary-dark hover:bg-glass-border-light/50 dark:hover:bg-glass-border-dark/50`;
  };

  return (
    <aside className="
      nav rounded-2xl
      p-5 
      w-full h-fit 
      sticky top-24
    ">
      
      <h3 className="
        text-2xl font-bold 
        text-text-light dark:text-text-dark 
        mb-4 pb-4 
        border-b border-glass-border-light dark:border-glass-border-dark
      ">
        Kategori Modul
      </h3>
      
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.slug}>
            <NavLink 
              to={`/modul/kategori/${category.slug}`} 
              className={getNavLinkClass}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
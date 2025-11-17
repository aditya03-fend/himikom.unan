import React from 'react';

const Input = ({ label, id, type = "text", ...rest }) => {
  
  const inputStyle = `
    w-full p-3 rounded-lg
    input 
    focus:outline-none focus:ring-2 focus:ring-primary-light
    transition-all duration-200
  `;

  return (
    <div className="w-full">
      <div className="input-light"></div>
      {label && (
        <label 
          htmlFor={id} 
          className="block mb-2 font-medium"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={inputStyle}
        {...rest} 
      />
    </div>
  );
};

export default Input;
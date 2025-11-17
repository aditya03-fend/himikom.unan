import React from "react";

const Input = ({ label, id, type = "text", ...rest }) => {
  const textareaStyle = `
    w-full p-3 rounded-xl
    input 
    focus:outline-none focus:ring-2 focus:ring-primary-light
    transition-all duration-200
  `;

  return (
    <div className="w-full">
      <div className="input-light"></div>

      {label && (
        <label htmlFor={id} className="block mb-2 font-medium">
          {label}
        </label>
      )}
      <textarea
        rows={5}
        type={type}
        id={id}
        className={textareaStyle}
        {...rest}
      />
    </div>
  );
};

export default Input;

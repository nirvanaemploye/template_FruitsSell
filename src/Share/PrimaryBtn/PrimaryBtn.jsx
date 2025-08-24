import React from "react";

const PrimaryBtn = ({ children, className = "" }) => {
  return (
    <button
    data-aos="fade"
      className={`bg-primary text-white text-xs sm:text-md 2xl:text-lg font-semibold shadow-md py-3 px-3 hover:scale-105 duration-300 font-Poppins ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;

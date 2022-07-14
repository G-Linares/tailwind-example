import React from "react";

const Button = ({content, image}) => {
  return (
    <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
      <img src={image} alt="facebook login" className="w-9" />
      <span className="font-thin">{content}</span>
    </button>
  );
};

export default Button;

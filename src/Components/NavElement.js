import React from "react";

const NavElement = ({ title }) => {
  return (
    <div className="group">
      <a href="/"> {title}</a>
      <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
    </div>
  );
};

export default NavElement;

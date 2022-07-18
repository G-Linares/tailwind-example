import React from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="navigation bar logo" />
          <div className=" hidden space-x-8 font-bold lg:flex">
            <Link
              to="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features{" "}
            </Link>
            <Link
              to="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing{" "}
            </Link>
            <Link
              to="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources{" "}
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
          <Link to="/" className="hover:text-veryDarkViolet">
            {" "}
            Login{" "}
          </Link>
          <Link
            to="/"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign in
          </Link>
        </div>
        {/* burger menu */}
      </div>
      {/* mobile menu */}
    </nav>
  );
};

export default Navbar;

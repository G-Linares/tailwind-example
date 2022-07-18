import React, {useState} from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [burger, setBurger] = useState('');
  const [menu, setMenu] = useState('hidden')

  const burgerHandler = () => {
    if(burger==='') {
      setBurger('open')
      setMenu('block')
    } else {
      setBurger('')
      setMenu('hidden')
    }
  }


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
        <div className="md:hidden relative z-index-40">
            <button id="menu-btn" onClick={burgerHandler} className={`z-40 block hamburger md:hidden focus:outline-none ${burger}`}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
      </div>
      <div id="menu" className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 ${menu}`}>
      <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">

          <Link to="/" className="w-full text-center">Features</Link>
          <Link to="/" className="w-full text-center">Pricing</Link>
          <Link to="/" className="w-full text-center">Resources</Link>
          <Link to="/" className="w-full pt-6 text-center border-t border-gray-400">Login</Link>
          <Link to="/" className="w-full py-4 text-center rounded-full bg-cyan">Sign Up</Link>
      </div>
        </div>
    </nav>
  );
};

export default Navbar;

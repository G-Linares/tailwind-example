import React, {useState} from "react";
import logo from "../Assets/logo.svg";

import { Link } from "react-router-dom";

const NavItem = ({ title, url }) => {
  return (
    <div className="group">
      <Link to={`${url}`} className="capitalize">
        {title}
      </Link>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
};

const Hero = () => {

  const [burger, setBurger] = useState('');
  const [menu, setMenu] = useState('hidden')

  const burgerHandler = () => {
    if(burger==='') {
      setBurger('open')
      setMenu('left-0')
    } else {
      setBurger('')
      setMenu('left-[100%]')
    }
  }

  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="logo" />
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <NavItem title={"about"} url={"/"} />
            <NavItem title={"careers"} url={"/"} />
            <NavItem title={"events"} url={"/"} />
            <NavItem title={"products"} url={"/"} />
            <NavItem title={"support"} url={"/"} />
          </div>
          <div className="md:hidden relative z-index-40">
            <button id="menu-btn" onClick={burgerHandler} className={`z-40 block hamburger md:hidden focus:outline-none ${burger}`}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
        <div id="menu" className={`flex items-center justify-center absolute bottom-0 top-0 flex-col self-end w-full h-screen py-1 pl-4 space-y-6 text-center text-lg z-10 text-white uppercase bg-black ${menu}`}>
          <Link to="/" className="hover:text-pink-500 hover:border-b hover:border-blue-50">Home</Link>
          <Link to="/" className="hover:text-pink-500 hover:border-b hover:border-blue-50">About </Link>
          <Link to="/" className="hover:text-pink-500 hover:border-b hover:border-blue-50">Careers</Link>
          <Link to="/" className="hover:text-pink-500 hover:border-b hover:border-blue-50">Events</Link>
          <Link to="/" className="hover:text-pink-500 hover:border-b hover:border-blue-50">Products</Link>
          <Link to="/" className="hover:text-pink-500 hover:border-b hover:border-blue-50">Support</Link>
        </div>
        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive experiences that deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;

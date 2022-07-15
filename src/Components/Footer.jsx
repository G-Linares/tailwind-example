import React from "react";

import logo from "../Assets/logo.svg";
import facebook from "../Assets/icon-facebook.svg"
import twitter from "../Assets/icon-twitter.svg"
import pinterest from "../Assets/icon-pinterest.svg"
import instagram from "../Assets/icon-instagram.svg"

import { Link } from "react-router-dom";

const Item = ({ title, url }) => {
  return (
    <div className="h-10 group">
      <Link to={`${url}`}>{title}</Link>
      <div className="mx-2 group-hover:border-b group-hoverborder-blue-50"></div>
    </div>
  );
};

const Icon = ({image, url}) => {
    return(
        <div className="h-8 group">
            <a href={url} target="blank_" rel="noreferrer">
                <img src={image} alt="social media icon" className="h-6"/>
            </a>
        </div>
    );
}

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img src={logo} alt="footer logo" className="w-44 md:ml-3" />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <Item url={"/"} title={"About"} />
              <Item url={"/"} title={"Careers"} />
              <Item url={"/"} title={"Events"} />
              <Item url={"/"} title={"Products"} />
              <Item url={"/"} title={"Support"} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-400">
            <div className="flex items-center justify-center space-x-4 mx-auto md:justify-end md:mx-0">
              <Icon image={facebook} url={"https://www.facebook.com/"} />
              <Icon image={twitter} url={"https://www.twitter.com/"} />
              <Icon image={pinterest} url={"https://www.pinterest.com/"} />
              <Icon image={instagram} url={"https://www.instagram.com/"} />
            </div>
            <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

import logo from "../Assets/logo.svg";
import facebook from "../Assets/icon-facebook.svg";
import twitter from "../Assets/icon-twitter.svg";
import instagram from "../Assets/icon-instagram.svg";

import { Link } from "react-router-dom";

const ColumnContent = ({ contentUp, contentDown }) => {
  return (
    <div className="flex flex-col space-y-4 text-center md:text-left">
      <div>
        <Link className="hover:text-strongCyan" to="/">
          {contentUp}
        </Link>
      </div>
      <div>
        <Link className="hover:text-strongCyan" to="/">
          {contentDown}
        </Link>
      </div>
    </div>
  );
};

const SocialMediaicon = ({image, url}) => {
  return (
    <a href={`${url}`} target="_blank" rel="noreferrer">
      <img src={image} alt="socail media link" className="duration-200 ficon"/>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50" id="footer">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img src={logo} alt="footer logo" className="scale-50" />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <ColumnContent contentUp={"FAQs"} contentDown={"Contact Us"} />
              <ColumnContent
                contentUp={"Privacy Policy"}
                contentDown={"Press Kit"}
              />
              <ColumnContent contentUp={"Install Guide"} contentDown={""} />
            </div>
            <div className="flex justify-between w-32 py-1">
              <SocialMediaicon image={facebook} url={"https://www.facebook.com/"}/>
              <SocialMediaicon image={twitter} url={"https://www.twitter.com/"}/>
              <SocialMediaicon image={instagram} url={"https://www.instagram.com/"}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

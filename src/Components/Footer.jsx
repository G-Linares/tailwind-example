import React from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../Assets/icon-facebook.svg";
import twitter from "../Assets/icon-twitter.svg";
import instagram from "../Assets/icon-instagram.svg";
import pinterest from "../Assets/icon-pinterest.svg";

const FooterItem = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      <div className="mb-5 font-bold text-white capitalize"> {title} </div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {sub.map((item, index) => {
          return (
            <Link
              to="/"
              key={item + index}
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              {" "}
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const SocialLink = ({ image }) => {
  return (
    <Link to="/">
      <img src={image} className="ficon" alt="social media icon" />
    </Link>
  );
};
const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-6 md:flex-row md:space-y-0 md:items-start">
        <img src={logo} alt="Footer logo" />
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <FooterItem
            title={"Features"}
            sub={["Link Shortening", "Analytics", "Branded Links"]}
          />
          <FooterItem
            title={"Resources"}
            sub={["Blog", "Developers", "Support"]}
          />
          <FooterItem
            title={"Company"}
            sub={["About", "Our Team", "Careers", "Contact"]}
          />
        </div>
        <div className="flex space-x-6">
          <SocialLink image={facebook} />
          <SocialLink image={twitter} />
          <SocialLink image={instagram} />
          <SocialLink image={pinterest} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

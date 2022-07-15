import React from "react";
import icon1 from "../Assets/icon-blacklist.svg";
import icon2 from "../Assets/icon-text.svg";
import icon3 from "../Assets/icon-preview.svg";

const Item = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <img src={image} alt="icon" className="mb-6" />
      <h5>{title}</h5>
      <p className="max-w-md text-grayishBlue">{desc}</p>
    </div>
  );
};

const Supercharge = () => {
  return (
    <section className="section-container my-20">
      <h3>Supercharge your workflow</h3>
      <p className="section-content mb-16 text-xl">
        We've got the tools to boost your productivity.
      </p>
      <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
        <Item title={"Create Blacklists"} desc={"Easily search your snippets by content, category, web address, application, and more."} image={icon1} />
        <Item title={"Plain Text Snippets"} desc={"Remove unwanted formatting from copied text for a consistent look."} image={icon2} />
        <Item title={"Sneak Previe"} desc={"Quick preview of all snippets on your Clipboard for easy access."} image={icon3} />
      </div>
    </section>
  );
};

export default Supercharge;

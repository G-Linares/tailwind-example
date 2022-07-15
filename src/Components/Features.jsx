import React from "react";
import computer from "../Assets/image-computer.png";

const Item = ({ title, desc }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p className="max-w-md text-grayishBlue">{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="section-container my-20" id="features">
      <div className="relative flex flex-col md:flex-row md:space-x-32">
        <div className="md:w-1/2">
          <img
            src={computer}
            alt="features computer"
            className="md:absolute top-0 right-[50%]"
          />
        </div>
        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
          <Item title={"Quick Search"} desc={"Easily search your snippets by content, category, web address, application, and more."} />
          <Item title={"iCloud Sync"} desc={"Instantly saves and syncs snippets across all your devices."} />
          <Item title={"Completely History"} desc={"Retrieve any snippets from the first moment you started using the app."} />
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";

import deep from "../Assets/desktop/image-deep-earth.jpg";
import deepMobile from "../Assets/mobile/image-deep-earth.jpg";

import arcade from "../Assets/desktop/image-night-arcade.jpg";
import arcadeMobile from "../Assets/mobile/image-night-arcade.jpg";

import soccer from "../Assets/desktop/image-soccer-team.jpg";
import soccerMobile from "../Assets/mobile/image-soccer-team.jpg";

import grid from "../Assets/desktop/image-grid.jpg";
import gridMobile from "../Assets/mobile/image-grid.jpg";

import above from "../Assets/desktop/image-from-above.jpg";
import aboveMobile from "../Assets/mobile/image-from-above.jpg";

import borealis from "../Assets/desktop/image-pocket-borealis.jpg";
import borealisMobile from "../Assets/mobile/image-pocket-borealis.jpg";

import curiosity from "../Assets/desktop/image-curiosity.jpg";
import curiosityMobile from "../Assets/mobile/image-curiosity.jpg";

import fish from "../Assets/desktop/image-fisheye.jpg";
import fishMobile from "../Assets/mobile/image-fisheye.jpg";

const Item = ({ imageDesk, imageMobile, title }) => {
  return (
    <div className="group item">
      {/* desktop */}
      <img
        className="hidden w-full duration-200 md:block group-hover:scale-110"
        src={imageDesk}
        alt="item main display"
      />
      {/* mobile */}
      <img
        className="w-full md:hidden"
        src={imageMobile}
        alt="item main display"
      />
      <div className="item-gradient"></div>
      <h5>{title}</h5>
    </div>
  );
};

const Creations = () => {
  return (
    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="uppercase text-4xl text-center md:text-left md:text-5xl">
            {" "}
            Our creations
          </h2>
          <button className="btn hidden md:block"> See All</button>
        </div>
        <div className="item-container">
          <Item
            imageDesk={deep}
            imageMobile={deepMobile}
            title={"deep earth"}
          />
          <Item
            imageDesk={arcade}
            imageMobile={arcadeMobile}
            title={"Night Arcade"}
          />
          <Item
            imageDesk={soccer}
            imageMobile={soccerMobile}
            title={"Soccer Team VR"}
          />
          <Item imageDesk={grid} imageMobile={gridMobile} title={"The Grid"} />
        </div>
        <div className="item-container mt-10">
          <Item
            imageDesk={above}
            imageMobile={aboveMobile}
            title={"From Up Above VR"}
          />
          <Item
            imageDesk={borealis}
            imageMobile={borealisMobile}
            title={"Pocket Borealis"}
          />
          <Item
            imageDesk={curiosity}
            imageMobile={curiosityMobile}
            title={"The Curiosity"}
          />
          <Item
            imageDesk={fish}
            imageMobile={fishMobile}
            title={"Make It Fishey"}
          />
        </div>
        <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See all</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;

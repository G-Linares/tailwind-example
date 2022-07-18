import React from "react";
import recognition from "../Assets/icon-brand-recognition.svg";
import records from "../Assets/icon-detailed-records.svg"
import custom from "../Assets/icon-fully-customizable.svg"

const Box = ({offset, image, title, desc}) => {
    return(
        <div className={`relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 ${offset}`}>
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={image} alt="recognition item" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                {title}
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              {desc}
            </p>
        </div>
    )
}

const Stats = () => {
  return (
    <>
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-s mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing acress the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
          <Box offset={null} image={recognition} title={"Brand Recognition"} desc={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."}/>
          <Box offset={"mt-24 md:mt-8"} image={records} title={"Detailed Records"} desc={" Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
          <Box offset={"mt-24 md:mt-16"} image={custom} title={"Detailed Records"} desc={" Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
        </div>
      </section>
    </>
  );
};

export default Stats;

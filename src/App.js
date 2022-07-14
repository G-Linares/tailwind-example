import React from "react";
import NavElement from "./Components/NavElement";
import img1 from "./Assets/image1.jpg";
import img2 from "./Assets/image2.jpg";
import img3 from "./Assets/image3.jpg";
import img4 from "./Assets/image4.jpg";
import img5 from "./Assets/image5.jpg";
import img6 from "./Assets/image6.jpg";

import ImageCard from "./Components/ImageCard";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-200">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:justify-end md:mb-24">
          <NavElement title={"Vector"} />
          <NavElement title={"Illustrations"} />
          <NavElement title={"Images"} />
          <NavElement title={"Icons"} />
        </div>
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          <div className="flex justify-between border-b relative">
            <input
              className="ml-1 border-none md:w-80 placeholder:font-thin focus:outline-none "
              placeholder="Search"
              type="text"
            />
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 text-gray-300 duration-200 hover:scale-110 border-none absolute right-1 bottom-0 md:bottom-3 border-r-2xl"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black cursor-pointer">
            Upload
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* image element */}
          <ImageCard image={img1} description={"Abstract Paiting"}/>
          <ImageCard image={img2} description={"In-Home Paiting"}/>
          <ImageCard image={img3} description={"Arquitectural Design"}/>
          <ImageCard image={img4} description={"Narutal Paiting"}/>
          <ImageCard image={img5} description={"Urban Picture"}/>
          <ImageCard image={img6} description={"Pattern Paiting"}/>
          <ImageCard image={img2} description={"In-Home Paiting"}/>
        </div>
      </div>
    </div>
  );
};

export default App;

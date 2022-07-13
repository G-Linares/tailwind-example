import React from "react";
import img from "./Images/image.jpg"

const App = () => {
  return (
    // background container
    <div className="flex items-center justify-center h-screen bg-zinc-700">
        <div className="bg-zinc-800 p-2 mx-6 rounded-2xl"> 
            <div className="flex flex-col md:flex-row rounded-l-xl">
                <img src={img} alt="email example" className="object-fit rounded-xl h-80 md:h-64  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"/>
                <div className="p-6 md:pt-12">
                    <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                        Get diet and fitness tips in your inbox 
                    </h2>
                    <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-white md:text-left">
                        Eat better amd exerciose better. Sign up for the Diet & Fitness newsletter.
                    </p>
                    <div className="flex flex-col mt-5 my-4 md:space-x-3 md:flex-row md:space-y-0">
                        <input type="text" placeholder="Enter your email address" className="p-2 px-4 text-center text-white bg-zinc-800 font-semibold border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"/>
                        <button className="mt-4 px-5 py-3 rounded-md text-xs text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white font-semibold duration-500">
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default App;

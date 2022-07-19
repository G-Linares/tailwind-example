import React from 'react';
import quote from "../Assets/bg-pattern-quotation.svg";


const Box = ({pic, mainText, secondaryText}) => {
  return (
    <div className="relative p-10 rounded-xl bg-purple-700">
          <img
            src={quote}
            alt="big quotation marks"
            className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
          />
          <div className="flex z-10 space-x-4">
            <img
              src={pic}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Daniel Clifford</h4>
              <p className="opacity-50"> Verified Graduate</p>
            </div>
          </div>
          <p className="relative z-10 mt-6">
            {mainText}
          </p>
          <p className="opacity-50 mt-6">
            {secondaryText}
          
          </p>
        </div>
  )
}

export default Box




import React from 'react';
import logo from "../Assets/logo.svg";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
        <img src={logo} alt="hero logo" className='mx-auto my-16'/>
        <h3 className='mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl'>A history of everything you copy</h3>
        <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices</p>
        <div className='flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4'>
            <Link className='p-4 px-8 rounded-full shadow-lg bg-strongCyan furation-200 hover:opacity-80' to="/"> Download for iOS</Link>
            <Link className='p-4 px-8 rounded-full shadow-lg bg-lightBlue furation-200 hover:opacity-80' to="/"> Download for Mac</Link>
        </div>
    </div>
  )
}

export default Hero
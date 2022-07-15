import React from 'react';
import logo from "../Assets/logo.svg";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className='section-container mb-40 pt-16'>
        <img src={logo} alt="hero logo" className='mx-auto my-16'/>
        <h3>A history of everything you copy</h3>
        <p className='section-content mb-10 text-2xl'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices</p>
        <div className='button-container'>
            <Link className='p-4 px-8 rounded-full shadow-lg bg-strongCyan furation-200 hover:opacity-80' to="/"> Download for iOS</Link>
            <Link className='p-4 px-8 rounded-full shadow-lg bg-lightBlue furation-200 hover:opacity-80' to="/"> Download for Mac</Link>
        </div>
    </section>
  )
}

export default Hero
import React from 'react';
import devices from "../Assets/image-devices.png";

const Access = () => {
  return (
    <section className='section-container my-20' id="access">
        <h3>Access Clipboard Anywhere</h3>
        <p className="mb-24 section-content text-xl">
            Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks. 
        </p>
        <img src={devices} alt="responsive app" className='mx-auto'/>
    </section>
  )
}

export default Access
import React from 'react';

import img1 from "../Assets/logo-google.png";
import img2 from "../Assets/logo-ibm.png";
import img3 from "../Assets/logo-microsoft.png";
import img4 from "../Assets/logo-hp.png";
import img5 from "../Assets/logo-vector-graphics.png";

const References = () => {
  return (
    <section id="references">
        <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
            <img src={img1} alt="reference logo" />
            <img src={img2} alt="reference logo" />
            <img src={img3} alt="reference logo" />
            <img src={img4} alt="reference logo" />
            <img src={img5} alt="reference logo" />
        </div>
    </section>
  )
}

export default References
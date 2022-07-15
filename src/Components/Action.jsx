import React from 'react';
import {Link} from 'react-router-dom';

const Action = () => {
  return (
    <section id="bottom" className='section-container my-20'>
        <h3>Clipboard for iOS and MacOS</h3>
        <p className='section-content text-xl mb-10'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>
        <div className='button-container'>
            <Link className='p-4 px-8 rounded-full shadow-lg bg-strongCyan furation-200 hover:opacity-80' to="/"> Download for iOS</Link>
            <Link className='p-4 px-8 rounded-full shadow-lg bg-lightBlue furation-200 hover:opacity-80' to="/"> Download for Mac</Link>
        </div>
    </section>
  )
}

export default Action
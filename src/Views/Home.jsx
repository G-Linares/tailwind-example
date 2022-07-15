import React from 'react';

import Access from '../Components/Access';
import Action from '../Components/Action';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import References from '../Components/References';
import Snippets from '../Components/Snippets';
import Supercharge from '../Components/Supercharge';

const Home = () => {
  return (
    <> 
      <Hero />
      <Snippets />
      <Features />
      <Access />
      <Supercharge />
      <References />
      <Action />
      <Footer />
    </>
  )
}

export default Home
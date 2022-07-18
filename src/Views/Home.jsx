import React from "react";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Shorten from "../Components/Shorten";
import Stats from "../Components/Stats";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shorten/>
      <Stats />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;

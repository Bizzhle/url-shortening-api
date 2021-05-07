import React from "react";
import Navbar from "./Navbar";

import Cards from "./Cards";
import Hero from "./Hero";
import Footer from "./Footer";

const Home = ({ addUrl, originalUrl }) => {
  return (
    <main className="">
      <Navbar />
      <Hero addUrl={addUrl} />
      <Cards originalUrl={originalUrl} />
      <section className="bg-primary-d-violet bg-boost-mobile md:bg-boost-desktop md:bg-cover bg-no-repeat bg-contain pt-1">
        <div className="max-w-xs mx-auto py-12 text-center">
          <h3 className="font-bold text-white text-2xl mt-12 mb-4">
            Boost your links today
          </h3>
          <button className="mb-8 py-3 px-10 rounded-full bg-primary-cyan text-white font-bold text-lg ">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;

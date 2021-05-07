import React from "react";
import illustration from "../images/illustration-working.svg";

import Form from "./Form";

const Hero = ({ addUrl }) => {
  return (
    <section className="bg-white ">
      <div className=" md:flex max-w-xs md:max-w-7xl  m-auto text-center md:items-center ">
        <div className="md:order-last bg-illustration bg-no-repeat bg-cover md:bg-auto z-0 w-full h-80 md:h-auto">
          <img src={illustration} alt="" className="invisible" />
        </div>
        <span className="text-center md:text-left">
          <h2 className="mt-8 text-4xl text-primary-d-violet font-bold ">
            More than just shorter links
          </h2>
          <p className="text-neutral-grayish-violet text-lg ">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className=" my-8 py-3 px-10 rounded-full bg-primary-cyan text-white font-bold text-lg ">
            Get Started
          </button>
        </span>
      </div>
      <Form addUrl={addUrl} />
    </section>
  );
};

export default Hero;

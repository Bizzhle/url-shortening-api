import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customize from "../images/icon-fully-customizable.svg";
import Results from "./Results";

const Cards = ({ originalUrl }) => {
  console.log(originalUrl);

  const UrlLists = originalUrl.map((urls) => (
    <Results key={Math.random()} name={urls.url} />
  ));
  return (
    <section className="bg-neutral-gray pt-8 flex flex-col ">
      <div>{UrlLists}</div>

      <div className="max-w-xs md:max-w-7xl mx-auto text-center mb-16 ">
        <div className="max-w-xl mx-auto">
          <h3 className="pb-4 text-3xl font-bold">Advanced Statistics</h3>

          <p className="px-2 mb-20">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>

        <span className="md:flex md:justify-between">
          <div className="flex-initial relative pt-1  md:text-left bg-white rounded-md z-50">
            <img
              src={brand}
              alt=""
              className="bg-primary-d-violet p-6 rounded-full absolute -top-10 md:left-20 left-1/2 transform -translate-x-1/2"
            />

            <h3 className="font-bold text-2xl px-4 pt-8 mt-12 mb-4">
              Brand Recognition{" "}
            </h3>
            <p className="px-4 pb-8">
              Boost your brand recognition with each click. Genreic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className=" flex justify-center  items-center">
            <div className=" border-primary-cyan border-l-8 md:border-b-8 z-0 h-24 md:h-0 md:w-8 "></div>
          </div>

          <div className="flex-initial relative pt-1 md:mt-8 h-auto md:text-left bg-white rounded-md ">
            <img
              src={detailed}
              alt=""
              className="bg-primary-d-violet p-6 rounded-full absolute -top-10 left-1/2 md:left-20 transform -translate-x-1/2"
            />

            <h3 className="font-bold text-2xl px-4 pt-8 mt-12 mb-4">
              Detailed Records{" "}
            </h3>
            <p className="px-4 pb-8">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps to inform better
              decisions.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" border-primary-cyan border-l-8 md:border-b-8 z-0 h-24 md:h-0 md:w-8  "></div>
          </div>

          <div className="flex-initial relative pt-1 md:text-left md:mt-16  bg-white rounded-md">
            <img
              src={customize}
              alt=""
              className="bg-primary-d-violet p-5 rounded-full absolute -top-10 left-1/2 md:left-20 transform -translate-x-1/2"
            />

            <h3 className="font-bold text-2xl px-4 mt-12 mb-4">
              Fully Customizable{" "}
            </h3>
            <p className="px-4 pb-8">
              Improve brand awarenesss and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Cards;

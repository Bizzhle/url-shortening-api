import React from "react";
import instagram from "../images/icon-instagram.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

import pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <section className="text-white bg-neutral-vdblue ">
      <div className="max-w-xs md:max-w-7xl mx-auto text-center md:flex justify-around">
        <h2 className="pt-12 pb-4 text-4xl font-bold">Shortly</h2>

        <div className="my-8">
          <h3 className="m-4 text-xl font-bold">Features</h3>
          <ul className="text-neutral-gray leading-8">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="my-8">
          <h3 className="m-4 text-xl font-bold">Resources</h3>
          <ul className="text-neutral-gray leading-8">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="my-8">
          <h3 className="m-4 text-xl font-bold">Company</h3>
          <ul className="text-neutral-gray leading-8">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex  mt-12 justify-center pb-12">
          <span className="px-2">
            <img src={facebook} alt="" />
          </span>
          <span className="px-2">
            <img src={twitter} alt="" />
          </span>
          <span className="px-2">
            <img src={pinterest} alt="" />
          </span>

          <span className="px-2">
            <img src={instagram} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

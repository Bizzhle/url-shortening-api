import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../images/logo.svg";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  const showSidebar = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className=" md:flex relative justify-between px-4 py-4 md:mx-auto md:max-w-7xl">
      <img src={logo} alt="logo" className="p-2 " />

      <div>
        <button
          onClick={showSidebar}
          className="md:hidden absolute right-4 top-4  text-neutral-gray hover:text-primary-d-violet text-4xl"
        >
          <FiMenu />
        </button>

        <nav
          ref={dropdownRef}
          className={
            isActive ? "menu" : "hidden md:flex justify-between w-full"
          }
        >
          <ul className="  md:flex mx-4  pb-4 mb-4 md:mb-0 md:pb-0 border-b-2 md:border-none border-neutral-gray">
            <li className="mx-1 px-1 py-3 text-white md:text-neutral-gray hover:text-primary-d-violet text-xl">
              Features
            </li>
            <li className="mx-1 px-2 py-3 text-white md:text-neutral-gray hover:text-primary-d-violet text-xl">
              Pricing
            </li>
            <li className="mx-1 px-2 py-3 text-white md:text-neutral-gray hover:text-primary-d-violet text-xl">
              Resources
            </li>
          </ul>

          <div className="flex flex-col md:flex-row text-white">
            <button className="mx-4 mb-2 px-2 py-3 font-bold cursor-pointer md:text-neutral-gray hover:bg-primary-cyan hover:text-white rounded-3xl">
              Login
            </button>
            <button className="mx-4 mb-2  px-2 py-3 font-bold cursor-pointer md:text-neutral-gray hover:bg-primary-cyan hover:text-white rounded-3xl">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

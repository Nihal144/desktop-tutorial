import React, { useState } from "react";
import "../css/navbar.css";
import { NavLink } from "reactstrap";


const Navbar = (props) => {
  const [navtoggle, setNavToggle] = useState(false);

  const navToggleHandler = () => {
    setNavToggle((prev) => !prev);
  };
  return (
    <>
      <nav
        className={`flex items-center justify-between ${props.custom} py-6 px-4 font-bold text-white`}
      >
        <NavLink href="/" className="text-white">
          <h1 className="text-2xl italic"><img src="/ark_logo.svg" alt="ark-logo" /></h1>
        </NavLink>
        <div className="hidden h-10 font-normal md:flex md:space-x-6">
          <div className="group">
            <NavLink href="/" className="text-[#acacad]  hover:text-white">
              Home
            </NavLink>
            <div className="mx-4 group-hover:border-b group-hover:border-ark"></div>
          </div>
          <div className="group">
            <NavLink href="/#studio" className="text-[#acacad] hover:text-white">
              Studio
            </NavLink>
            <div className="mx-4 group-hover:border-b group-hover:border-ark"></div>
          </div>
          <div className="group">
            <NavLink href="/people" className="text-[#acacad] hover:text-white">
              People
            </NavLink>
            <div className="mx-4 group-hover:border-b group-hover:border-ark"></div>
          </div>
          <div className="group">
            <NavLink href="/#contact" className="text-[#acacad] hover:text-white">
              Contact
            </NavLink>
            <div className="mx-4 group-hover:border-b group-hover:border-ark"></div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            onClick={navToggleHandler}
            className={`z-40 block hamburger focus:outline-none ${navtoggle && "z-40 block open hamburger focus:outline-none"
              }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {navtoggle && (
        <div
          id="menu"
          className="absolute top-0 bottom-0 left-0 w-full text-lg text-white uppercase bg-black"
        >
          <div className="mt-40 flex flex-col self-end  min-h-screen  py-1 pt-40 pl-12 space-y-3">
            <NavLink href="/" className="mobile-text text-[#acacad] hover:text-white">
              Home
            </NavLink>
            <NavLink href="/#studio" className="mobile-text text-[#acacad] hover:text-white">
              Studio
            </NavLink>
            <NavLink href="/people" className="mobile-text text-[#acacad] hover:text-white">
              People
            </NavLink>
            <NavLink href="/#contact" className=" mobile-text text-[#acacad] hover:text-white">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

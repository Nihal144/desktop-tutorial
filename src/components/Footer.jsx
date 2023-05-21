import React from "react";
import iconFacebook from "../assests/icons/iconFacebook.svg";
import iconInstagram from "../assests/icons/iconInstagram.svg";
import iconTwitter from "../assests/icons/iconTwitter.svg";

const Footer = (props) => {
  return (
    <footer>
      <div
        className={`max-w-6xl mx-auto text-center px-6 py-6  text-white ${props.custom}`}
      >

        <div className="flex flex-col items-center justify-center space-y-8   md:flex-row md:space-y-0 ">
          <div className="flex justify-between w-32 py-1">
            <a href="/">
              <img src="iconFacebook.svg" alt="" className="duration-200 ficon" />
            </a>
            <a href="/">
              <img
                src="iconInstagram.svg"
                alt=""
                className="duration-200 ficon"
              />
            </a>
            <a href="/">
              <img src="iconTwitter.svg" alt="" className="duration-200 ficon" />
            </a>
          </div>
        </div>
        <div className="mt-8">
          Copyright @ {new Date().getFullYear()} Ark Desgins LLC. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { NavLink } from "reactstrap";
import { projects } from "../../constants/projects"
import { formatTitle } from "../../utils/helpers"



const Category = () => {
  const location = useLocation();
  const studioName = location.pathname.split("/")[2];

  const catProjects = projects?.filter(item => item.category === studioName)



  return (
    <>
      <Navbar custom={"bg-[#1A1A1A]"} />
      <section id="category" className="bg-[#1A1A1A] font-Raleway ">
        <div className="max-w-6xl mx-auto px-4 mb-32 text-white md:px-0">
          <h2 className="text-3xl font-extrabold pt-12 uppercase pb-12 font-Raleway">
            {studioName} Studios
          </h2>
          {catProjects?.map((item, index) => (
            <div
              className={`flex flex-col  mb-12 space-y-16 md:flex-row  ${(index + 1) % 2 === 0 && "md:flex-row-reverse "
                }`}
              key={item.index}
            >
              <div className="w-full md:w-1/2 ">
                <img
                  src={item.heroImg}
                  alt={`ark-designs-${item.title}`}
                  className="h-[565px] w-[512px]  "
                />
              </div>
              <div className="flex flex-col md:mr-12 space-y-6 md:space-x-0 ">
                <h3 className="text-4xl font-md  md:px-0">{formatTitle(item.title)}</h3>
                <p className="max-w-sm leading-relaxed text-[#6b6b6b]">{item.snippet}</p>
                <NavLink href={`${studioName}/${item.title}`} className="p-0">
                  <button className="w-40 px-4 py-2 bg-white text-black ">
                    View
                    <span className="ml-4">
                      <ArrowForwardOutlinedIcon />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Category;

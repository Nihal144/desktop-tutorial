import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import InfoContainer from "../projectStudio/InfoContainer";
import SummaryContainer from "../projectStudio/SummaryContainer";
import Gallery from "../projectStudio/Gallery";
import "../css/categories.css";
import Footer from "../Footer";
import { useLocation } from 'react-router-dom';
import { projects } from "../../constants/projects"
import { formatTitle } from "../../utils/helpers"
import { useNavigate } from "react-router-dom";

const ProjectStudio = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const studioName = location.pathname.split("/")[2];
  const projectName = location.pathname.split("/")[3];
  const project = projects?.find(item => item.category === studioName && item.title === projectName)
  let navigate = useNavigate();

  const toggle = (event) => {
    setShowModal((prev) => !prev);
  };



  return (
    <>
      <Navbar custom={"bg-[#1A1A1A]"} />
      <section id="projectstudio" className="font-Raleway" >

        {/* project info container */}
        <div className="bg-[#1A1A1A]">
          <InfoContainer>
            <div className="my-2" onClick={() => navigate(-1)}><img src="/backArrow.svg" /></div>
            <div className="">
              <h2 className="text-4xl py-[12px] font-bold   text-[#dcdcdc] md:text-4xl">
                {formatTitle(project?.title)}
              </h2>
              <p className="text-md py-[12px] font-light  text-[#a5a5a5] ">
                {project?.snippet}
              </p>
            </div>
            <div className="flex flex-col py-8 pb-2 md:items-center md:justify-between space-y-4  md:flex-row  md:pt-8  md:space-y-0">
              <div className="flex text-[#6b6b6b] items-center md:justify-between space-x-2">
                <span className="w-[12px]"><img src="/client.svg" /></span>
                <span><h4>{project?.client}</h4></span>
              </div>
              <div className="flex text-[#6b6b6b] items-center md:justify-between space-x-2">
                <span className="w-[12px]"><img src="/location.svg" /></span>
                <span><h4>{project?.location}</h4></span>
              </div>
              <div className="flex text-[#6b6b6b] items-center md:justify-between space-x-2">
                <span className="w-[12px]"><img src="/area.svg" /></span>
                <span><h4>{project?.area}</h4></span>
              </div>
              <div className="flex text-[#6b6b6b] items-center md:justify-between space-x-2">
                <span className="w-[12px]"><img src="/year.svg" /></span>
                <span><h4>{project?.year}</h4></span>
              </div>

            </div>
            <div className="h-[2px] my-4   bg-[#454545]"></div>
            {/* <TitleContainer
              icon1={<PersonOutlineIcon />}
              icon1Text={`Client: ${project?.client}`}
              icon2={<ShareOutlinedIcon />}
              icon2Text={`Area: ${project?.area}`}
            />
            <TitleContainer
              icon1={<LocationOnOutlinedIcon />}
              icon1Text={`Project Location: ${project?.location}`}
              icon2={<AccessTimeOutlinedIcon />}
              icon2Text={`Year: ${project?.year}`}
            /> */}

            {/* Project summary container */}
            <Gallery images={project?.images} />

            <SummaryContainer
              summary1={project?.summary1}
              summary2={project?.summary2}
              summary3={project?.summary3}
            />
          </InfoContainer>
          <Footer />
        </div >
      </section >


    </>
  );
};

export default ProjectStudio;


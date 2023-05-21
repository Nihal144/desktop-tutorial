import React from "react";
import Navbar from "../Navbar/Navbar";
import "../css/people.css";

import Footer from "../Footer";



const People = () => {
  return (
    <>
      <Navbar custom={"bg-[#1A1A1A] p-4"} />
      <section id="people" className="bg-[#1A1A1A] " >
        {/* <div className="relative pb-20  -z-10  bg-[#1A1A1A] min-h-screen font-Raleway">
          <img
            src={people}
            alt=""
            className="h-[350px] w-full object-cover  "
          />
          <div className="people-gradient "></div>
          <div className="absolute  top-24 md:top-24 md:left-72 flex flex-col  space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold  text-center text-white">
              Meet Our Amazing team
            </h1>
            <p className="max-w-xl text-white  text-center leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="max-w-6xl mx-auto text-center px-10 mt-8 text-white  bg-[#1A1A1A]  lg:absolute  lg:top-60 lg:left-48 md:aboslute  md:right-32  md:bg-transparent">
            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-4">
              {peopleData.map((person) => (
                <div
                  className="flex flex-col items-center space-y-6"
                  key={person.id}
                >
                  <div className="w-6/12">
                    <img
                      src={person.img}
                      alt="..."
                      className="shadow-lg h-[250px]  grayscale rounded-full w-full  align-middle border-none"
                    />
                  </div>

                  <h5 className="font-bold">{person.name}</h5>
                  <h5 className="font-bold">{person.role}</h5>
                  <p className="md:max-w-sm leading-relaxed text-sm px-4">
                    {person.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div className='max-w-6xl mx-auto   py-4 bg-[#1A1A1A] md:h-[72vh]'>
          <h2 className="text-3xl text-center text-[#a5a5a5] py-4">Team</h2>
          <div className='flex flex-col items-center  max-w-xl mx-auto space-y-4 px-16 py-8 md:mt-10 text-[#a5a5a5] md:justify-between md:flex-row md:space-y-0'>
            <div className="flex flex-col items-center space-y-4">
              <span><img src="/people/akash.png" alt="people" className="w-[200px] rounded-full" /></span>
              <h4 className="py-2">Akash Rai</h4>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span><img src="/people/akash.png" alt="people" className="w-[200px] rounded-full" /></span>
              <h4 className="py-2">Akash Rai</h4>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A]">
          <Footer custom="bg-[#1A1A1A]" />
        </div>
      </section>
    </>
  );
};

export default People;

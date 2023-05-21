import React from "react";
import Footer from "../Footer";
import About from "../Home/About";
import About2 from "../Home/About2";
import Categories from "../Home/Categories";
import Contact from "../Home/Contact";
import Hero from "../Home/Hero";
import Testimonials from "../Home/Testimonials";

const Home = () => {
  return (
    <>
      <div className="bg-[#1A1A1A] font-Raleway">
        <Hero />
        <Categories />
        <About />

        {/* <About2 /> */}
        <Testimonials />
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default Home;

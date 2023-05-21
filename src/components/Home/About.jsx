import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
const About = () => {
  return (
    <>
      <section>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>

          <div className='max-w-6xl mx-auto px-8'>
            <div className='flex flex-col py-10 items-center md:flex-row md:justify-evenly md:py-20'>
              <div><img src="about/about1.png" alt="about" /></div>
              <div><p className="max-w-md px-[20px] py-2 text-sm font-light text-[#717171] md:text-xl md:px-0 md:py-0">
                Embark on a journey of architectural joy with us as we redefine spaces through meticulous design concepts, balanced proportions, intricate details, and a minimalist yet dynamic approach. Elevate your surroundings with our unrivalled commitment to superior craftsmanship and visionary innovation.
              </p></div>
            </div>
            <div className='flex flex-col items-center py-10 md:flex-row md:justify-evenly md:py-20'>
              <div><img src="about/about2.png" alt="about" /></div>
              <div><p className="max-w-md px-[20px] py-2 text-sm font-light text-[#717171] md:text-xl md:px-0 md:py-0">
                Discover the epitome of refinement and elegance as we strive to provide you with unparalleled interior design services. Immerse yourself in a world of harmonious aesthetics, meticulously curated spaces, and breathtaking artistry, elevating your surroundings to extraordinary levels of beauty and sophistication.
              </p></div>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
    </>
  );
};

export default About;

import React from "react";
import "../css/categories.css";
import { NavLink } from "reactstrap";


import { AnimationOnScroll } from "react-animation-on-scroll";


const Categories = () => {
  return (
    <>
      <section id="studio">
        <div className="container max-w-6xl px-6 mt-4 md:mb-10 mb-20  mx-auto text-white md:mt-40">
          <div className="flex justify-center mb-2 md:mb-20">
            <h2 className="max-w-lg  sm:text-center mb-8 text-3xl  text-[#858585] uppercase tracking-[0.5em] md:text-5xl md:text-left md:my-16">
              Studio
            </h2>
          </div>
          <div className="category-container">
            {/* {categories.map((category) => {
              return (
                <div className="group category" key={category.id}>
                  <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    animateOnce={true}
                  >
                    <NavLink
                      href={`studio/${category.name}`}
                      className="text-white p-0"
                    >
                      <img
                        src={category.desktopImg}
                        alt=""
                        className="hidden w-full duration-200 md:block md:goup-hover:scale-110"
                      />
                      <img
                        src={category.mobileImg}
                        alt=""
                        className="w-full md:hidden "
                      />
                      <div className="category-gradient "></div>
                      <h5 className=" absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110">
                        {category.name}
                      </h5>
                    </NavLink>
                  </AnimationOnScroll>
                </div>
              );
            })} */}

            <div className="group category ">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <NavLink
                  href={`studio/architecture`}
                  className="text-white p-0"
                >
                  <img
                    src="/category/architecture-desktop.png"
                    alt=""
                    className="hidden w-full duration-[500ms] md:block md:group-hover:scale-110 transition ease-linear delay-100"
                  />
                  <img
                    src="/category/architecture-mobile.png"
                    alt=""
                    className="w-full md:hidden"
                  />
                  <div className="hidden md:contents">
                    <div className="category-gradient "></div>
                  </div>
                  <div className="hidden md:contents">
                    <h5 className="w-full absolute text-center text-[20px] text-[#b6b5b5] font-normal  px-6   bottom-4 md:bottom-8 md:px-10 duration-[500ms]  md:group-hover:scale-110 transition ease-linear delay-100">
                      Architecture
                    </h5>
                  </div>
                </NavLink>
              </AnimationOnScroll>
            </div>
            <div className="group category">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <div
                  href={`studio/furniture`}
                  className="text-white p-0"
                >
                  <img
                    src="category/furniture-desktop.png"
                    alt=""
                    className="hidden w-full duration-[500ms] md:block md:group-hover:scale-110 transition ease-linear delay-100"
                  />
                  <img
                    src="category/furniture-mobile.png"
                    alt=""
                    className="w-full md:hidden "
                  />
                  <div className="hidden md:contents">
                    <div className="category-gradient "></div>
                  </div>
                  <div className="hidden md:contents">
                    <h5 className="w-full absolute text-center text-[20px] text-[#b6b5b5] font-normal  px-6   bottom-4 md:bottom-8 md:px-10 duration-[500ms]  md:group-hover:scale-110 transition ease-linear delay-100">
                      furniture
                    </h5>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="group category">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <NavLink
                  href={`studio/interiors`}
                  className="text-white p-0"
                >
                  <img
                    src="category/interiors-desktop.png"
                    alt=""
                    className="hidden w-full duration-[500ms] md:block md:group-hover:scale-110 transition ease-linear delay-100"
                  />
                  <img
                    src="category/interiors-mobile.png"
                    alt=""
                    className="w-full md:hidden "
                  />
                  <div className="hidden md:contents">
                    <div className="category-gradient "></div>
                  </div>
                  <div className="hidden md:contents">
                    <h5 className="w-full absolute text-center text-[20px] text-[#b6b5b5] font-normal  px-6   bottom-4 md:bottom-8 md:px-10 duration-[500ms]  md:group-hover:scale-110 transition ease-linear delay-100">
                      Interiors
                    </h5>
                  </div>
                </NavLink>
              </AnimationOnScroll>
            </div>
            <div className="group category">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <NavLink
                  href={`studio/landscape`}
                  className="text-white p-0"
                >
                  <img
                    src="category/landscape-desktop.png"
                    alt=""
                    className="hidden w-full duration-[500ms] md:block md:group-hover:scale-110 transition ease-linear delay-100"
                  />
                  <img
                    src="category/landscape-mobile.png"
                    alt=""
                    className="w-full md:hidden "
                  />
                  <div className="hidden md:contents">
                    <div className="category-gradient "></div>
                  </div>
                  <div className="hidden md:contents">
                    <h5 className="w-full absolute text-center text-[20px] text-[#b6b5b5] font-normal  px-6   bottom-4 md:bottom-8 md:px-10 duration-[500ms]  md:group-hover:scale-110 transition ease-linear delay-100">
                      Landscape
                    </h5>
                  </div>
                </NavLink>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
// .category-gradient {
//   @apply absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-700 ;
// }
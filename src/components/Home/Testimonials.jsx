import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <>
      <div className="container max-w-5xl mb-20 py-10 mx-auto">
        <Slider {...settings}>
          <div className="max-w-screen-xl px-4  mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="#868686" />
              </svg>
              <blockquote>
                <p className="text-sm  text-[#858585] font-light  md:text-2xl">"Their designs are suitable and convenient for their customers and show exemplary interest and dedication towards their work, their design align with the interest of the client and pick out the perfect design and most suitable advancement necessary in order to perfect the project and present the their clients with the perfect home"</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-[#d4d1d1]">Apeksha Rai  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">401</div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="max-w-screen-xl px-4  mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="#868686" />
              </svg>
              <blockquote>
                <p className="text-sm  text-[#858585] font-light md:text-2xl">"Our dream house became a reality with the perfect fusion of modern and traditional elements. The large laterite feature wall became the heart of the design. The tastefully done interiors and well-thought material palette created a warm and inviting atmosphere we love coming home to"</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-[#d4d1d1]">Nihal K</div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">The Wall</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-screen-xl px-4  mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="#868686" />
              </svg>
              <blockquote>
                <p className="text-sm font-light text-[#858585]  md:text-2xl">"I couldn't be happier with the interior design of my pet spa and salon. The minimalism and soft colours create a calming atmosphere that pets and customers instantly respond to. The warm ambient lighting adds to the inviting ambiance. The efficient circulation and layout make operations smooth and enjoyable. They helped me showcase my love for pets and bring an element of joy to the space."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-[#d4d1d1]">Swathi Shetty</div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Tails of the City</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </Slider>
      </div>

    </>
  );
};

export default Testimonials;

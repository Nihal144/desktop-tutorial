import React from "react";
import ContactForm from "./ContactForm";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <div className="max-w-6xl mx-auto px-6  mb-32 text-white ">
            <div className="flex justify-center  mb-20">
              <h2 className="max-w-lg  sm:text-center text-4xl text-[#858585]  md:text-5xl md:text-left md:mt-0">
                Reach us
              </h2>
            </div>
            <div className="container flex flex-col items-center justify-center text-[#989898] bg-[#1a1a1a] md:flex-row">
              <div className="flex flex-col  w-full  space-y-8 px-6 py-4 md:w-1/3">
                <h2 className="text-2xl mb-4 font-bold text-left">
                  Ask Us
                </h2>
                <ContactForm />
              </div>
              <div className=" flex flex-col w-full text-left space-y-16 px-6 py-4 md:w-1/3">
                <div>
                  <h2 className="text-2xl mb-4 font-bold">
                    Call us
                  </h2>
                  <p>
                    1(234) 567-891 <br /> 1(234) 987-654
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 font-bold">
                    Location
                  </h2>
                  <p>
                    Cub, 6th main, 16th Cross Rd, opposite to sadashivanagar,
                    Sadashiva Nagar, Bengaluru, 560080
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 font-bold">
                    Our top services
                  </h2>
                  <div className="flex flex-col justify-center space-y-2">
                    <p>Interiors</p>
                    <p>Architecture</p>
                    <p>Interiors</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full md:w-1/3">
                <iframe
                  width="100%"
                  height="558"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.767819951225!2d77.5816373!3d13.007504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdda09dfadadab377!2sARK%20designs!5e0!3m2!1sen!2sin!4v1640344702582!5m2!1sen!2sin"
                  data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWVtYmVkJTIyJTJDJTIyYWRkcmVzcyUyMiUzQSUyMjIxJTIwQXZlbnVlJTJDJTIwTmV3JTIwWW9yayUyMiUyQyUyMnpvb20lMjIlM0ExMCUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTJDJTIyZW1iZWQlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnd3dy5nb29nbGUuY29tJTJGbWFwcyUyRmVtYmVkJTNGcGIlM0QhMW0xNCExbTghMW0zITFkMTU1NDkuNzY3ODE5OTUxMjI1ITJkNzcuNTgxNjM3MyEzZDEzLjAwNzUwNCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTI1M0EweGRkYTA5ZGZhZGFkYWIzNzchMnNBUkslMjUyMGRlc2lnbnMhNWUwITNtMiExc2VuITJzaW4hNHYxNjQwMzQ0NzAyNTgyITVtMiExc2VuITJzaW4lMjIlN0Q="
                ></iframe>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
    </>
  );
};

export default Contact;

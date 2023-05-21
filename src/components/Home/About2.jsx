import React from "react";
import styles from "../css/about2.module.css";
import { NavLink } from "reactstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About2 = () => {
  return (
    <>
      <>
        <section className={`flex flex-col pt-20  pb-20 md:pt-40 md:pb-40`}>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            {/* <div className={styles.container}>
              <div className={styles.wrap}>
                <div className={styles.columnleft}>
                  <div className={styles.content}>
                    <h2 className="max-w-lg mt-10 mb-6 font-sans sm:text-center text-4xl  text-gray-900 md:text-5xl md:text-left md:mt-0">
                      Stunning interiors
                    </h2>
                    <p className="max-w-md  py-4 text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Vitae congue eu consequat ac felis. Elit ut
                      aliquam purus sit amet. Iaculis urna id volutpat lacus
                      laoreet non curabitur gravida. In ante metus dictum at.
                    </p>
                  </div>
                </div>
                <div className={styles.columnright}>
                  <img src={about_img2} alt="about2" />
                </div>
              </div>
            </div> */}
            <div className=' max-w-2xl mb-40 mx-auto py-20 md:max-w-6xl md:mb-0'>
              <div className={styles.aboutContainer1}>
                <div className={styles.aboutContent1}>
                  <h2>Lorem Ipsum Ipsum</h2>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae congue eu consequat ac felis. Elit ut
                    aliquam purus sit amet. Iaculis urna id volutpat lacus
                    laoreet non curabitur gravida. In ante metus dictum at.</p>
                </div>
                <div className={styles.aboutImg}>
                  <img src="about/interiors.png" />
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </section>
      </>
    </>
  );
};

export default About2;

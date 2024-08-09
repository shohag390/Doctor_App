import React from "react";
import doctorImage from "../../assets/images/about.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* --------ABOUT IMAGE---------- */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[77px] z-10 order-2 lg:order-1">
            <img src={doctorImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

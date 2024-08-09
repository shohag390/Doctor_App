import React from "react";
import doctorImage from "../../assets/images/about.png";
import doctorCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* --------ABOUT IMAGE---------- */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={doctorImage} alt="image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[7%] lg:right-[22%]">
              <img src={doctorCard} alt="image" />
            </div>
          </div>
          {/* ----------ABOUT IMAGE CLOSE--------- */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              For 30 years in a row, U.S. News & world Report has recognized us
              as one of the best bublics hospitals in the nation and #1 in Texas
              . Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              esse!
            </p>
            <p className="text_para mt-[30px]">
              Our best is somethinf we strive for each day, caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Sed, animi.
            </p>
            <Link to={"/about"}>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import doctorImage from "../../assets/image/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="md:px-[80px] bg_tast px-[20px] md:py-[50px] py-[25px] bg-[#E6F1FF] md:flex md:justify-between md:items-center gap-[60px]">
      {/* --------ABOUT IMAGE---------- */}
      <div className="md:w-[50%] md:pb-0 pb-[25px]">
        <img
          className="w-full md:h-[450px] rounded-[30px]"
          src={doctorImage}
          alt="image"
        />
      </div>
      {/* ----------ABOUT IMAGE CLOSE--------- */}

      <div className="md:w-[50%]">
        <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] font-bold text-[#002570] pb-[18px]">
          Proud to be one of the nations best
        </h4>
        <p className="md:text-[17px] capitalize text-[gray] font-semibold pt-[4px]">
          For 30 years in a row, U.S. News & world Report has recognized us as
          one of the best bublics hospitals in the nation and #1 in Texas .
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse!
        </p>
        <p className="md:text-[17px] capitalize text-[gray] font-semibold pt-[15px] md:pb-[25px] pb-[15px]">
          Our best is somethinf we strive for each day, caring for our
          patients-not looking back at what we accomplished but towards what we
          can do tomorrow. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sed, animi.
        </p>
        <Link to={"/about"}>
          <button className="btnOne md:py-[8px] py-[6px] md:px-[30px] px-[20px]">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;

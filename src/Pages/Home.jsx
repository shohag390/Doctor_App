import React from "react";
import imageone from "../assets/images/hero-img01.png";
import imageTwo from "../assets/images/hero-img02.png";
import imageThree from "../assets/images/hero-img03.png";
import serviceOne from "../assets/images/icon01.png";
import serviceTwo from "../assets/images/icon02.png";
import serviceThree from "../assets/images/icon03.png";
import doctorImage from "../assets/images/about.png";
import doctorCard from "../assets/images/about-card.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Services from "./Services";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";

const serviceArr = [
  {
    image: serviceOne,
    serviceName: "Find a Doctor",
    des: "World-class care for everyone. Our health System Offers unmatched. expert health care. From the lab to the clinic.",
  },
  {
    image: serviceTwo,
    serviceName: "Find a Location",
    des: "World-class care for everyone. Our health System Offers unmatched. expert health care. From the lab to the clinic.",
  },
  {
    image: serviceThree,
    serviceName: "Book Appointment",
    des: "World-class care for everyone. Our health System Offers unmatched. expert health care. From the lab to the clinic.",
  },
];

const Home = () => {
  return (
    <>
      {/* --------HERO SECTION HERE-------- */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ---------HERO CONTANT HERE---------- */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy , longer life
                </h1>
                <p className="text_para">
                  Health care, or healthcare, is the improvement of health via
                  the prevention, diagnosis, treatment, amelioration or cure of
                  disease, illness, injury, and other physical and mental
                  impairments in people.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Client Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ---------HERO CONTANT CLOSE---------- */}

            {/* ---------HERO IMAGE HERE---------- */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={imageone} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={imageTwo} alt="" />
                <img className="w-full" src={imageThree} alt="" />
              </div>
            </div>

            {/* ---------HERO IMAGE HERE---------- */}
          </div>
          <div></div>
        </div>
      </section>

      {/* --------HERO SECTION CLOSE-------- */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-center heading">
              Providing the best medical services
            </h2>
            <p className="text-center text_para">
              World-class care for everyone . Our health System offers unmatched
              , expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {serviceArr.map((card, index) => (
              <div key={index} className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={card.image} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    {card.serviceName}
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    {card.des}
                  </p>
                  <Link
                    to={"/doctors"}
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------ABOUT SECTION HERE------- */}
      <About />
    </>
  );
};

export default Home;

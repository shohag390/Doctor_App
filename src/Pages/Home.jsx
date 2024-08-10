import React from "react";
import imageone from "../assets/images/hero-img01.png";
import imageTwo from "../assets/images/hero-img02.png";
import imageThree from "../assets/images/hero-img03.png";
import serviceOne from "../assets/images/icon01.png";
import serviceTwo from "../assets/images/icon02.png";
import serviceThree from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from "../components/Doctor/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

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

      {/* --------LOCATION SECTION-------- */}
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
                    to={"/doctor"}
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:text-white hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --------LOCATION SECTION-------- */}

      {/* --------ABOUT SECTION HERE------- */}
      <About />
      {/* --------ABOUT SECTION CLOSE------- */}

      {/* --------SERVICES SECTION HERE--------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">Our medical services</h2>
            <p className="text-center text_para">
              World-class care for everyone . Our health System offers unmatched
              , expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/* --------SERVICES SECTION CLOSE--------- */}

      {/* -----------FEATURE SECTION HERE--------- */}
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Get virtual Treatment</h2>
              <ul className="pl-4">
                <li className="text_para">
                  1.Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2.Search for your physician here, and contact ther office.
                </li>
                <li className="text_para">
                  2.View our physicians who are accepting new patients. use the
                  online scheduling tool to select an appointment time .
                </li>
              </ul>
              <Link to={"/"}>
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="image" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="image" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------FEATURE SECTION CLOSE--------- */}

      {/* ------OUR GREAT DOCTOR HERE--------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">Our great doctor</h2>
            <p className="text-center text_para">
              World-class care for everyone . Our health System offers unmatched
              , expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ------OUR GREAT DOCTOR CLOSE--------- */}

      {/* --------FAQ SECTION--------- */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="hidden w-1/2 md:block">
              <img src={faqImg} alt="image" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* --------FAQ SECTION CLOSE--------- */}

      {/* --------TESTIMONIAL--------  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">What our patient say</h2>
            <p className="text-center text_para">
              World-class care for everyone . Our health System offers unmatched
              , expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* --------TESTIMONIAL CLOSE--------  */}
    </>
  );
};

export default Home;

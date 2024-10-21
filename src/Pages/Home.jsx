import React, { useEffect, useState } from "react";
import image from "../assets/image/hero-img.png";
import counter from "../assets/image/counter-img.png";
import serviceOne from "../assets/images/icon01.png";
import serviceTwo from "../assets/images/icon02.png";
import serviceThree from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import therapi from "../assets/image/therapy.jpg";
import DoctorList from "../components/Doctor/DoctorList";
import faqImg from "../assets/image/faq.jpg";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceArr = [
  {
    image: serviceOne,
    serviceName: "Find a Doctor",
    des: "World-class care for everyone. Our health System Offers unmatched. expert health care.",
  },
  {
    image: serviceTwo,
    serviceName: "Find a Location",
    des: "World-class care for everyone. Our health System Offers unmatched. expert health care.",
  },
  {
    image: serviceThree,
    serviceName: "Book Appointment",
    des: "World-class care for everyone. Our health System Offers unmatched. expert health care.",
  },
];

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <>
      {/* --------HERO SECTION HERE-------- */}
      <section className="md:h-[90vh] md:py-0 py-[35px] w-full banner md:px-[80px] px-[20px] md:flex md:items-center md:justify-between overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-right">
          <h2 className="md:text-[50px] text-[30px] font-bold md:leading-[60px] leading-[40px] text-white md:pb-[20px] pb-[15px]">
            We help patients live a healthy longer life .
          </h2>
          <p className="md:text-[17px] md:font-semibold text-[#E6F1FF] md:pb-[35px] pb-[20px]">
            Health care, or healthcare, is the improvement of health via the
            prevention, diagnosis, treatment, amelioration or cure of disease,
            illness, injury, and other physical and mental impairments in
            people.
          </p>
          <div>
            <button className="btnOne md:py-[8px] py-[6px] md:px-[30px] px-[20px]">
              Appointment
            </button>
          </div>
        </div>
        <div
          className="md:w-[50%] md:flex md:justify-end hidden"
          data-aos="fade-left"
        >
          <img className="md:h-[90vh] md:pt-[40px]" src={image} alt="" />
        </div>
      </section>
      {/* --------HERO SECTION CLOSE-------- */}
      <section className="md:px-[80px] px-[20px] md:h-[30vh] w-full client_happy md:flex md:items-center  md:justify-between gap-[100px] md:py-0 py-[25px] overflow-hidden">
        <div
          className="md:w-[50%] md:flex overflow-hidden hidden md:items-center md:gap-[30px]"
          data-aos="fade-right"
        >
          <img className="md:h-[120px]" src={counter} alt="" />
          <h6 className="md:text-[25px] font-bold text-[white]">
            Medical Achivement Health Protection
          </h6>
        </div>
        <div
          className="md:w-[50%] w-full flex items-center justify-between"
          data-aos="fade-left"
        >
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex flex-col items-center">
              <h2 className="md:text-[40px] text-[30px] font-bold text-[white]">
                {counterOn && (
                  <CountUp start={0} end={30} duration={2} delay={0} />
                )}
                +
              </h2>
              <p className="md:text-[17px] text-center md:font-semibold text-[#E6F1FF]">
                Years of Experience
              </p>
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex flex-col items-center">
              <h2 className="md:text-[40px]  text-[30px] font-bold text-[white]">
                {counterOn && (
                  <CountUp start={0} end={15} duration={2} delay={0} />
                )}
                +
              </h2>
              <p className="md:text-[17px] text-center md:font-semibold text-[#E6F1FF]">
                Client Location
              </p>
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex flex-col items-center">
              <h2 className="md:text-[40px] text-[30px] font-bold text-[white]">
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                %
              </h2>
              <p className="md:text-[17px] text-center md:font-semibold text-[#E6F1FF]">
                Patient Satisfaction
              </p>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* --------LOCATION SECTION-------- */}
      <section className="md:px-[80px] px-[20px] md:py-[50px] py-[25px] bg-[#E6F1FF] overflow-hidden">
        <div className="md:px-[500px] px-[60px]">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] text-center font-bold text-[#002570]">
            Providing the best medical services
          </h4>
          <p className="md:text-[17px] pt-[5px] md:font-semibold text-[gray] text-center">
            A doctor is a medical professional who has completed the necessary
            education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:pt-[55px] pt-[40px] md:gap-[40px] gap-[20px]">
          {serviceArr.map((card, index) => (
            <div
              key={index}
              className="border-[2px] border-[white] p-[40px] duration-500 card"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center justify-center">
                <img className="h-[100px]" src={card.image} alt="" />
              </div>
              <div className="md:mt-[10px]">
                <h2 className="md:text-[22px] text-[#002570] font-bold text-center">
                  {card.serviceName}
                </h2>
                <p className="md:text-[17px] capitalize text-[gray] font-semibold pt-[4px] text-center">
                  {card.des}
                </p>
                <div className="flex items-center justify-center w-full pt-[15px]">
                  <button className="h-[45px] w-[45px] flex items-center justify-center rounded-full border-[2px] border-[#002570] text-[#002570] hover:text-white hover:bg-[#002570]">
                    <Link to={"/doctor"}>
                      <BsArrowRight />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --------LOCATION SECTION-------- */}

      {/* --------ABOUT SECTION HERE------- */}
      <About />
      {/* --------ABOUT SECTION CLOSE------- */}

      {/* --------SERVICES SECTION HERE--------- */}
      <section className="md:pt-[50px] bg-[#E6F1FF] overflow-hidden">
        <div className="md:px-[500px]  px-[60px] ">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] text-center font-bold text-[#002570]">
            Our medical services
          </h4>
          <p className="md:text-[17px] md:font-semibold pt-[5px] text-[gray] text-center">
            A doctor is a medical professional who has completed the necessary
            education and training to diagnose,
          </p>
        </div>
        <ServicesList />
      </section>
      {/* --------SERVICES SECTION CLOSE--------- */}

      {/* -----------FEATURE SECTION HERE--------- */}
      <section className="md:px-[80px] px-[20px] md:py-[50px] py-[25px] bg_tast bg-[#E6F1FF] md:flex md:justify-between md:items-center w-full overflow-hidden">
        <div className="md:w-[50%] md:pb-0 pb-[30px]" data-aos="fade-right">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] font-bold text-[#002570] pb-[18px]">
            Get virtual Treatment
          </h4>
          <ul className="md:pb-[20px] pl-[20px]">
            <li className="md:text-[17px] capitalize text-[gray] font-semibold pb-[10px]">
              1.Schedule the appointment directly.
            </li>
            <li className="md:text-[17px] capitalize text-[gray] font-semibold pb-[10px]">
              2.Search for your physician here, and contact ther office.
            </li>
            <li className="md:text-[17px] capitalize text-[gray] font-semibold pb-[10px]">
              2.View our physicians who are accepting new patients. use the
              online scheduling tool to select an appointment time .
            </li>
          </ul>
          <Link to={"/about"}>
            <button className="btnOne md:py-[8px] py-[6px] md:px-[30px] px-[20px]">
              Learn More
            </button>
          </Link>
        </div>

        <div className="md:w-[50%]" data-aos="fade-left">
          <img className="rounded-[30px] w-full" src={therapi} alt="image" />
        </div>
      </section>
      {/* -----------FEATURE SECTION CLOSE--------- */}

      {/* ------OUR GREAT DOCTOR HERE--------- */}
      <section className="md:pt-[50px] pt-[20px] bg-[#E6F1FF]">
        <div className="md:px-[500px] px-[60px] overflow-hidden">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] text-center font-bold text-[#002570]">
            Our great doctor
          </h4>
          <p className="md:text-[17px] pt-[5px] md:font-semibold text-[gray] text-center">
            A doctor is a medical professional who has completed the necessary
            education.
          </p>
        </div>
        <DoctorList />
      </section>
      {/* ------OUR GREAT DOCTOR CLOSE--------- */}

      {/* --------FAQ SECTION--------- */}
      <section className="md:flex md:items-center md:justify-between md:px-[80px] px-[20px] py-[25px] md:py-[50px] bg-[#E6F1FF] bg_tast md:gap-[50px] overflow-hidden">
        <div className="md:w-1/2 md:pb-0 pb-[25px] " data-aos="fade-right">
          <img
            className="rounded-[30px] md:h-[400px] w-full"
            src={faqImg}
            alt="image"
          />
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] font-bold text-[#002570]">
            Most questions by our beloved patients
          </h4>
          <FaqList />
        </div>
      </section>
      {/* --------FAQ SECTION CLOSE--------- */}

      {/* --------TESTIMONIAL--------  */}
      <section className="bg-[#E6F1FF] md:px-[80px] px-[20px] md:py-[50px] py-[25px]">
        <div className="md:px-[400px] px-[60px]">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] text-center font-bold text-[#002570]">
            What our patient say
          </h4>
          <p className="md:text-[17px] pt-[5px] md:font-semibold text-[gray] text-center">
            A doctor is a medical professional who has completed the necessary
            education.
          </p>
        </div>
        <Testimonial />
      </section>
      {/* --------TESTIMONIAL CLOSE--------  */}
    </>
  );
};

export default Home;

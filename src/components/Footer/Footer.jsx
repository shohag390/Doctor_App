import React, { useEffect } from "react";

import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo2.png";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icone: <AiFillYoutube className="w-5 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.facebook.com",
    icone: <FaFacebookF className="w-5 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.instagram.com/",
    icone: <AiFillInstagram className="w-5 h-5 group-hover:text-white" />,
  },
  {
    path: "https://x.com/",
    icone: <FaSquareXTwitter className="w-5 h-5 group-hover:text-white" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "mediic@gmail.com",
  },
  {
    path: "/",
    display: "healthcare-sm29.netlify.app",
  },
  {
    path: "/",
    display: "+1 (767) 234-3658",
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <footer className="bg-[#002570] md:px-[80px] px-[20px] overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 md:pt-[50px] border-b-[2px] pt-[25px] pb-[20px] gap-[20px] md:gap-[40px]">
        <div className="col-span-2 md:col-span-1" data-aos="flip-up">
          <Link to={"./"}>
            <img className="md:h-[50px] h-[30px]" src={logo} alt="" />
          </Link>
          <p className="md:text-[17px] md:font-semibold text-[#E6F1FF] pt-[10px]">
            Health care, or healthcare, is the improvement of health via the
            prevention, diagnosis, treatment, amelioration or cure of disease.
          </p>
        </div>

        <div className="text-[white]" data-aos="flip-up">
          <h4 className="text-[20px] font-bold pb-[15px]">Quick Links</h4>
          <ul className="leading-[35px]">
            {quickLinks01?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#007EFF]" />
                </span>
                <Link
                  className="hover:text-[#007EFF] md:text-[17px] md:font-semibold text-[white]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-[white]" data-aos="flip-up">
          <h4 className="text-[20px] font-bold pb-[15px]">I want to:</h4>
          <ul className="leading-[35px]">
            {quickLinks02?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#007EFF]" />
                </span>
                <Link
                  className="hover:text-[#007EFF] md:text-[17px] md:font-semibold text-[white]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="text-[white] col-span-2 md:col-span-1"
          data-aos="flip-up"
        >
          <h4 className="text-[20px] font-bold pb-[15px]">Support</h4>
          <ul className="leading-[35px]">
            {quickLinks03?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#007EFF]" />
                </span>
                <Link
                  className="hover:text-[#007EFF] md:text-[17px] md:font-semibold text-[white]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="text-[white] text-center py-[20px] md:text-[17px] md:font-semibold">
          Copyright &copy; 2024 Mediic developed by Md Shohag all right
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

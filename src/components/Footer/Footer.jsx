import React from "react";

import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logotop.png";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

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
    display: "Request an appointment",
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
    display: "Donate",
  },
  {
    path: "/",
    display: "Contact Us",
  },
];

const Footer = () => {
  return (
    <footer className="pt-10 pb-16 bg-white">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-[30px]">
          <div>
            <Link className="flex items-center gap-[2px]" to={"/home"}>
              <img className="h-[60px]" src={logo} alt="" />
              <h4 className="text-xl font-extrabold text-irisBlueColor">
                HealtCare
              </h4>
            </Link>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 ">
              Copyright &copy; 2024 developed by Md Shohag all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icone}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

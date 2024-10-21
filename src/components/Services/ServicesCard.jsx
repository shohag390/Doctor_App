import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div
      className="border-2 border-[white] card p-[20px]"
      data-aos="zoom-in-up"
    >
      <h2 className="md:text-[22px] text-[#002570] font-bold">{name}</h2>
      <p className="md:text-[17px] capitalize text-[gray] font-semibold pt-[4px]">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[20px]">
        <button className="h-[45px] w-[45px] flex items-center justify-center rounded-full border-[2px] hover:text-[white] border-[#002570] text-[#002570] hover:bg-[#002570]">
          <Link to={"/doctor"}>
            <BsArrowRight />
          </Link>
        </button>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] service_count"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;

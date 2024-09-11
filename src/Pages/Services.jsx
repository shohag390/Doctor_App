import React from "react";
import { services } from "../assets/data/services";
import ServicesCard from "../components/Services/ServicesCard";

const Services = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[25px] bg-[#E6F1FF]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[40px] gap-[20px]">
        {services.map((item, index) => (
          <ServicesCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;

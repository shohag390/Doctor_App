import React from "react";
import { services } from "../../assets/data/services";
import ServicesCard from "./ServicesCard";

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-[80px] md:pt-[55px] pt-[40px] md:pb-[50px] pb-[25px] px-[20px] md:gap-[40px] gap-[20px]">
      {services.map((item, index) => (
        <ServicesCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default ServicesList;

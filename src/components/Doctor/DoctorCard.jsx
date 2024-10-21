import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const DoctorCard = ({ doctor }) => {
  const { name, specialization, _id, photo } = doctor;
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div data-aos="zoom-in-up">
      <Link
        to={`/doctor/${_id}`}
        className="border-2 border-[white] card rounded-[30px] w-full p-[10px] flex flex-col justify-center"
      >
        <div>
          <img
            src={photo}
            className="w-full h-[240px] rounded-[22px]"
            alt="image"
          />
        </div>
        <div className="pt-[10px]">
          <p className="md:text-[17px] md:font-semibold text-[gray] uppercase text-center">
            {specialization}
          </p>
          <h2 className="font-bold text-center text-[20px] text-[#002570]">
            {name}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default DoctorCard;

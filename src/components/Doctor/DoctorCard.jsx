import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { name, specialization, _id, photo } = doctor;

  return (
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
  );
};

export default DoctorCard;

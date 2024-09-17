import React from "react";
import convertTime from "../../utils/convertTime.js";
import { Link } from "react-router-dom";

const DoctorSidePanel = ({ ticketPrice, timeSlots, doctorId }) => {
  return (
    <div className="p-[30px] card rounded-[30px]">
      <div className="flex items-center justify-between">
        <p className="md:text-[20px] md:font-bold text-[#002570]">
          Ticket Price
        </p>
        <span className="md:text-[20px] md:font-bold text-[#002570]">
          {ticketPrice} BDT
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text-[#002570] md:text-[17px] md:font-semibold">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="md:text-[17px] md:font-semibold text-[gray]">
                {item?.day.charAt(0).toUpperCase() + item?.day.slice(1)}
              </p>
              <p className="md:text-[17px] md:font-semibold text-[gray]">
                {convertTime(item?.startingTime)} -{" "}
                {convertTime(item?.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/checkout/${doctorId}`}>
        <button className="w-full py-[10px] mt-[5px] rounded-md btnOne">
          Appointment
        </button>
      </Link>
    </div>
  );
};

export default DoctorSidePanel;

import React from "react";
import convertTime from "../../utils/convertTime.js";
import { BASE_URL, token } from "../../config.js";
import { toast } from "react-toastify";

const DoctorSidePanel = ({ ticketPrice, doctorId, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

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
      <button
        onClick={bookingHandler}
        className="w-full py-[10px] mt-[5px] rounded-md btnOne"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorSidePanel;

import React from "react";
import { IoMdCloudDone } from "react-icons/io";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-[#E6F1FF] md:h-[90vh] md:py-0 py-[25px] md:flex md:items-center md:justify-center">
      <div className="card p-[30px] md:w-[40%] flex flex-col items-center ">
        <IoMdCloudDone className="text-[#002570] text-[50px]" />
        <div className="text-center">
          <h3 className="text-[#002570] text-[25px] font-bold">
            Payment Done !
          </h3>
          <p className="md:text-[17px] md:font-semibold text-[gray] ">
            Thank you for completing your secure online payment
          </p>
          <p className="md:text-[17px] md:font-semibold text-[gray] ">
            Have a great day !
          </p>
          <div className="pt-[20px] text-center">
            <button className="md:px-[30px] px-[20px] md:py-[10px] py-[8px] btnOne">
              <Link to={"/home"}>Go Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

import React from "react";
import { IoMdCloudDone } from "react-icons/io";
import { Link } from "react-router-dom";

const NotPage = () => {
  return (
    <div className="bg-[#E6F1FF] md:h-[90vh] md:px-0 px-[20px] md:py-0 py-[25px] md:flex md:items-center md:justify-center">
      <div className="card p-[30px] md:w-[40%] flex flex-col items-center ">
        <p className="font-bold md:text-[45px] text-[30px] leading-[30px]  md:leading-[40px] text-center text-[red] ">
          404
        </p>
        <div className="text-center">
          <h3 className="text-[#002570] text-[25px] font-bold">
            Page Not Found !
          </h3>
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

export default NotPage;

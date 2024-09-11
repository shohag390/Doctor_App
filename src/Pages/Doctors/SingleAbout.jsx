import React from "react";
import { formatDate } from "../../utils/formatDate";

const SingleAbout = ({ doctor }) => {
  const { name, about, qualifications, experiences } = doctor;

  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-[#002570] font-semibold flex items-center gap-2">
          About of
          <span className="text-[#007EFF] font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="md:text-[17px] md:font-semibold text-[gray] md:pb-[35px] pb-[20px]">
          {about}
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-[#002570] font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-[#007EFF] text-[15px] leading-6 font-semibold">
                  {formatDate(item?.startingDate)} -
                  {formatDate(item?.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-[gray]">
                  {item?.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-[gray]">
                {item?.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-[#002570] font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.map((item, index) => (
            <li key={index} className="p-4 rounded card">
              <span className="text-[#007EFF] text-[15px] leading-6 font-semibold">
                {formatDate(item?.startingDate)} -{" "}
                {formatDate(item?.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-semibold text-[gray]">
                {item?.position}
              </p>
              <p className="text-[14px] leading-5 font-semibold text-[gray]">
                {item?.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleAbout;

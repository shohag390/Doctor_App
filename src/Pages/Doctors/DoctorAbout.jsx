import React from "react";
import { formatDate } from "../../utils/formatDate";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";

const DoctorAbout = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  return (
    <>
      {loading && !error && <Loader />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div>
          <div>
            <h3 className="text-[20px] leading-[30px] text-[#002570] font-semibold">
              <span> About of</span> {""}
              <span className="text-[#007EFF] font-bold text-[24px] leading-9">
                {data?.name}
              </span>
            </h3>
            <p className="md:text-[17px] md:font-semibold text-[gray] md:pb-[35px] pb-[20px]">
              {data?.about}
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-[#002570] font-semibold">
              Education
            </h3>
            <ul className="pt-4 md:p-5">
              {data?.qualifications?.map((item, index) => (
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
              {data?.experiences?.map((item, index) => (
                <li key={index} className="p-4 rounded card">
                  <span className="text-[#007EFF] text-[15px] leading-6 font-semibold">
                    {formatDate(item?.startingDate)} -{" "}
                    {formatDate(item?.endingDate)}
                  </span>
                  <p className="text-[16px] leading-6 font-semibold text-[gray]">
                    {item?.position}
                  </p>
                  <p className="text-[16px] leading-6 font-semibold text-[gray]">
                    {item?.hospital}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorAbout;

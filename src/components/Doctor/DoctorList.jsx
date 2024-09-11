import React from "react";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-4 md:px-[80px] md:pt-[55px] pt-[40px] md:pb-[50px] pb-[25px] px-[20px] md:gap-[40px] gap-[20px]">
          {doctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;

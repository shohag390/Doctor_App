import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/Doctor/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointment`);
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center text-[gray] text-[20px] font-semibold ">
          You did not book any doctor yet
        </h2>
      )}
    </div>
  );
};

export default MyBookings;

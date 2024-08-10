import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctor/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctor = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              placeholder="Search Doctor"
              className="w-full py-4 pl-4 pr-2 bg-transparent focus:outline-none placeholder:text-textColor"
            />
            <button className="mt-0 btn rounded-r-md rounded-l-[0px] border-[2px] border-primaryColor">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">What our patient say</h2>
            <p className="text-center text_para">
              World-class care for everyone . Our health System offers unmatched
              , expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctor;

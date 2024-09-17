import React from "react";
import { formatDate } from "../../utils/formatDate";

const Appointment = ({ appointments, loading, error }) => {
  return (
    <>
      <section className="hidden w-full md:flex md:flex-col">
        <div className="w-full bg-gray-50 md:flex md:justify-between md:items-center md:py-[8px] px-[20px]">
          <h4 className="w-[40%] flex items-center justify-start">Name</h4>
          <h4 className="w-[10%] flex items-center justify-center">Gender</h4>
          <h4 className="w-[15%] flex items-center justify-center">Payment</h4>
          <h4 className="w-[10%] flex items-center justify-center">Price</h4>
          <h4 className="w-[25%] flex items-center justify-end">Booked on</h4>
        </div>
        <div className="w-full">
          {appointments?.map((item) => (
            <div
              className="w-full md:flex md:justify-between md:items-center md:py-[8px] px-[20px]"
              key={item?._id}
            >
              <div className="w-[40%] flex items-center justify-start">
                <img
                  src={item?.user.photo}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {item?.user.name}
                  </div>
                  <div className="text-gray-500 text-normal">
                    {item?.user.email}
                  </div>
                </div>
              </div>

              <p className="w-[10%] flex items-center justify-center">
                {item?.user.gender}
              </p>

              <p className="w-[15%] flex items-center justify-center">
                {item?.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    <span>Paid</span>
                  </div>
                )}
                {!item?.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    <span>Unpaid</span>
                  </div>
                )}
              </p>

              <p className="w-[10%] flex items-center justify-center">
                {item?.ticketPrice}
              </p>

              <p className="w-[25%] flex items-center justify-end">
                {formatDate(item?.createdAt)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="md:hidden">
        {!loading && !error && appointments.length === 0 && (
          <h2 className="text-center text-[#002570] text-[20px] pb-[20px] font-semibold ">
            Your Appointment!
          </h2>
        )}

        {loading && !error && <Loading />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-[20px]">
            {appointments?.map((item) => (
              <div key={item?._id} className="card p-[10px]">
                <img
                  src={item?.user.photo}
                  className="w-full rounded-[20px] h-[250px]"
                  alt=""
                />
                <h4 className="font-semibold text-[#002570] text-[20px] pt-[8px]">
                  {item?.user.name}
                </h4>
                <p className="text-[gray] font-semibold text-[17px] pb-[5px]">
                  {item?.user.email}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[gray] font-semibold text-[17px] pb-[5px]">
                    {item?.isPaid && (
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                        <span>Paid</span>
                      </div>
                    )}
                    {!item?.isPaid && (
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                        <span>Unpaid</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold text-[#007eff]">
                      BDT {item?.ticketPrice}
                    </p>
                  </div>
                </div>
                <p className="text-[#007eff] font-semibold text-[17px] pb-[5px]">
                  {formatDate(item?.createdAt)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Appointment;

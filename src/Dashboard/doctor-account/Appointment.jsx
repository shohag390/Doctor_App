import React from "react";
import { formatDate } from "../../utils/formatDate";

const Appointment = ({ appointment }) => {
  return (
    <>
      <table className="hidden w-full text-sm text-left text-gray-500 md:block">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" scope="col">
              Name
            </th>
            <th className="px-6 py-3" scope="col">
              Gender
            </th>
            <th className="px-6 py-3" scope="col">
              Payment
            </th>
            <th className="px-6 py-3" scope="col">
              Price
            </th>
            <th className="px-6 py-3" scope="col">
              Booked on
            </th>
          </tr>
        </thead>
        <tbody>
          {appointment?.map((item) => (
            <tr key={item?._id}>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
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
              </th>
              <td className="px-6 py-4">{item?.user.gender}</td>
              <td className="px-6 py-4">
                {item?.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    <span>Paid</span>
                  </div>
                )}
                {!item?.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2">
                      Unpaid
                    </div>
                    <span>Unpaid</span>
                  </div>
                )}
              </td>
              <td className="px-6 py-4">{item?.ticketPrice}</td>
              <td className="px-6 py-4">{formatDate(item?.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md:hidden">
        {appointment?.map((item) => (
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
                  <p className="flex items-center">
                    <p className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2">
                      Unpaid
                    </p>
                    <span>Unpaid</span>
                  </p>
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
    </>
  );
};

export default Appointment;

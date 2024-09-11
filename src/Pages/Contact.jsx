import React from "react";
import { useForm } from "@formspree/react";
import { IoMdCloudDone } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnarwpn");

  if (state.succeeded) {
    return (
      <div className="bg-[#E6F1FF] md:h-[90vh]  md:py-0 py-[25px] md:flex md:items-center md:justify-center">
        <div className="card p-[30px] md:w-[40%] flex flex-col items-center ">
          <IoMdCloudDone className="text-[#002570] text-[50px]" />
          <div className="text-center">
            <h3 className="text-[#002570] text-[25px] font-bold">
              Message Sent !
            </h3>
            <p className="md:text-[17px] md:font-semibold text-[gray] ">
              Thank you for Contacts us .
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
  }

  return (
    <section className="h-full md:px-[80px] py-[25px] px-[20px] md:flex md:justify-end contact_bg w-full bg-[#e6f1ff7c] md:py-[50px]">
      <div className="md:w-1/2">
        <h4 className="text-[30px] font-bold text-[#002570]">
          Online Support Here
        </h4>
        <p className="md:text-[17px] md:font-semibold text-[gray] md:pb-[35px] pb-[20px]">
          Health care, or healthcare, is the improvement of health via the
          prevention, diagnosis, treatment
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[20px]">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            />
          </div>
          <div className="flex items-center gap-[20px]">
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            />

            <input
              type="phone"
              name="phone"
              placeholder="Phone*"
              className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            />
          </div>
          <div className="">
            <textarea
              rows={6}
              name="message"
              placeholder="Subject*"
              className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            />
          </div>
          <button type="submit" className="btnOne w-[200px] py-[10px]">
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

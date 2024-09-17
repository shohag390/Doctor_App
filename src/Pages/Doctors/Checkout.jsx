import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";

const Checkout = () => {
  const { id } = useParams();
  const [load, setLoad] = useState(false);

  const {
    data: doctor,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/doctors/${id}`);

  const [formData, setFormData] = useState({
    subject: "",
    ticketPrice: doctor?.ticketPrice,
    date: "",
    time: "",
    message: "",
  });

  console.log(formData);

  useEffect(() => {
    setFormData({
      subject: doctor?.subject || "",
      ticketPrice: doctor?.ticketPrice || "",
      date: doctor?.date || "",
      time: doctor?.time || "",
      message: doctor?.message || "",
    });
  }, [doctor]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitAppointment = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const res = await fetch(`${BASE_URL}/booking/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      setLoad(false);
      toast.success(result.message);
      setFormData({
        subject: "",
        ticketPrice: doctor?.ticketPrice || "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      toast.error(err.message);
      setLoad(false);
    }
  };

  return (
    <section className="md:h-[90vh] md:py-0 py-[25px] md:px-[80px] px-[20px] bg-[#E6F1FF] md:flex md:items-center md:justify-center w-full">
      {loading && !error && <Loading />}
      {error && !loading && <Error />}

      {!loading && !error && (
        <div className="md:flex md:h-[80vh] w-full md:gap-[40px]">
          <div className="md:h-[80vh] md:w-[30%] card md:p-[30px] p-[20px] md:flex md:flex-col items-center md:justify-center md:gap-[20px] gap-[10px] hidden">
            <img
              className="h-[330px] rounded-[20px] w-full"
              src={doctor?.photo}
              alt="image"
            />
            <div className="text-center">
              <h4 className="text-[20px] font-bold text-[#002570]">
                {doctor?.name}
              </h4>
              <p className="md:text-[17px] md:font-semibold text-[gray]">
                {doctor?.email}
              </p>
              <p className="md:text-[17px] md:font-semibold text-[gray]">
                {doctor?.phone}
              </p>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="h-[40px] w-[40px] bg-[#007EFF] text-white flex items-center justify-center rounded-full hover:bg-[#002570] hover:translate-y-[-5px] duration-500">
                <FaFacebookF className="text-[20px]" />
              </div>
              <div className="h-[40px] w-[40px] bg-[#007EFF] text-white flex items-center justify-center rounded-full hover:bg-[#002570] hover:translate-y-[-5px] duration-500">
                <RiInstagramFill className="text-[20px]" />
              </div>
              <div className="h-[40px] w-[40px] bg-[#007EFF] text-white flex items-center justify-center rounded-full hover:bg-[#002570] hover:translate-y-[-5px] duration-500">
                <FaLinkedinIn className="text-[20px]" />
              </div>
            </div>
          </div>
          <div className="md:h-[80vh] md:w-[70%] card p-[20px] md:p-[30px] md:overflow-hidden">
            <form
              onSubmit={handleSubmitAppointment}
              className="w-full md:pr-[20px] md:py-[2px] md:pl-[2px] md:mb-[30px] md:h-[70vh] md:overflow-y-scroll flex flex-col gap-[10px]"
            >
              <div className="flex flex-col gap-[5px]">
                <label className="font-bold text-[#002570]">Subject</label>
                <input
                  type="text"
                  className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col gap-[5px]">
                <label className="font-bold text-[#002570]">
                  Ticket Price :
                </label>
                <input
                  type="number"
                  className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                  name="ticketPrice"
                  readOnly
                  value={formData?.ticketPrice || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-between gap-[20px]">
                <div className="flex flex-col gap-[5px] w-1/2">
                  <label className="font-bold text-[#002570]" htmlFor="">
                    Day :
                  </label>
                  <div>
                    <select
                      name="date"
                      onChange={handleInputChange}
                      value={formData.date || ""}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    >
                      <option className="capitalize" value="">
                        select
                      </option>
                      {doctor.timeSlots?.map((item, index) => (
                        <option
                          className="capitalize"
                          value={item?.day}
                          key={index}
                        >
                          {item?.day}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-[5px] w-1/2">
                  <label className="font-bold text-[#002570]">Time :</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time || ""}
                    onChange={handleInputChange}
                    className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[5px]">
                <label className="font-bold text-[#002570]">Message :</label>
                <textarea
                  className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                  rows={3}
                  name="message"
                  value={formData.message || ""}
                  onChange={handleInputChange}
                  placeholder="message"
                ></textarea>
              </div>
              <div className="pt-[20px]">
                <button
                  type="submit"
                  disabled={loading && true}
                  className="btnOne w-full py-[10px]"
                >
                  {load ? (
                    <HashLoader size={18} color="#ffffff" />
                  ) : (
                    "Submit Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;

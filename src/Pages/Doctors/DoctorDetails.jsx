import { useEffect, useState } from "react";
import starIcone from "../../assets/images/Star.png";
import DoctorFeedback from "./DoctorFeedback";
// import DoctorSidePanel from "./DoctorSidePanel";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import SingleAbout from "./SingleAbout";
import DoctorSidePanel from "./DoctorSidePanel";
import AOS from "aos";
import "aos/dist/aos.css";

const DoctorDetails = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("about");

  const {
    data: doctor,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/doctors/${id}`);

  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);

  return (
    <section className="bg-[#E6F1FF] md:py-[50px] py-[25px] md:px-[80px] px-[20px] w-full">
      {loading && !error && <Loading />}
      {error && !loading && <Error />}
      {!loading && !error && (
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2" data-aos="fade-right">
            <div className="md:flex md:items-center md:gap-5">
              <figure className="md:w-[30%] md:h-[250px] md:pb-0 pb-[30px] h-[280px] w-full">
                <img
                  src={doctor?.photo}
                  alt="image"
                  className="w-full h-full md:rounded-none rounded-[30px]"
                />
              </figure>
              <div className="md:w-[70%]">
                <span className="bg-[#0080ff77] text-[white] py-[8px] px-[20px] text-[14px] md:text-[18px] font-semibold rounded-[30px]">
                  {doctor?.specialization}
                </span>
                <h4 className="font-bold text-[#002570] md:text-[25px] text-[20px] md:pb-0 pb-[8px] pt-[10px]">
                  {doctor?.name}
                </h4>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px]">
                    <img src={starIcone} alt="icone" />
                    <span className="md:text-[17px] md:font-semibold text-[gray]">
                      ({Number(doctor?.averageRating).toFixed(1)})
                    </span>
                  </span>
                  <span className="md:text-[17px] md:font-semibold text-[gray]">
                    ({doctor?.totalRating})
                  </span>
                </div>

                <p className="md:text-[17px] md:font-semibold text-[gray] md:pb-[35px] pb-[20px]">
                  {doctor?.bio}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b-[1px] border-[#007EFF]"
                } py-2 px-5 mr-5 text-[17px] leading-7 text-[gray] font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "border-b-[1px] border-[#007EFF]"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-[gray] font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <SingleAbout doctor={doctor} />}
              {tab === "feedback" && (
                <DoctorFeedback
                  reviews={doctor?.reviews}
                  totalRating={doctor?.totalRating}
                />
              )}
            </div>
          </div>

          <div data-aos="fade-left">
            <DoctorSidePanel
              doctorId={doctor?._id}
              ticketPrice={doctor?.ticketPrice}
              timeSlots={doctor?.timeSlots}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorDetails;

import { useState } from "react";
import starIcone from "../../assets/images/Star.png";
import DoctorFeedback from "./DoctorFeedback";
import DoctorSidePanel from "./DoctorSidePanel";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import SingleAbout from "./SingleAbout";

const DoctorDetails = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("about");

  const {
    data: doctor,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/doctors/${id}`);

  return (
    <section>
      {loading && !error && <Loading />}
      {error && !loading && <Error />}

      {!loading && !error && (
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="w-[200px] h-[200px]">
                  <img
                    src={doctor?.photo}
                    alt="image"
                    className="w-full h-full"
                  />
                </figure>
                <div>
                  <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {doctor?.specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {doctor?.name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px]">
                      <img src={starIcone} alt="icone" />(
                      {Number(doctor?.averageRating).toFixed(1)})
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({doctor?.totalRating})
                    </span>
                  </div>

                  <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {doctor?.bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
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

            <div>
              <DoctorSidePanel />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorDetails;

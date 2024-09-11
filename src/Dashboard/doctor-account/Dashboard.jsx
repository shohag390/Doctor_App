import { useState } from "react";
import Loader from "../../components/Loader/Loading";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import Tabs from "./Tabs.jsx";
import starIcone from "../../assets/images/Star.png";
import DoctorAbout from "../../Pages/Doctors/DoctorAbout.jsx";
import Profile from "./Profile.jsx";
import Appointment from "./Appointment.jsx";
import { CgProfile } from "react-icons/cg";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IoSettings } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/doctors/profile/me");
  };

  const [tab, setTab] = useState("overview");

  return (
    <section className="md:h-[90vh] md:py-0 py-[25px] md:px-[80px] px-[20px] bg-[#E6F1FF] md:flex md:items-center md:justify-center w-full">
      {loading && !error && <Loader />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="md:flex md:h-[80vh] w-full md:gap-[40px]">
          <div className="md:h-[80vh] md:w-[30%] card md:p-[30px] p-[20px] md:flex md:flex-col items-center md:justify-center md:gap-[20px] gap-[10px] hidden">
            {/* Profile Image  */}
            <div>
              <img
                className="h-[150px] w-[150px] border-2"
                src={data?.photo}
                alt=""
              />
              <h4 className="font-bold pt-[2px] text-center text-[18px] capitalize text-[#002570]">
                {data?.name}
              </h4>
            </div>

            {/* Button Here  */}
            <Tabs tab={tab} setTab={setTab} />
          </div>
          <div className="md:hidden h-[10vh] flex items-center justify-center w-full px-[20px] card mb-[20px]">
            <div className="flex items-center w-full justify-between gap-[20px]">
              <button
                onClick={() => setTab("overview")}
                className={`${
                  tab === "overview" ? "bg-[#002570]" : "bg-[#007eff]"
                } h-[6vh] w-full text-white rounded-[30px] flex items-center justify-center`}
              >
                <CgProfile className="text-[22px] " />
              </button>
              <button
                onClick={() => setTab("appointements")}
                className={`${
                  tab === "appointements" ? "bg-[#002570]" : "bg-[#007eff]"
                } h-[6vh] w-full text-white rounded-[30px] flex items-center justify-center`}
              >
                <SlEnvolopeLetter className="text-[22px] " />
              </button>
              <button
                onClick={() => setTab("setting")}
                className={`${
                  tab === "setting" ? "bg-[#002570]" : "bg-[#007eff]"
                } h-[6vh] w-full text-white rounded-[30px] flex items-center justify-center`}
              >
                <IoSettings className="text-[22px] " />
              </button>
              <button
                onClick={handleLogout}
                className="h-[6vh] w-full text-white bg-[#007eff] rounded-[30px] flex items-center justify-center"
              >
                <FiLogOut className="text-[22px]" />
              </button>
              <button className="h-[6vh] w-full bg-[#007eff] rounded-[30px] flex items-center justify-center">
                <AiFillDelete className="text-[22px] text-[#ea0000da]" />
              </button>
            </div>
          </div>
          <div className="md:h-[80vh] md:w-[70%] card p-[20px] md:p-[30px] md:overflow-hidden">
            <div className="w-full md:pr-[20px] md:py-[2px] md:pl-[2px] md:mb-[30px] md:h-[70vh] md:overflow-y-scroll">
              {tab === "overview" && (
                <div>
                  <div className="gap-4 mb-10 md:flex md:items-center">
                    <figure className="md:h-[200px] md:w-[250px] h-[250px] w-full md:pb-0 pb-[20px]">
                      <img className="w-full h-full" src={data?.photo} alt="" />
                    </figure>
                    <div>
                      <span className="bg-[#0080ff77] text-[white] py-[8px] px-[20px] text-[14px] md:text-[18px] font-semibold rounded-[30px]">
                        {data.specialization}
                      </span>
                      <h3 className="font-bold text-[#002570] md:text-[25px] text-[20px] md:pb-0 pb-[8px] pt-[10px]">
                        {data.name}
                      </h3>
                      <div className="flex items-center gap-[6px]">
                        <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                          <img src={starIcone} alt="" />{" "}
                          <span className="md:text-[17px] md:font-semibold text-[gray]">
                            ({Number(data?.averageRating).toFixed(1)})
                          </span>
                        </span>
                        <span className="md:text-[17px] md:font-semibold text-[gray]">
                          ({data?.totalRating})
                        </span>
                      </div>
                      <p className="md:text-[17px] md:font-semibold text-[gray] md:pb-[35px] pb-[20px]">
                        {data?.bio}
                      </p>
                    </div>
                  </div>
                  <DoctorAbout
                    name={data?.name}
                    about={data?.about}
                    qualifications={data?.qualifications}
                    experiences={data?.experiences}
                  />
                </div>
              )}

              {tab === "appointements" && (
                <Appointment appointment={data?.appointments} />
              )}
              {tab === "setting" && <Profile doctorData={data} />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;

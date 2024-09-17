import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import ProfileSetting from "./ProfileSetting";
import userGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/doctors/profile/me");
  };

  // SERVER ROUTE
  const {
    data: userData,
    loading,
    error,
  } = userGetProfile(`${BASE_URL}/users/profile/me`);
  console.log(userData.appointments);

  const headingLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section className="md:h-[90vh] md:py-0 py-[25px] md:px-[80px] px-[20px] bg-[#E6F1FF] md:flex md:items-center md:justify-center w-full">
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="md:flex md:h-[80vh] w-full md:gap-[40px]">
          <div className="md:h-[80vh] md:w-[30%] card md:p-[30px] p-[20px] md:flex md:flex-col items-center md:justify-center md:gap-[20px] gap-[10px] hidden">
            {/* Profile Image  */}
            <div>
              <img
                className="h-[190px] w-[200px] border-2"
                src={userData.photo}
                alt=""
              />
              <h4 className="font-bold pt-[2px] text-center text-[18px] uppercase text-[#002570]">
                {userData.name}
              </h4>
              <p className="md:text-[17px] md:font-semibold text-[gray] text-center">
                {" "}
                Blood Type: {userData.bloodType}
              </p>
            </div>

            {/* Button Here  */}
            <div className="flex flex-col justify-center w-full gap-[10px]">
              <button
                onClick={() => setTab("bookings")}
                className={`${
                  tab === "bookings"
                    ? "bg-[#002570] space_letter rounded-[30px] text-white"
                    : "btnOne"
                } w-full py-[10px] `}
              >
                My Booking
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab === "settings"
                    ? "bg-[#002570] space_letter rounded-[30px] text-white"
                    : "btnOne"
                } w-full py-[10px] `}
              >
                Profile Setting
              </button>
              <button
                onClick={headingLogout}
                className="btnOne w-full py-[10px]"
              >
                Logout
              </button>
              <button className="btnOne w-full py-[10px]">Delete</button>
            </div>
          </div>

          {/* Responsive Btn  */}
          <div className="md:hidden h-[10vh] flex items-center justify-center w-full px-[20px] card mb-[20px]">
            <div className="flex items-center w-full justify-between gap-[20px]">
              <button
                onClick={() => setTab("bookings")}
                className={`${
                  tab === "bookings" ? "bg-[#002570]" : "bg-[#007eff]"
                } h-[6vh] w-full text-white rounded-[30px] flex items-center justify-center`}
              >
                <SlEnvolopeLetter className="text-[22px] " />
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab === "settings" ? "bg-[#002570]" : "bg-[#007eff]"
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

          {/* RIGHT SITE HERE  */}
          <div className="md:h-[80vh] md:w-[70%] card p-[20px] md:p-[30px] md:overflow-hidden">
            <div className="w-full md:pr-[20px] md:py-[2px] md:pl-[2px] md:mb-[30px] md:h-[70vh] md:overflow-y-scroll">
              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <ProfileSetting user={userData} />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyAccount;

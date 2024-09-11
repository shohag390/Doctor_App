import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/doctors/profile/me");
  };

  return (
    <div className="flex flex-col justify-center w-full gap-[10px]">
      <button
        onClick={() => setTab("overview")}
        className={`${
          tab === "overview"
            ? "bg-[#002570] space_letter rounded-[30px] text-white"
            : "btnOne"
        } w-full py-[10px] `}
      >
        Overview
      </button>
      <button
        onClick={() => setTab("appointements")}
        className={`${
          tab === "appointements"
            ? "bg-[#002570] space_letter rounded-[30px] text-white"
            : "btnOne"
        } w-full py-[10px]`}
      >
        Appointements
      </button>
      <button
        onClick={() => setTab("setting")}
        className={`${
          tab === "setting"
            ? "bg-[#002570] space_letter rounded-[30px] text-white"
            : "btnOne"
        } w-full py-[10px]`}
      >
        Profile
      </button>

      <button onClick={handleLogout} className="w-full btnOne py-[10px]">
        Logout
      </button>
      <button className="w-full btnOne py-[10px]">Delete</button>
    </div>
  );
};

export default Tabs;

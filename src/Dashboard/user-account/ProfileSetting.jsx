import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfileSetting = ({ user }) => {
  const [selectFile, setSelectFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (err) {
      toast.err(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);

  return (
    <div className="mt-[20px]">
      <form onSubmit={submitHandler}>
        <div className="mb-[15px]">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            data-aos="flip-up"
          />
        </div>
        <div className="mb-[15px]">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            aria-readonly
            readOnly
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            data-aos="flip-up"
          />
        </div>
        <div className="mb-[15px]">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password || ""}
            onChange={handleInputChange}
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            data-aos="flip-up"
          />
        </div>
        <div className="mb-[15px]">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType || ""}
            onChange={handleInputChange}
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            data-aos="flip-up"
          />
        </div>

        <div className="flex items-center justify-between mb-5">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gender:
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleInputChange}
              className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
              data-aos="flip-up"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="flex items-center gap-3 mb-5">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo || null}
                className="w-full h-full rounded-full"
                alt="image"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg,.png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              data-aos="flip-up"
            >
              {selectFile ? selectFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="btnOne w-full py-[10px]"
            data-aos="flip-up"
          >
            {loading ? <HashLoader size={18} color="#ffffff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;

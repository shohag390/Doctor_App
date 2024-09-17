import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import signup from "../assets/image/signup.png";

const Signup = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectFile,
    gender: "",
    role: "patient",
  });

  console.log(formData);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.err(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="md:px-[80px] px-[20px] w-full md:h-[90vh] flex items-center justify-center py-[25px] bg-[#E6F1FF]">
      <div className="md:w-[90%] w-full md:h-[80vh] md:flex card">
        <div className="w-[50%] md:block hidden">
          <img className="rounded-l-[28px] h-full" src={signup} alt="" />
        </div>
        <div className="md:w-[50%] md:flex items-center justify-center">
          <form
            onSubmit={submitHandler}
            className="w-full p-[20px] md:px-[60px]"
          >
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                required
              />
            </div>

            <div className="flex items-center gap-[20px] justify-between mb-5">
              <label
                className="md:text-[17px] md:font-semibold text-[gray]"
                htmlFor=""
              >
                Are you a:
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </label>

              <label
                className="md:text-[17px] md:font-semibold text-[gray]"
                htmlFor=""
              >
                Gender:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <div className="flex items-center gap-3 mb-5">
              {selectFile && (
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={previewURL}
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
                >
                  Upload Photo
                </label>
              </div>
            </div>

            <div className="mt-7">
              <button
                disabled={loading && true}
                type="submit"
                className="btnOne w-full py-[10px]"
              >
                {loading ? <HashLoader size={18} color="#ffffff" /> : "Sign Up"}
              </button>
            </div>
            <p className="mt-5 text-center md:text-[17px] md:font-semibold text-[gray]">
              Already have an account ?
              <Link to={"/login"} className="ml-1 font-medium text-[#007EFF]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;

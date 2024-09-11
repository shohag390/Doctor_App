import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";
import image from "../assets/image/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="md:px-[80px] px-[20px] w-full md:h-[90vh] flex items-center justify-center py-[25px] bg-[#E6F1FF]">
      <div className="md:w-[80%] w-full md:h-[75vh] md:flex card">
        <div className="w-[50%] md:block hidden">
          <img className="rounded-l-[28px] h-full" src={image} alt="" />
        </div>
        <div className="md:w-[50%] md:flex items-center justify-center">
          <form
            onSubmit={submitHandler}
            className="w-full p-[20px] md:px-[60px]"
          >
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
              />
            </div>

            <div className="mt-7">
              <button type="submit" className="btnOne py-[10px] w-full">
                {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
              </button>
            </div>
            <p className="mt-5 text-center md:text-[17px] md:font-semibold text-[gray]">
              Don&apos;t have an account ? {""}
              <Link
                to={"/register"}
                className="ml-1 font-medium text-[#007EFF]"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

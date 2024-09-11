import { useRef, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../../assets/image/logo1.png";
import logo2 from "../../assets/image/logo2.png";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { IoClose } from "react-icons/io5";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isopen, setIsOpen] = useState(false);

  const { user, role, token } = useContext(authContext);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`${
        navbar ? "bg-[#002570]" : "bg-[#E6F1FF]"
      } sticky top-0 left-0 z-50 md:h-[10vh] h-[8vh] md:px-[80px] px-[20px] flex justify-between items-center w-full shadow-md duration-500`}
    >
      {/* -------LOGO HERE-------- */}

      <Link to={"/home"}>
        <img
          className={`${navbar ? "hidden" : "block"} md:h-[50px] h-[30px]`}
          src={logo1}
          alt="logo"
        />
        <img
          className={`${navbar ? "block" : "hidden"} md:h-[50px] h-[30px]`}
          src={logo2}
          alt="logo"
        />
      </Link>

      {/* -------LOGO CLOSE-------- */}

      {/* -------MENU HERE-------- */}

      <ul className="md:flex md:items-center md:gap-[40px] hidden">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`${
              navbar ? "text-[white]" : "text-[#002570]"
            } font-bold`}
          >
            <NavLink
              className={(navClass) =>
                navClass.isActive ? "text-[#007EFF]" : "hover:text-[#007EFF]"
              }
              to={link.path}
            >
              {link.display}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul
        className={`md:hidden absolute h-[92vh] w-full flex flex-col gap-[30px] ${
          navbar ? "bg-[#002570]" : "bg-[#E6F1FF]"
        } items-center top-[8vh] justify-center duration-500 ${
          !isopen ? "left-[-100%] " : "left-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`${
              navbar ? "text-[white]" : "text-[#002570]"
            } font-bold`}
          >
            <NavLink
              onClick={() => setIsOpen(!isopen)}
              className={(navClass) =>
                navClass.isActive ? "text-[#007EFF]" : "hover:text-[#007EFF]"
              }
              to={link.path}
            >
              {link.display}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* -------MENU CLOSE-------- */}

      {/* -------MENU RIGHT HERE-------- */}

      <div className="flex items-center gap-4">
        {token && user ? (
          <div className="">
            <Link
              to={`${
                role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"
              }`}
            >
              <figure
                className={`${
                  navbar ? "border-[white]" : "border-[#002570]"
                } md:w-[45px] border-2  md:h-[45px] h-[38px] w-[38px] rounded-full cursor-pointer`}
              >
                <img
                  className="w-full h-full rounded-full"
                  src={user.photo}
                  alt="image"
                />
              </figure>
            </Link>
          </div>
        ) : (
          <Link to={"/login"}>
            <button
              className={`${
                navbar
                  ? "btnOne md:py-[8px] py-[6px] md:px-[30px] px-[20px]"
                  : "btnTwo md:py-[8px] py-[6px] md:px-[30px] px-[20px]"
              }`}
            >
              Login
            </button>
          </Link>
        )}

        <button
          className={`${navbar ? "text-[white]" : "text-[#002570]"} md:hidden`}
          onClick={() => setIsOpen(!isopen)}
        >
          {!isopen ? (
            <BiMenu className="h-[36px] w-[36px]" />
          ) : (
            <IoClose className="h-[36px] w-[36px]" />
          )}
        </button>
      </div>
      {/* -------MENU RIGHT CLOSE-------- */}
    </header>
  );
};

export default Header;

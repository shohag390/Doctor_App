import { useEffect, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logotop.png";
// import user_logo from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

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
  // const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="sticky top-0 left-0 z-50 flex items-center bg-white header">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* -------LOGO HERE-------- */}

          <Link className="flex items-center gap-[2px]" to={"/home"}>
            <img className="h-[60px]" src={logo} alt="" />
            <h4 className="text-xl font-extrabold text-irisBlueColor">
              HealtCare
            </h4>
          </Link>

          {/* -------LOGO CLOSE-------- */}

          {/* -------MENU HERE-------- */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                    }
                    to={link.path}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* -------MENU CLOSE-------- */}

          {/* -------MENU RIGHT HERE-------- */}

          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="">
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      className="w-full h-full rounded-full"
                      src={user.photo}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="bg-primaryColor py-2 px-6 text-[white] font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
          {/* -------MENU RIGHT CLOSE-------- */}
        </div>
      </div>
    </header>
  );
};

export default Header;

import "../../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="main_navbar_parent_container">
      <div className="main_navbar_inner_container navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                    : "font-bold text-[#444444]"
                }
              >
                <li>
                  <a> Home </a>
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                    : "font-bold text-[#444444]"
                }
              >
                <li>
                  <a> About </a>
                </li>
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                    : "font-bold text-[#444444]"
                }
              >
                <li>
                  <a> Services </a>
                </li>
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                    : "font-bold text-[#444444]"
                }
              >
                <li>
                  <a> Blog </a>
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                    : "font-bold text-[#444444]"
                }
              >
                <li>
                  <a> Contact </a>
                </li>
              </NavLink>
            </ul>
          </div>
          <Link to="/">
            <div className="logo_container ml-5">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="navbar_routs_list px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                  : "font-bold text-[#444444]"
              }
            >
              <li>
                <a> Home </a>
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                  : "font-bold text-[#444444]"
              }
            >
              <li>
                <a> About </a>
              </li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                  : "font-bold text-[#444444]"
              }
            >
              <li>
                <a> Services </a>
              </li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                  : "font-bold text-[#444444]"
              }
            >
              <li>
                <a> Blog </a>
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#242c36] font-bold text-[#ffffff] p-2 rounded-lg"
                  : "font-bold text-[#444444]"
              }
            >
              <li>
                <a> Contact </a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="navbar_button_container">
            <button>Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

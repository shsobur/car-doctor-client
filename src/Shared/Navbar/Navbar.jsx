import "./Navbar.css";
import logo from "../../assets/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_nav_bar_outer_container">
          <nav className="main_nav_bar_inner_container">
            <div className="web_logo_container">
              <img src={logo} alt="logo" />
            </div>

            <div id="main_navigation_container">
              <ul>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF3811] text-lg font-bold underline"
                      : "text-[#444444] text-lg font-bold"
                  }
                >
                  <li>Home</li>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF3811] text-lg font-bold underline"
                      : "text-[#444444] text-lg font-bold"
                  }
                >
                  <li>About</li>
                </NavLink>

                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF3811] text-lg font-bold underline"
                      : "text-[#444444] text-lg font-bold"
                  }
                >
                  <li>Service</li>
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF3811] text-lg font-bold underline"
                      : "text-[#444444] text-lg font-bold"
                  }
                >
                  <li>Blog</li>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF3811] text-lg font-bold underline"
                      : "text-[#444444] text-lg font-bold"
                  }
                >
                  <li>Contact</li>
                </NavLink>
              </ul>
            </div>

            <div className="nav_bar_btn">
              <Link to="/singin">
                <button>Sing In</button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

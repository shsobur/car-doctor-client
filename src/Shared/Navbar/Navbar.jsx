import "./Navbar.css";
import logo from "../../assets/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = () => {
    // Sweet Alart__
    Swal.fire({
      title: "Are you sure?",
      text: "You wan't to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
        .then(() => {
          Swal.fire({
            title: "Loged Out!",
            text: "Loged out, Now get out of hear -_-",
            icon: "success"
          });
        })
      }
    });
    // End__
  };

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
                  to="/booking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF3811] text-lg font-bold underline"
                      : "text-[#444444] text-lg font-bold"
                  }
                >
                  <li>Booking</li>
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
              {user ? (
                <button onClick={handleSingOut}>Sing Out</button>
              ) : (
                <Link to="/singin">
                  <button>Sing In</button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

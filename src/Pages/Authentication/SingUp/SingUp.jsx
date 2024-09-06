import { Link } from "react-router-dom";
import "../AuthenticationStyle/AuthenticationStyle.css";

const SingUp = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_auth_outer_container">
          <div className="main_auth_inner_container">
            <div className="auth_main_section_container">
              <h2 className="auth_title">Sing Up</h2>
              <form>
                <div className="auth_form_input_container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="auth_form_input_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="auth_form_input_container">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="auth_sub_btn">
                  <input type="submit" value="Sing Up" />
                </div>

                <div className="text-center mt-5">
                  <p>
                    Already have an account?{" "}
                    <Link to="/singin">
                      <span className="underline text-[#FF3811]">sing in</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;

import { Link } from "react-router-dom";
import "../AuthenticationStyle/AuthenticationStyle.css";

const SingIn = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_auth_outer_container">
          <div className="main_auth_inner_container">
            <div className="auth_main_section_container">
              <h2 className="auth_title">Sing In</h2>
              <form>

                <div className="auth_form_input_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div className="auth_form_input_container">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>

                <div className="auth_sub_btn">
                  <input type="submit" value="Sing In" />
                </div>

                <div className="text-center mt-5">
                  <p>
                    Already have an account?{" "}
                    <Link to="/singup">
                      <span className="underline text-[#FF3811]">sing up</span>
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

export default SingIn;

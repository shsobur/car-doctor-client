import { Link, useLocation, useNavigate } from "react-router-dom";
import "../AuthenticationStyle/AuthenticationStyle.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const SingIn = () => {
  const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      console.log(result.user)
      // Sweet Alart__
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
      // End
      navigate(path, {replace: true});
    })
    .catch(error => {
      console.log("Firebase Sing In Error", error);
    })
  }

  return (
    <>
      <div className="main_container">
        <div className="main_auth_outer_container">
          <div className="main_auth_inner_container">

            <div className="auth_main_section_container">
              <h2 className="auth_title">Sing In</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="auth_form_input_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  <div>
                    {errors.email && (
                      <span className="text-xs font-light text-red-500">
                        Email is required.
                      </span>
                    )}
                  </div>
                </div>

                <div className="auth_form_input_container">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <div>
                    {errors.password && (
                      <span className="text-xs font-light text-red-500">
                        Password is required.
                      </span>
                    )}
                  </div>
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

                <div>
                  <SocialLogin></SocialLogin>
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

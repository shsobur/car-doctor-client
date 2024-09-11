import "./SocialLogin.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSingIn()
    .then(result => {
      console.log(result.user)
      // Sweet alart__
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
      // End__
      navigate(path, {replace: true});
    })
    .catch(error => {
      console.log("social log error: ", error);
    })
  };

  return (
    <>
      <div className="main_social_login_container">
        <h2 onClick={handleGoogleLogin}><FcGoogle /></h2>
        <h2><FaGithub /></h2>
        <h2><FaLinkedin /></h2>
      </div>
    </>
  );
};

export default SocialLogin;
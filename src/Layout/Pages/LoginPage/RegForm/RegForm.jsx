import "../../../styles/RegForm.css";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import regInage from "../../../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const RegForm = () => {
  const {createUser} = useContext(AuthContext);
  const navigat = useNavigate();

  const handelRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const regUser = {name, email, password};
    console.log (regUser);

    createUser(email, password)
    .then(result => {
      const registerUser = result.user;
      console.log (registerUser)
      form.rest();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register Successfuly",
        showConfirmButton: false,
        timer: 1500
      });
      navigat("/");
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div className="main_reg_parent_container">
      <div className="reg_inner_container">
        <div className="reg_content_container">
          <div className="reg_image_contaienr">
            <img src={regInage} />
          </div>

          <div className="reg_form_container">
            <div className="w-full p-8 space-y-3 text-gray-800">
              <h1 className="text-3xl font-bold text-center">Register</h1>
              <form  onSubmit={handelRegister} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="username"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 dark:border-violet-600"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="font-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="username"
                    placeholder="Your emali"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 dark:border-violet-600"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="font-bold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 dark:border-violet-600"
                  />
                  <div className="flex justify-end text-xs text-gray-600">
                    <a rel="noopener noreferrer" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <label htmlFor="box-101">
                  <input
                    className="cursor-pointer block w-full p-3 text-center rounded-lg text-gray-50 bg-[#ff3811]"
                    type="submit"
                    value="Sign Up"
                    id="box-101"
                  />
                </label>
              </form>

              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">
                  Register with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              </div>

              <div className="flex justify-center space-x-4">
                <button className="text-3xl">
                  <FaGoogle />
                </button>

                <button className="text-3xl">
                  <FaGithub />
                </button>

                <button className="text-3xl">
                  <FaXTwitter />
                </button>
              </div>
              <p className="text-xs text-center sm:px-6 text-gray-600">
                Dont have an account?
                <Link
                  to="/login"
                  rel="noopener noreferrer"
                  href="#"
                  className="underline text-gray-800"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm;

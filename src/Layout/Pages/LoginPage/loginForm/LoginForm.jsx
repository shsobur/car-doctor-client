import "../../../styles/LoginForm.css";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import loginImg from "../../../../assets/images/login/login.svg";

const LoginForm = () => {
  return (
    <div className="main_login_parent_container">
      <div className="login_inner_container">

        <div className="login_content_container">

          <div className="login_image_container">
            <img src={loginImg} />
          </div>

          <div className="login_form_container">

            <div className="w-full p-8 space-y-3 text-gray-800">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <form noValidate="" action="" className="space-y-6">

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="username"
                    className="font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="emal"
                    id="username"
                    placeholder="Your emali"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 dark:border-violet-600"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="password"
                    className="font-bold"
                  >
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

                <button className="block w-full p-3 text-center rounded-lg text-gray-50 bg-[#ff3811]">
                  Sign in
                </button>

              </form>

              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">
                  Login with social accounts
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
                Don't have an account?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="underline text-gray-800"
                >
                  Sign up
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

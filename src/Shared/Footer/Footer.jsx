import "./Footer.css";
import logo from "../../assets/logo/logo.svg"
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_footer_outer_container">
          <div className="main_footer_inner_container">

            <div className="footer_contain_main_container">

              <div className="footer_logo_and_social_container">
                <div className="footer_image_container">
                  <img src={logo} />
                </div>
                <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="footer_social_icon_container">
                  <h4><FaGoogle /></h4>
                  <h4><FaFacebook /></h4>
                  <h4><IoLogoGithub /></h4>
                  <h4><FaTwitter /></h4>
                </div>
              </div>

              <div className="footer_info_content_container">
                <h3>About</h3>
                <p>Home</p>
                <p>Service</p>
                <p>Contact</p>
              </div>

              <div className="footer_info_content_container">
                <h3>Company</h3>
                <p>Why Car Doctor</p>
                <p>About</p>
              </div>

              <div className="footer_info_content_container">
                <h3>Support</h3>
                <p>Support Center</p>
                <p>Feedback</p>
                <p>Accesbility</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
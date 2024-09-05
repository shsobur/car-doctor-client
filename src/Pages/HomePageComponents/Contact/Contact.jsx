import "./Contact.css";
import { FaRegClock } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_contact_section_outer_container">
          <div className="main_contact_section_inner_container">

            <div className="contact_section_main_container">
              <div className="contact_section_context_container">
                <div className="contact_section_icon_container"><FaRegClock /></div>
                <div>
                  <h3>We are open monday-friday</h3>
                  <h2>7:00 am - 9:00 pm</h2>
                </div>
              </div>

              <div className="contact_section_context_container">
                <div className="contact_section_icon_container"><LuPhoneCall /></div>
                <div>
                  <h3>Have a question?</h3>
                  <h2>+880 178 759 2274</h2>
                </div>
              </div>

              <div className="contact_section_context_container">
                <div className="contact_section_icon_container"><MdOutlineLocationOn /></div>
                <div>
                  <h3>Need a repair? our address</h3>
                  <h2>Liza Street, New York</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
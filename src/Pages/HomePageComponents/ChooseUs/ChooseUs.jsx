import "./ChooseUs.css";

import group from "../../../assets/icons/group.svg"
import person from "../../../assets/icons/person.svg"
import Wrench from "../../../assets/icons/Wrench.svg"
import check from "../../../assets/icons/check.svg"
import deliveryt from "../../../assets/icons/deliveryt.svg"

const ChooseUs = () => {
  return (
    <>
      <div className="mian_container">
        <div className="main_choose_us_section_outer_container">
          <div className="main_choose_us_section_inner_container">

            <div className="choose_us_main_contain_container">

              <div className="choose_us_section_top_container">
                <h3>Core Features</h3>
                <h2>Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
              </div>
              <div className="choose_us_section_bottom_container">

                <div className="choose_us_section_info_container">
                  <div className="choose_us_section_img_container">
                    <img src={group}/>
                  </div>
                  <h2>Expert Team</h2>
                </div>

                <div className="choose_us_section_info_container">
                  <div className="choose_us_section_img_container">
                    <img src={person}/>
                  </div>
                  <h2>24/7 Support</h2>
                </div>

                <div className="choose_us_section_info_container">
                  <div className="choose_us_section_img_container">
                    <img src={Wrench}/>
                  </div>
                  <h2>Best Equipment</h2>
                </div>

                <div className="choose_us_section_info_container">
                  <div className="choose_us_section_img_container">
                    <img src={check}/>
                  </div>
                  <h2>100% Guranty</h2>
                </div>

                <div className="choose_us_section_info_container">
                  <div className="choose_us_section_img_container">
                    <img src={deliveryt}/>
                  </div>
                  <h2>Timely Delivery</h2>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
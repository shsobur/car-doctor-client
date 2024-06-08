/* eslint-disable react/no-unescaped-entities */
import "../../../styles/AboutUs.css";
import parson from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg" 

const AboutUs = () => {
  return (
    <div className="main_aboutus_parant_container">
      <div className="main_aboutus_inner_container">

        <div className="aboutus_content_container">

          <div className="left_aboutus_container">
            <div className="left_aboutus_image_container">

              <div className="aboutus_img_one">
                <img src={parson} alt="" />
              </div>
              <div className="aboutus_img_two">
                <img src={parts} alt="" />
              </div>

            </div>
          </div>

            <div className="right_aboutus_container">
              <h4>About Us</h4>
              <h2>We are qualified & of experience in this field</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              <div>
                <button className="slider_btn_one">Get More Info</button>
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;
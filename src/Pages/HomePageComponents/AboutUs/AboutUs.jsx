import "./AboutUs.css";
import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_aboutus_outer_container">
          <div className="main_aboutus_inner_container">

            <div className="about_section_main_outer_container">

              <div className="about_section_left_image_container">
                <img src={img1} />
                <div className="second_img_container">
                  <img src={img2} />
                </div>
              </div>

              <div className="about_section_right_title_container">
                <h3>About Us</h3>
                <h2>We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button>Get More Info</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
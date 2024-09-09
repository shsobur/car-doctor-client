import "./Booking.css";
import img from "../../assets/images/checkout/checkout.png";

const Booking = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_booking_outer_container">
          <div className="main_booking_inner_container">

            <div className="booking_baner_main_container">
              <div className="booking_baner_img_container"> 
                <img src={img}  />
              </div>
              <div className="booking_baner_overlay"></div>
              <div className="booking_title"><h2>My Booking</h2></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

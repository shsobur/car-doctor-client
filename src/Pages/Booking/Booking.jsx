import "./Booking.css";
import img from "../../assets/images/checkout/checkout.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  return (
    <>
      <div className="main_container">
        <div className="main_booking_outer_container">
          <div className="main_booking_inner_container">
            <div className="booking_baner_main_container">
              <div className="booking_baner_img_container">
                <img src={img} />
              </div>
              <div className="booking_baner_overlay"></div>
              <div className="booking_title">
                <h2>My Booking</h2>
              </div>
            </div>

            <div className="booking_table_outer_container">
              {
                bookings.map(booking => <div key={booking._id} className="main_booking_table_container">

                  <div className="table_image_container">
                    <img src={booking.image} />
                  </div>
  
                  <div className="tabel_servise_info_container">
                    <h2>{booking.serviceName}</h2>
                    <h3>{booking.email}</h3>
                  </div>
  
                  <div className="tabel_servise_info_container">
                    <p>${booking.price}</p>
                  </div>
  
                  <div className="tabel_servise_info_container">
                    <p>{booking.date}</p>
                  </div>
  
                  <div className="table_panding_btn_container">
                    <button>Pending...</button>
                  </div>
  
                  <div className="table_delete_btn_container">
                    <p><MdDeleteForever /></p>
                    <button>Delete</button>
                  </div>
  
                </div>  )
              }

              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

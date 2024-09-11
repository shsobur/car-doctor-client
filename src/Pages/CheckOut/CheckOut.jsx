import "./CheckOut.css";
import ckeckImg from "../../assets/images/checkout/checkout.png";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CheckOut = () => {
  const serviseData = useLoaderData();
  const nevigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name.trim();
    const date = data.date.trim();
    const email = data.email.trim();
    const number = data.number.trim();
    const price = serviseData.price;
    const title = serviseData.title;
    const image = serviseData.img;

    const booking = {
      customerName: name,
      serviceName: title,
      date,
      email,
      number,
      price,
      image
    }

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log("🚀 ~ onSubmit ~ data:", data);
      if(data.insertedId) {
        console.log("worked");
        // Sweet Alert__
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
          title: "Booking is on prosece..."
        });
        nevigate("/booking");
        // End__
      }
    })
    .catch(error => {
      console.log("Booking error: ", error)
    })

    console.log(booking);
  };

  return (
    <>
      <div className="main_container">
        <div className="main_check_out_outer_container">
          <div className="main_check_out_inner_container">

            <div className="ckeck_out_main_img_container">
              <div className="ckeck_out_img_container">
                <img src={ckeckImg} />
              </div>
              <div className="check_out_img_overlay"></div>
              <div className="check_out_title">
                <h2>Ckeck Out</h2>
              </div>
            </div>

            <div className="ckeck_out_form_title">
              <h2><span>Service:</span> {serviseData.title}</h2>
              <h2><span>Price:</span> ${serviseData.price}</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="main_check_out_form_container">
                <div
                  id="check_out_imput-1"
                  className="ckeck_out_single_input_container"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  <div>
                    {errors.name && (
                      <span className="text-xs font-light text-red-500">
                        Name is required.
                      </span>
                    )}
                  </div>
                </div>

                <div
                  id="check_out_imput-2"
                  className="ckeck_out_single_input_container"
                >
                  <input
                    type="date"
                    name="date"
                    {...register("date", { required: true })}
                  />
                  <div>
                    {errors.date && (
                      <span className="text-xs font-light text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>

                <div
                  id="check_out_imput-3"
                  className="ckeck_out_single_input_container"
                >
                  <input
                    type="text"
                    name="number"
                    placeholder="Your Phone"
                    {...register("number", { required: true })}
                  />
                  <div>
                    {errors.number && (
                      <span className="text-xs font-light text-red-500">
                        Number is required.
                      </span>
                    )}
                  </div>
                </div>

                <div
                  id="check_out_imput-4"
                  className="ckeck_out_single_input_container"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    {...register("email", { required: true })}
                  />
                  <div>
                    {errors.email && (
                      <span className="text-xs font-light text-red-500">
                        Email is required.
                      </span>
                    )}
                  </div>
                </div>

                <div
                  id="ckeck_out_textarea-1"
                  className="ckeck_out_single_texarea_container"
                >
                  <textarea
                    name="textarea"
                    placeholder="Your Message (Optional)"
                  ></textarea>
                </div>

                <div className="check_out_form_btn">
                  <input type="submit" value="Order Confirm" />
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

import "./CheckOut.css";
import ckeckImg from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const serviseData = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const date = data.date;
    const email = data.email;
    const number = data.number;
    const price = serviseData.price;

    const order = {
      customername: name,
      date,
      email,
      number,
      price
    }

    console.log(order);
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
              <h2>Service Name: {serviseData.title}</h2>
              <h2>Price: ${serviseData.price}</h2>
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

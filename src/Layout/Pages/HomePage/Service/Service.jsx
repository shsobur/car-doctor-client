/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "../../../styles/Service.css";
import { useEffect } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <div className="main_service_parent_container">
      <div className="main_inner_service_container">

        <div className="service_title_container">
          <h4>Service</h4>
          <h2>Our Service Area</h2>
          <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>

        <div className="service_cart_container grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
          }
        </div>
        <div className="sercice_btn_conatainer">
          <button>More Services</button>
        </div>

      </div>
    </div>
  );
};

export default Service;

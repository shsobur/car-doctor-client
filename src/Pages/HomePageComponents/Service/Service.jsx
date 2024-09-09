import { useState } from "react";
import "./Service.css";
import { useEffect } from "react";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const Service = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then(res => res.json())
    .then(data => {
      setService(data)
    })
  }, [])

  return (
    <>
      <div className="main_container">
        <div className="main_service_section_outer_container">
          <div className="main_service_section_inner_container">

            <div className="service_section_title_container">
              <h3>Service</h3>
              <h2>Our Service Area</h2>
              <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>

            <div className="service_card_main_container">
              {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
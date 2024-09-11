import { Link } from "react-router-dom";
import "./ServiceCard.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ServiceCard = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, price } = service;

  return (
    <>
      <Link to={user ? `/checkout/${_id}` : "/singin"}>
        <div className="main_service_card_container">
          <div className="service_card_img_container">
            <img src={img} />
          </div>
          <div className="service_card_info_container">
            <h2>{title}</h2>
            <p>Price: ${price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;

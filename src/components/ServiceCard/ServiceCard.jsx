import "./ServiceCard.css";
import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
  const {title, img, price} = service;

  return (
    <>
      <div className="main_service_card_container">
        <div className="service_card_img_container">
          <img src={img} />
        </div>
        <div className="service_card_info_container">
          <h2>{title}</h2>
          <p>Price: ${price}</p>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object
}

export default ServiceCard;
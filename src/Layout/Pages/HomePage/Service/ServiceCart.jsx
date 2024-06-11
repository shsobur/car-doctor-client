import PropTypes from 'prop-types';
import { HiArrowSmallRight } from "react-icons/hi2";

const ServiceCart = ({service}) => {
  const {title, img, price} = service;

  return (
    <div className="card bg-base-100 shadow-xl">

      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-bold text-[#444444]">{title}</h2>
        <div className="card-actions flex justify-between">
          <div className="text-xl font-bold text-[#ff3811]">Price : ${price}</div>
          <div className="text-2xl text-[#ff3811] cursor-pointer"><HiArrowSmallRight /></div>
        </div>
      </div>

    </div>
  );
};

ServiceCart.propTypes = {
  service: PropTypes.object
}

export default ServiceCart;

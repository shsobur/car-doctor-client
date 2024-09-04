import "./HomeBaner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const HomeBaner = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_baner_outer_container">
          <div className="main_baner_inner_container">

            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Autoplay]}
              className="swiper_container mySwiper"
            >
              <SwiperSlide><img src={img1} /></SwiperSlide>
              <SwiperSlide><img src={img2} /></SwiperSlide>
              <SwiperSlide><img src={img3} /></SwiperSlide>
              <SwiperSlide><img src={img4} /></SwiperSlide>
              <SwiperSlide><img src={img5} /></SwiperSlide>
              <SwiperSlide><img src={img6} /></SwiperSlide>
            </Swiper>

            <div className="baner_top_bg"></div>

            <div className="main_baner_title_container">
              <div>
                <h2>Affordable Price <br/> For Car Servicing</h2>
                <p>There are many variations of passages of  available,<br/> but the majority have suffered alteration in some form</p>
                <button id="baner_btn-1">Discover More</button>
                <button id="baner_btn-2">Latest Project</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBaner;

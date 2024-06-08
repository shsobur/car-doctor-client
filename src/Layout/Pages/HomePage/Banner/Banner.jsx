import "../../../styles/Banner.css";
import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
import img5 from "../../../../assets/images/banner/5.jpg";
import img6 from "../../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="main_hero_parant_container">
      <div className="main_inner_hero_container">

        <div className="carousel w-full rounded-lg">

          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />

            <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full w-full text-white flex items-center gap-5 transform ">
              <div>
                <h2 className="text-6xl font-bold pl-5 pr-20 leading-normal">Affordable  Price For Car  Servicing</h2>
                <p className="pl-5 pt-5 pb-5 pr-">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className=" pl-5 flex items-center gap-8">
                  <button className=" slider_btn_one">Discover More</button>
                  <button className=" slider_btn_two">Latest Project</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />

            <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full w-full text-white flex items-center gap-5 transform ">
              <div>
                <h2 className="text-6xl font-bold pl-5 pr-20 leading-normal">Affordable  Price For Car  Servicing</h2>
                <p className="pl-5 pt-5 pb-5 pr-">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className=" pl-5 flex items-center gap-8">
                  <button className=" slider_btn_one">Discover More</button>
                  <button className=" slider_btn_two">Latest Project</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />

            <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full w-full text-white flex items-center gap-5 transform ">
              <div>
                <h2 className="text-6xl font-bold pl-5 pr-20 leading-normal">Affordable  Price For Car  Servicing</h2>
                <p className="pl-5 pt-5 pb-5 pr-">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className=" pl-5 flex items-center gap-8">
                  <button className=" slider_btn_one">Discover More</button>
                  <button className=" slider_btn_two">Latest Project</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />

            <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full w-full text-white flex items-center gap-5 transform ">
              <div>
                <h2 className="text-6xl font-bold pl-5 pr-20 leading-normal">Affordable  Price For Car  Servicing</h2>
                <p className="pl-5 pt-5 pb-5 pr-">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className=" pl-5 flex items-center gap-8">
                  <button className=" slider_btn_one">Discover More</button>
                  <button className=" slider_btn_two">Latest Project</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full" />

            <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full w-full text-white flex items-center gap-5 transform ">
              <div>
                <h2 className="text-6xl font-bold pl-5 pr-20 leading-normal">Affordable  Price For Car  Servicing</h2>
                <p className="pl-5 pt-5 pb-5 pr-">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className=" pl-5 flex items-center gap-8">
                  <button className=" slider_btn_one">Discover More</button>
                  <button className=" slider_btn_two">Latest Project</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>

          <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-full " />

            <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full w-full text-white flex items-center gap-5 transform ">
              <div>
                <h2 className="text-6xl font-bold pl-5 pr-20 leading-normal">Affordable  Price For Car  Servicing</h2>
                <p className="pl-5 pt-5 pb-5 pr-">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className=" pl-5 flex items-center gap-8">
                  <button className=" slider_btn_one">Discover More</button>
                  <button className=" slider_btn_two">Latest Project</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Banner;

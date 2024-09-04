import AboutUs from "../AboutUs/AboutUs";
import HomeBaner from "../HomeBaner/HomeBaner";

const HomePageLayout = () => {
  return (
    <>
      <div className="main_container">
        <HomeBaner></HomeBaner>
        <AboutUs></AboutUs>
      </div>
    </>
  );
};

export default HomePageLayout;

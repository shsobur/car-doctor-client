import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import HomeBaner from "../HomeBaner/HomeBaner";

const HomePageLayout = () => {
  return (
    <>
      <div className="main_container">
        <HomeBaner></HomeBaner>
        <AboutUs></AboutUs>
        <Contact></Contact>
      </div>
    </>
  );
};

export default HomePageLayout;

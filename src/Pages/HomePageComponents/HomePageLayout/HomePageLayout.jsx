import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import HomeBaner from "../HomeBaner/HomeBaner";

const HomePageLayout = () => {
  return (
    <>
      <div className="main_container">
        <HomeBaner></HomeBaner>
        <AboutUs></AboutUs>
        <Contact></Contact>
        <ChooseUs></ChooseUs>
      </div>
    </>
  );
};

export default HomePageLayout;

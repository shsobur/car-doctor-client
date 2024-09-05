import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import HomeBaner from "../HomeBaner/HomeBaner";
import Service from "../Service/Service";

const HomePageLayout = () => {
  return (
    <>
      <div className="main_container">
        <HomeBaner></HomeBaner>
        <AboutUs></AboutUs>
        <Service></Service>
        <Contact></Contact>
        <ChooseUs></ChooseUs>
      </div>
    </>
  );
};

export default HomePageLayout;

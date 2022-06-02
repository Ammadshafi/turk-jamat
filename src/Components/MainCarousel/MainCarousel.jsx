import React from "react";
import "./MainCarousel.css";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

const MainCarousel = ({ Array }) => {
  return (
    <div className="main-carousel ">
      <OwlCarousel
        className="owl-theme banner-carousel"
        loop
        nav
        margin={10}
        autoplay
        items={1}
      >
        {Array.map((cur) => (
          <div className="item" key={cur.id}>
            <img alt="img1" src={cur.img} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default MainCarousel;

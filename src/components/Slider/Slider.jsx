import React from "react";
import Slider from "react-slick";
import opinions from "../../data/opinions";

import "./slick.scss";
import "./slick-theme.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings}>
      {opinions.map((item) => {
        return (
          <div className="opinion__wrapper">
            <div className="opinion__text">{item.text}</div>
            <div className="opinion__name">{item.name}</div>
            <div className="opinion__instalation">{item.instalation}</div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SimpleSlider;

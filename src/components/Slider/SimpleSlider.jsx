import React, { Children } from "react";
import Slider from "react-slick";

import "./slick.scss";
import "./slick-theme.scss";

const SimpleSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SimpleSlider;

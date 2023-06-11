import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fall-animation.scss";
const Slider = () => {
  return (
    <div>
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div data-src="/path/to/image-0.jpg" />
        <div data-src="/path/to/image-1.jpg" />
        <div data-src="/path/to/image-2.jpg" />
        <div data-src="/path/to/image-3.jpg" />
      </AwesomeSlider>
    </div>
  );
};

export default Slider;

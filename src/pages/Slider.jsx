import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Slider.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  const imageUrls = [
    "https://drive.google.com/uc?export=view&id=1ciYRvKIykfU8AxXdtpzp-vjKovBwBCWO",
    "https://drive.google.com/uc?export=view&id=13158CRICaM7vzbQ8IK1t8RcW7QhJRe6O",
    "https://drive.google.com/uc?export=view&id=1TuFHtfq1aOUmM1Bxb3YtNaMo6-vXwcOj",
    "https://drive.google.com/uc?export=view&id=1bf9zwE1zKR-QehsRdTfqreofyS0qzHjG",
    "https://drive.google.com/uc?export=view&id=1H77HQ0deOPj7vPLiAUyfgDM12DvwGdUn",
    "https://drive.google.com/uc?export=view&id=12_w2oDW6w3RzkjL2lUo46pU2QXND5DIC",
    "https://drive.google.com/uc?export=view&id=1OG0gL_C4oRzKkOkQrNGzFeMGMnZrM5TP",
    "https://drive.google.com/uc?export=view&id=14woEpk6_28-SPRkv9NErJ2yVf0uy3vxN",
    "https://drive.google.com/uc?export=view&id=1u9cxaO97VSvN9ZvnnGagjeizLRpTIaiK",
  ];

  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        {imageUrls.map((imageUrl, index) => (
          <div key={index} data-src={imageUrl} />
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;

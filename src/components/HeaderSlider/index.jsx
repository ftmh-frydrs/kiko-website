import React from "react";
import Slider from "../Slider";

const HeaderSlider = () => {
  const slides = [
    { image: require("../../assets/slider1.webp"), text: "NEW DAYS IN BLOOM LIMITED EDITION", className: "slide-text-1" },
    { image: require("../../assets/slider2.webp"), text: "2+2 ON A SELECTION OF PRODUCTS", className: "slide-text-2" },
  ];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default HeaderSlider;
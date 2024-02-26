import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <span
      className={`slide-text ${
        activeSlide === index ? "active" : ""
      } ${slide.className}`}
    >
      {slide.text}
    </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
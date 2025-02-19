import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const images = [
  "https://cdn.prod.website-files.com/61605bb7ae4797327195c782/61605bcf087fe0d673790037_swiper__0002_clem-onojeghuo-24vjqGCu0pI-unsplash.jpg",
  "https://cdn.prod.website-files.com/61605bb7ae4797327195c782/61605bcf087fe05bca79002f_swiper__0001_tamara-bellis-IwVRO3TLjLc-unsplash.jpg",
  "https://cdn.prod.website-files.com/61605bb7ae4797327195c782/61605bcf087fe069eb79002b_swiper__0003_kahari-king-NUEWYsqzHxM-unsplash.jpg",
  "https://cdn.prod.website-files.com/61605bb7ae4797327195c782/61605c0c91310a8643470360_swiper__0004_Layer%202.jpg"
];

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;

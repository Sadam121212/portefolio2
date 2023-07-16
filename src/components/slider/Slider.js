import React from "react";
import { Carousel } from "antd";
import image1 from "../../images/ahmed.jpg";
import image2 from "../../images/fahad.jpg";
import "./Slider.css";

const slides = [
  {
    image: image1,
    text: '"Thanks to its expertise and creativity, Fatima has created an exceptional design that perfectly matches my needs. His professionalism and collaboration made this experience enjoyable and I am extremely satisfied with the final result. Thank you again  for your valuable support!"',
    subtitle1: "Ahmed Soliman",
    subtitle2: "CEO, Benman Partners",
  },
  {
    image: image2,
    text: '"I am delighted to recommend Fatima for the Web Integrator Diploma course at OpenClassrooms. His seriousness and commitment in web development are exemplary. His work demonstrates an ability to respond to technical challenges with creativity."',
    subtitle1: "Fahad Khan",
    subtitle2: "Dev React & Mentor Openclassroom",
  },
];

const contentStyle = {};

export default function Slider() {
  const onChange = (currentSlide) => {};

  return (
    <div className="container">
      <h1>Testimonials</h1>
      <Carousel afterChange={onChange}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={contentStyle} className="carousel-contain">
              <img src={slide.image} alt="" className="carousel-image" />
              <div className="carousel-text">{slide.text}</div>
              <p className="carousel-subtitle1">{slide.subtitle1}</p>
              <p className="carousel-subtitle2">{slide.subtitle2}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

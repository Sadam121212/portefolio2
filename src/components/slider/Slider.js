import React from "react";
import { Carousel } from "antd";
import image1 from "../../images/fahad.jpg";
import image2 from "../../images/ahmed.jpg";
import "./Slider.css";

const slides = [
  {
    image: image1,
    text: "I am delighted to recommend Fatima for the Web Integrator Diploma course at OpenClassrooms. His seriousness and commitment in web development are exemplary. His work demonstrates an ability to respond to technical challenges with creativity.",
    subtitle1: "Fahad",
    subtitle2: "Mentor",
  },
  {
    image: image2,
    text: "Texte pour la deuxième image",
    subtitle1: "Ahmed",
    subtitle2: "CEO",
  },
];

const contentStyle = {


};

export default function Slider() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
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
  );
}

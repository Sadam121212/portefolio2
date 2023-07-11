import React from "react";
import Presentation from "../../components/presentation/Presentation";
import "./HomePage.css";
import Skills from "../../components/skills/Skills";
import BoxForContact from "../../components/boxForContact/BoxForContact";
import Slider from "../../components/slider/Slider";
import Projects from "../../components/work/Projects";

export default function HomePage() {
  return (
    <div className="homeContainer">
      <Presentation />
      <Skills />
      <Projects/>
      <Slider />
      <BoxForContact />
    </div>
  );
}

import React from "react";
import Presentation from "../../components/presentation/Presentation";
import "./HomePage.css";
import Skills from "../../components/skills/Skills";
import BoxForContact from "../../components/boxForContact/BoxForContact";

export default function HomePage() {
  return (
    <div className="homeContainer">
      <Presentation />
      <Skills />
      <BoxForContact/>
    </div>
  );
}

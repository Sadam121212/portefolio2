import React from "react";
import "./Presentation.css";
import avatar from "../../images/avataaars.svg";
import imgDev from "../../images/imgDev.jpg";

const Presentation = () => (
  <section>
    <div className="column">
      <h1 className="title">Designer, Frontend Developer, &amp; React</h1>
      <h2 className="subtitle">
        I design and code beautifully simple things, and I love what I do.
      </h2>
      <img className="avatar" src={avatar} alt="Avatar" />
    </div>
    <div className="imgDevContainer">
      <img className="imgDev" src={imgDev} alt="Hero Devices" />
    </div>

    <div className="presentation">
      <div className="column">
        <h1 className="titlePresentation">
          Hi, I’m Fatima. Nice to meet you.
        </h1>
        <h2 className="subtitlePresentation">
          ........................
        </h2>
      </div>
    </div>
  </section>
);

export default Presentation;

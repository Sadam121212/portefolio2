import React from "react";
import "./Presentation.css";
import avatar from "../../images/avataaars.svg";
import imgDev from "../../images/imgDev.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const Presentation = () => (
  <section>
    <div className="titleSection">
      <div className="column">
        <Slide triggerOnce={true}>
          <h1 className="title">Designer, Frontend Developer, &amp; React</h1>
        </Slide>
        <Fade
          delay={1e3}
          cascade
          damping={1e-2}
          triggerOnce={true}
          className="subtitle"
        >
          I design and code beautifully simple things, and I love what I do.
        </Fade>
      </div>
      <img className="avatar" src={avatar} alt="Avatar" />
    </div>
    <div className="imgDevContainer">
      <img className="imgDev" src={imgDev} alt="Hero Devices" />
</div>
    <div className="presentation">
      <div className="column">
        <h1 className="titlePresentation">Hi, I’m Fatima. Nice to meet you.</h1>
        <h2 className="subtitlePresentation">
          With a Master's degree in Digital Marketing under my belt, I
          discovered my passion for web development over a year ago. Since then,
          I have fallen in love with the ability to create interactive and
          elegant websites using the latest technologies.
          <br />
          <br />
          I am open to freelance opportunities as a web developer. I enjoy
          collaborating with clients to create tailor-made solutions that meet
          their needs and goals. My experience in digital marketing also brings
          a unique perspective to my projects. <br />
          <br />
        </h2>
      </div>
    </div>
  </section>
);

export default Presentation;

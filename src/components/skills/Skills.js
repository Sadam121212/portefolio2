import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Skills = () => (
  <section className="sectionSkills">
    <div className="box">
      <div className="content">
        <div className="column is-centered">
          <div className="column containerSkills">
            <span className="fa-stack fa-2x">
              <FontAwesomeIcon icon={faMobile} />
            </span>
            <h1 className="titleSkills">Cross-platform</h1>
            <p className="pSkills">Compatible with all media, tablet & mobile application.</p>
            <p className="list-title ">
              What I design in responsive:
            </p>
            <p>Web, Apps</p>
            <p className="list-title">
              Responsive Web Development Tools:
            </p>
            <ul>
              <li>HTML5 and CSS3</li>
              <li>Responsive Design</li>
              <li>Media Queries</li>
              <li>Performance &amp; Optimization</li>
              <li>Responsive CSS Frameworks</li>
              <li>Compatibility Testing</li>
            </ul>
          </div>
          <div className="column containerSkills">
            <span className="fa-stack fa-2x">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
            <h1 className="titleSkills">Frontend Developer</h1>
            <p className="pSkills">
              I love creating websites and delving into web development to bring
              unique and interactive online projects to life
            </p>
            <p className="list-title">
              Languages I speak:
            </p>
            <p>HTML, CSS, JavaScript, CSS, React, Redux, Git</p>
            <p className="list-title">
              Dev Tools:
            </p>
            <ul>
              <li>Atom</li>
              <li>Bitbucket</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>Codekit</li>
              <li>Github</li>
              <li>Surge</li>
              <li>Terminal</li>
              <li>Vercel</li>
            </ul>
          </div>
          <div className="column containerSkills">
            <span className="fa-stack fa-2x">
             <FontAwesomeIcon icon={faBook} />
            </span>
            <h1 className="titleSkills">Mentor</h1>
            <p className="pSkills">
              I genuinely care about people, and love helping fellow designers
              work on their craft.
            </p>
            <p className="list-title">
              Experiences I draw from:
            </p>
            <p>UX/UI, Product design, Freelancing</p>
            <p className="list-title">
              Mentor Stats:
            </p>
            <ul>
              <li>7 years experience</li>
              <li>26 short courses</li>
              <li>65 bootcamps</li>
              <li>200+ students</li>
              <li>2,350+ mentor sessions</li>
              <li>60+ group critiques</li>
              <li>16,500+ comments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;

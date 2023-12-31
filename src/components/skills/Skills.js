import React from "react";
import "./Skills.css";
import { Card, Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const Skills = () => (
  <section className="skillsContainer">
    <Row gutter={20}>
      <Col lg={8} md={24}>
        <div className="content">
          <Fade direction="down" triggerOnce={true} duration={1000}>
            <Card hoverable className="sectionSkills">
              <div className="sectionSkillsContent">
                <div className="iconContainer">
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faMobile} />
                  </span>
                </div>
                <h1 className="titleSkills">Cross-platform</h1>
                <p className="pSkills">
                  Compatible with all media, tablet & mobile application.
                </p>
                <p className="list-title">Responsive Web Development Tools:</p>
                <ul>
                  <li>Responsive Design</li>
                  <li>Media Queries</li>
                  <li>Performance &amp; Optimization</li>
                  <li>Responsive CSS Frameworks</li>
                  <li>Compatibility Testing</li>
                </ul>
              </div>
            </Card>
          </Fade>
        </div>
      </Col>
      <Col lg={8} md={24}>
        <div className="content">
          <Fade direction="down" triggerOnce={true} duration={2000}>
            <Card hoverable className="sectionSkills">
              <div className="sectionSkillsContent">
                <div className="iconContainer">
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </span>
                </div>
                <h1 className="titleSkills">Frontend Developer</h1>
                <p className="pSkills">
                  I love creating websites to bring unique online projects to
                  life
                </p>
                <p className="list-title">Key Languages and Frameworks::</p>
                <ul>
                  <li>React & Redux</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                </ul>
              </div>
            </Card>
          </Fade>
        </div>
      </Col>
      <Col lg={8} md={24}>
        <div className="content">
          <Fade direction="down" triggerOnce={true} duration={3000}>
            <Card hoverable className="sectionSkills">
              <div className="sectionSkillsContent">
                <div className="iconContainer">
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faBook} />
                  </span>
                </div>
                <h1 className="titleSkills">Marketing</h1>
                <p className="pSkills">
                  I have extensive experience and expertise in various areas of
                  marketing
                </p>

                <p className="list-title">Marketing Stats:</p>
                <ul>
                  <li>Marketing Strategy</li>
                  <li>Digital Marketing</li>
                  <li>Market Research</li>
                  <li>Communication Campaigns</li>
                  <li>Marketing Data Analysis</li>
                </ul>
              </div>
            </Card>
          </Fade>
        </div>
      </Col>
    </Row>
  </section>
);

export default Skills;

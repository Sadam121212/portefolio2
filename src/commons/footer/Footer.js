import React from "react";
import "./Footer.css";
import logo from "../../images/logo-fskn.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContain">
        <img src={logo} className="logoFooter" alt="logo" />
        <p className="pFooter">
          Each task accomplished with passion and perseverance brings you closer
          to your goals.
        </p>
        <div className="social-icons">
          <p className="field">
            <a
              className="iconLinkedin"
              href="https://www.linkedin.com/in/fatima-skand-279081180/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedinIn}/>
              </span>
            </a>
            <a
              href="https://github.com/FSKN98"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a className="iconMail" href="mailto:mattfarley@hey.com">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </p>
        </div>
        <p>© 2023 Fatima SKAND, All rights reserved.</p>
      </div>
    </div>
  );
}

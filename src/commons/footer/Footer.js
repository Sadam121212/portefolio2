import React from "react";
import "./Footer.css";
import logo from "../../images/logo-fskn.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedInIn,
  faGitHub,
  faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContain">
        <img src={logo} className="logoFooter" />
        <p className="pFooter">
          Each task accomplished with passion and perseverance brings you closer
          to your goals.
        </p>
        <div className="social-icons">
          <p className="field">
            <a
              className="button is-medium"
              href="https://linkedin.com/in/matthew-farley-32526014/"
              target="_blank"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedInIn} />
              </span>
            </a>
            <a
              className="button is-medium"
              href="https://producthunt.com/@farleymatters"
              target="_blank"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGitHub} />
              </span>
            </a>
            <a className="button is-medium" href="mailto:mattfarley@hey.com">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </p>
        </div>
        <p>© 2023 Fatima SKANDRANI, Tous droits réservés.</p>
      </div>
    </div>
  );
}

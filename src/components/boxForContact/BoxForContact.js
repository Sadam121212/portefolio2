import React from "react";
import "./BoxForContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BoxForContact() {
  return (
    <div className="boxContact">
      <div className="columns">
        <div className="column level-item">
          <h2 className="titleBoxContact">Start a project</h2>
        </div>
        <div>
          <p className="containBoxContact">
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
        </div>
        <div className="buttonBoxTop">
          <Link to="/project-planner" className="buttonBoxContact">
            <span className="iconBoxContact">
              <FontAwesomeIcon icon={faHandFist} />
            </span>
            <span>Let's do this</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

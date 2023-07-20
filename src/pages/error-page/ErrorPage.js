import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
export default function ErrorPage() {
  return (
    <div>
      <div className="errorContainer">
        <div className="numberError">404</div>
        <h2>
          The page you requested does <br className="textError"></br> not exist.
        </h2>
        <p>Maybe try a different page?</p>
        <div className="linkErrorContain">
          <Link to="/" className="linkError">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

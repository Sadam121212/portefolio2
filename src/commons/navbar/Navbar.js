import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-fskn.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <div>
        <a href="/">
          <img src={logo} className="logo" />
        </a>
      </div>
      <ul className="navbar">
        <Link to="" className="linkNavbar">
          My projects
        </Link>
        <Link to="" className="contact btnContact">
          Say hello
        </Link>
      </ul>
    </nav>
  );
}

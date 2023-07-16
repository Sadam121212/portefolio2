import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo-fskn.jpg";
import "./Navbar.css";
import Pdf from "../../pages/mon-cv/mon-cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const scrollToSection = () => {
  const section = document.getElementById("mes-projets");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const { pathname } = useLocation();
  /*const menuHamburgerRef = useRef(null);
  const navbarRef = useRef(null);*/
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /*useEffect(() => {
    if (pathname !== "/project-planner") {
      const handleMenuClick = () => {
        navbarRef.current.classList.toggle("mobileMenu");
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      menuHamburgerRef.current.addEventListener("click", handleMenuClick);

      return () => {
        menuHamburgerRef.current.removeEventListener("click", handleMenuClick);
      };
    }
  }, [isMobileMenuOpen,pathname]);*/
  const toogleHamburgerMenu = () =>
  {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
}

  return (
    <nav className={`header ${isMobileMenuOpen ? "mobileMenuOpen " : ""}`}>
      <div>
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      {pathname !== "/project-planner" && (
        <div className="navbar" >
          <ul className="navLinks">
            <NavLink
              to="/#mes-projets"
              className="linkNavbar"
              onClick={scrollToSection}
            >
              My projects
            </NavLink>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="linkNavbar"
            >
              CV
            </a>
            <Link to="/project-planner" className="contact btnContact">
              Say hello
            </Link>
          </ul>
        </div>
      )}
      {pathname !== "/project-planner" && (
        <FontAwesomeIcon
          icon={faBars}
          className="menuHamburger"
       onClick={toogleHamburgerMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

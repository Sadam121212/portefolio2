import React, { useState } from "react";
import { Menu } from "antd";
import { NavLink, Redirect } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo-fskn.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    label: "My projects",
    key: "project",
    to: "/#mes-projets",
  },
  {
    label: "My CV",
    key: "cv",
    to: "/cv.pdf",
  },
  {
    label: "Say Hello",
    key: "contact",
    to: "/project-planner",
  },
];

const NavbarTest = () => {
  const [current, setCurrent] = useState("project");
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const scrollToSection = () => {
    const section = document.querySelector("#mes-projets");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className={`menuTest ${mobileIsOpen ? "menuTestHidden" : ""}`}>
        <div className="test">
          <div>
            <NavLink to="/">
              <img
                src={logo}
                className={`logo ${mobileIsOpen ? "logoHidden" : ""}`}
                alt="logo"
              />
            </NavLink>
          </div>
          <Menu
            className="test2"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <NavLink
                  to={item.to}
                  className="linkNavbar"
                  onClick={item.key === "project" ? scrollToSection : null}
                >
                  {item.label}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
      <div className="menuTestMobile">
        <div className="menuMobileContent">
          <div>
            <NavLink to="/">
              <img
                src={logo}
                className={`logo ${mobileIsOpen ? "logoHidden" : ""}`}
                alt="logo"
              />
            </NavLink>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="menuHamburger"
            onClick={() => setMobileIsOpen(!mobileIsOpen)}
          />

          {mobileIsOpen && (
            <Menu onClick={onClick} selectedKeys={[current]} mode="vertical">
              {items.map((item) => (
                <Menu.Item key={item.key}>
                  <NavLink
                    to={item.to}
                    onClick={() => {
                      setMobileIsOpen(false);
                      if (item.key === "project") {
                        scrollToSection();
                      }
                    }}
                  >
                    {item.label}
                  </NavLink>
                </Menu.Item>
              ))}
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTest;

import React, { useState } from "react";
import { Menu } from "antd";
import "./Navbar.css";
import { Fade } from "react-bootstrap";
import logo from "../../images/logo-fskn.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    label: "My projects",
    key: "project",
  },
  {
    label: "My CV",
    key: "cv",
  },
  {
    label: "Say Hello",
    key: "contact",
  },
];

const NavbarTest = () => {
  const [current, setCurrent] = useState("project");
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <div className={`menuTest ${mobileIsOpen ? "menuTestHidden" : ""}`}>
        <div className="test">
          <div>
            <Link to="/">
              <img src={logo} className={`logo ${mobileIsOpen ? "logoHidden" : ""}`} alt="logo" />
            </Link>
          </div>
          <Menu
            className="test2"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
      <div className="menuTestMobile">
        <div className="menuMobileContent">
          <div>
            <Link to="/">
              <img src={logo} className={`logo ${mobileIsOpen ? "logoHidden" : ""}`} alt="logo" />
            </Link>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="menuHamburger"
            onClick={() => setMobileIsOpen(!mobileIsOpen)}
          />

          {mobileIsOpen && (
            <Fade direction="down" triggerOnce={true} duration={1000}>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="vertical"
                items={items}
              />
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTest;


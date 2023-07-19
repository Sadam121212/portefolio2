import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import React from "react";
import Footer from "../commons/footer/Footer";
import Navbar from "../commons/navbar/Navbar";
import { HomePage } from "../pages";
import ProjectPlanner from "../pages/project-planner/ProjectPlanner";
import MonCV from "../pages/mon-cv/MonCV";
import NavbarTest from "../commons/navbar/NavbarTest";

export default function Navigation() {
  /*const { pathname } = useLocation();
  console.log(pathname);*/

  return (
    <Router>
      <div className="navigation_main_container">
        <main className="navigation_container">
          <NavbarTest />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/project-planner" element={<ProjectPlanner />} />
            <Route exact path="/mon-cv" element={<MonCV />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

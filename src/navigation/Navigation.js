import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Footer from "../commons/footer/Footer";
import Navbar from "../commons/navbar/Navbar";
import { HomePage } from "../pages";
import ProjectPlanner from "../pages/project-planner/ProjectPlanner";
import MonCV from "../pages/mon-cv/MonCV";
import ErrorPage from "../pages/error-page/ErrorPage";

export default function Navigation() {
  return (
    <Router>
      <div className="navigation_main_container">
        <main className="navigation_container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/project-planner" element={<ProjectPlanner />} />
            <Route exact path="/mon-cv" element={<MonCV />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

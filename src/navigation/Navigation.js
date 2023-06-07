import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Footer from "../commons/footer/Footer";
import Navbar from "../commons/navbar/Navbar";
import { About, HomePage } from "../pages";

export default function Navigation() {
  return (
    <Router>
      <div className="navigation_main_container">
        <main className="navigation_container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/a-propos" element={<About />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

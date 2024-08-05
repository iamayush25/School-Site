import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavbarItems from "./Navbar";

const Header = () => {
  return (
    <>
        <div className="App-header">
          <nav
            className="navbar bbg-secondary border-bottom border-body sticky-top"
            data-bs-theme="dark">
            <div className="school-info d-flex align-items-center">
              <img
                className="icon--school-logo"
                src="/image.png"
                alt="School Logo"
              />
              <div className="school-text ">
                <h2>SPRINGDALES PUBLIC SCHOOL</h2>
                <p>NEW DELHI 110 005, INDIA</p>
              </div>
            </div>
          </nav>
        </div>
      <NavbarItems />
    </>
  );
};

export default Header;

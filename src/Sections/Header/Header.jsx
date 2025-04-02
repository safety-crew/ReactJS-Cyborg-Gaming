import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavItem, { NavItemDropDown } from "../../Components/NavItem/NavItem";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="Website Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <a href="#" className="nav-link">
                  Browse
                </a>
              </NavItem>
              <NavItemDropDown>
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Learn Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Where to go next
                    </a>
                  </li>
                </ul>
              </NavItemDropDown>
              <NavItem>
                <a href="#" className="nav-link">
                  Streams
                </a>
              </NavItem>
              <NavItem>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './navbar.css';
import Slide from "../utils/slide";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-fixed">
        <Link className="navbar-brand" to="/">Anamika</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/gallery">Gallery</Link>
                <Link className="dropdown-item" to="/our-client">Our Client</Link>
                <Link className="dropdown-item" to="/contact-us">Contact us</Link>
              </div>
            </li>
          </ul>
        </div>
       
      </nav>
    );
  }
}

export default Navbar;

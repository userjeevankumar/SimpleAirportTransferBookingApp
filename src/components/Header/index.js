// Header.js
import React from "react";
import { BiTrip } from "react-icons/bi";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <BiTrip className="logo-icon" />
      </div>
      <nav className="header-nav-container">
        <ul className="header-list-container">
          <li className="header-nav-list-details">Destinations</li>
          <li className="header-nav-list-details">My Bookings</li>
          <li className="header-nav-list-details">Travel Agencies</li>
          <li className="header-nav-list-details">Help Centre</li>
          <li className="header-nav-list-details">ENG</li>
          <li className="header-nav-list-details">IND</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>
    </div>
  );
};

export default Header;

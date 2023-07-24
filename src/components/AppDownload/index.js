// src/components/AppDownload.js
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import "./index.css";

const AppDownload = () => {
  return (
    <div className="app-download">
      <h2>Download the Mytransfers app on your mobile phone.</h2>
      <div className="download-mini-container">
        <div className="app-links">
          <img
            src="https://res.cloudinary.com/dgjd6lxkk/image/upload/v1690192987/NxtWave/Interview/Lemigo/travel-planer_mxo6em.jpg"
            alt="travel-planer"
            className="img-travel-planer"
          />
          <div className="linked-content">
            <a href="https://play.google.com/store/apps" className="link-given">
              <BiLogoPlayStore className="app-icon" />
              <div className="link-text">
                Get it on
                <br /> Google Play
              </div>
            </a>
            <a href="https://www.apple.com/app-store/" className="link-given">
              <AiFillApple className="app-icon" />
              <div className="link-text">
                Download it on <br /> Apple Play
              </div>
            </a>
          </div>
        </div>
        <div className="help-links">
          <h3>HELP & INFORMATION</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Help Centre</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="work-with-us">
          <h3>WORK WITH US</h3>
          <ul>
            <li>Travel Agencies</li>
            <li>Drive with us</li>
            <li>Driver platform</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;

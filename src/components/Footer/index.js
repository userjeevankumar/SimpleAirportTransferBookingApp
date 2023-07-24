// Footer.js
import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="bank-names-container">
        <h1 className="sbi">SBI</h1>
        <h1 className="hdfc">HDFC Bank</h1>
        <h1 className="icici">ICICI Bank</h1>
        <h1 className="axis">AXIS Bank</h1>
        <h1 className="union">Union Bank</h1>
      </div>

      <div className="copyright">
        © This My Booking App 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

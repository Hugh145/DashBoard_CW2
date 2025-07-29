import React from "react";
import { useTheme } from "../context/themeColorContext";
import logo from "../assets/Image_logo.png"; // ✅ Adjust if necessary

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const footerClass = theme === "dark"
    ? "bg-dark text-white border-top"
    : "bg-light text-dark border-top";

  return (
    <footer className={`pt-4 pb-3 mt-auto ${footerClass}`}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Column 1: Logo */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center align-items-center">
            <img src={logo} alt="Media Scope Logo" height="200" width={"200"}/>
          </div>

          {/* Column 2: Extra Information */}
          <div className="col-md-4 mb-3">
            <h5>Extra Information</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.apple.com/investor/" target="_blank" rel="noreferrer">Apple Investor</a></li>
              <li><a href="https://www.sony.com/en/SonyInfo/IR/" target="_blank" rel="noreferrer">Sony Financials</a></li>
              <li><a href="https://www.samsung.com/global/ir/" target="_blank" rel="noreferrer">Samsung IR</a></li>
              <li><a href="https://www.bmwgroup.com/en/investor-relations.html" target="_blank" rel="noreferrer">BMW IR</a></li>
              <li><a href="https://www.tatamotors.com/investors/" target="_blank" rel="noreferrer">Tata Motors</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.gcu.ac.uk/" target="_blank" rel="noreferrer">
                  Glasgow Caledonian University
                </a>
              </li>
              <li>
                <a href="https://www.mediascopeanalytics.com/" target="_blank" rel="noreferrer">
                  Media Scope Official Site
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

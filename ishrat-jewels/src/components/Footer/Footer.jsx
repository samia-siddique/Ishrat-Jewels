import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      {/* LEFT */}
      <div className="left-footer">
        <h1>Ishrat</h1>
        <h4>Jewels</h4>

        <p>Premium quality jewelry</p>
        <p>Elegant • Timeless • Affordable</p>
      </div>

      {/* MIDDLE */}
      <div className="mid-footer">
        <h2>Quick Links</h2>

        <a href="#home">• Home</a>
        <a href="#shop">• Shop</a>
        <a href="#shop">• Bangles</a>
        <a href="#shop">• Earrings</a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <a
            href="https://www.instagram.com/ishrat_jewels/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </a>
      </div>

      {/* RIGHT */}
      <div className="right-footer">
        <h2>Contact</h2>

        <p>
          <FontAwesomeIcon icon={faLocationDot} /> Hyderabad, Pakistan
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> ishratjewels@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +92 333 3000000
        </p>
      </div>
    </div>
  );
};

export default Footer;

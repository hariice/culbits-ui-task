import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGooglePlus,
} from "react-icons/fa";
import "../styles/footer.css";


const Footer = () => {
  return (
    <div className="footer-main">
      <div>
        <img
          src="https://img.freepik.com/premium-vector/vector-colorful-logo-design_1002026-45.jpg?w=740"
          className="footer-logo-img"
          height={350}
          width={350}
        />
      </div>
      <div>
        <h1>Address</h1>
        <p>13/2, North street, OMR</p>
        <p>chennai - 609001</p>
      </div>
      <div>
        <div className="footer-icon">
          <FaFacebookF /> <FaGooglePlus /> <FaInstagram /> <FaTwitter />{" "}
          <FaYoutube />{" "}
        </div>
        <div className="footer-info">
          <p>Home</p>
          <p>About</p>
          <p>Privacy policy</p>
          <p>contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-about">
          <h2>LocalNexus</h2>

          <p>
            Connecting local businesses, artisans and customers
            through one trusted platform.
          </p>

          <div className="contact-info">
            <p><FaMapMarkerAlt /> Ghaziabad, India</p>
            <p><FaEnvelope /> support@localnexus.com</p>
            <p><FaPhoneAlt /> +91 9876543210</p>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Business</h3>

          <ul>
            <li>Become Seller</li>
            <li>Add Business</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LocalNexus. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
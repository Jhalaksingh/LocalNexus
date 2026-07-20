import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-box">LN</div>
          <h2>LocalNexus</h2>
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/explore">Explore</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">Sign In</button>
          <button className="seller-btn">Become a Seller</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
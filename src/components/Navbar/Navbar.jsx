import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          <div className="logo-icon">LN</div>
          <span>LocalNexus</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="auth-buttons">
            <button className="login-btn">Sign In</button>
            <button className="register-btn">Become a Seller</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
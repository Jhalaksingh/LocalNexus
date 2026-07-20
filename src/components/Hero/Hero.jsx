import "./Hero.css";
import heroIllustration from "../../assets/images/hero-illustration.png";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-badge">
            🌍 Empowering Local Communities
          </p>

          <h1>
            Discover Trusted <span>Local Businesses</span>,
            Skilled Artisans & Essential Services
          </h1>

          <p className="hero-description">
            LocalNexus helps people find nearby businesses,
            handmade products and trusted local services —
            all in one platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Now</button>
            <button className="secondary-btn">Become a Seller</button>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search businesses, services or artisans..."
            />
            <button>Search</button>
          </div>

          <div className="trending-tags">
            <span>Bakery</span>
            <span>Salon</span>
            <span>Tailor</span>
            <span>Electrician</span>
            <span>Handicrafts</span>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="hero-image">
          <img
            src={heroIllustration}
            alt="Local Businesses"
          />
        </div>

      </div>

      <div className="stats container">

        <div className="stat-card">
          <h2>250+</h2>
          <p>Businesses</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Artisans</p>
        </div>

        <div className="stat-card">
          <h2>80+</h2>
          <p>Services</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Products</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;
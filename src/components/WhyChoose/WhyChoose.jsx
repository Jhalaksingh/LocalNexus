import "./WhyChoose.css";

import {
  FaStore,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why">

      <div className="container">

        <div className="section-title">
          <h2>Why Choose LocalNexus?</h2>
          <p>
            Everything you need to discover trusted local businesses in one
            place.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <FaStore className="why-icon" />
            <h3>Verified Businesses</h3>
            <p>
              Find genuine local shops and trusted service providers.
            </p>
          </div>

          <div className="why-card">
            <FaShieldAlt className="why-icon" />
            <h3>Safe & Reliable</h3>
            <p>
              Ratings and reviews help you choose confidently.
            </p>
          </div>

          <div className="why-card">
            <FaMapMarkerAlt className="why-icon" />
            <h3>Nearby Services</h3>
            <p>
              Discover businesses and artisans near your location.
            </p>
          </div>

          <div className="why-card">
            <FaUsers className="why-icon" />
            <h3>Support Local</h3>
            <p>
              Empower small businesses and skilled artisans in your city.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;
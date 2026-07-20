import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="container cta-content">

        <h2>Ready to Grow with LocalNexus?</h2>

        <p>
          Join thousands of customers, artisans and local businesses
          who are already using LocalNexus.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">
            Explore Businesses
          </button>

          <button className="cta-secondary">
            Register Your Business
          </button>
        </div>

      </div>

    </section>
  );
}

export default CTA;
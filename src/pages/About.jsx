import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "80vh",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            About LocalNexus
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "#6b7280",
              lineHeight: "1.8",
            }}
          >
            LocalNexus is a platform that connects local businesses,
            skilled artisans, service providers, and customers in one
            trusted marketplace. Our mission is to empower local
            communities by making it easy to discover nearby services,
            handmade products, and verified businesses.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
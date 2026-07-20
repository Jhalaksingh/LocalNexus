import "./Businesses.css";

import bakeryImg from "../../assets/images/bakery.jpg";
import salonImg from "../../assets/images/salon.jpg";
import groceryImg from "../../assets/images/grocery.jpg";
import electricianImg from "../../assets/images/electrician.jpg";
import boutiqueImg from "../../assets/images/boutique.jpg";
import handicraftImg from "../../assets/images/handicraft.jpg";

const businesses = [
  {
    name: "Sweet Bakery",
    category: "Bakery",
    rating: "4.8",
    location: "Ghaziabad",
    image: bakeryImg,
  },
  {
    name: "Glam Salon",
    category: "Salon",
    rating: "4.7",
    location: "Noida",
    image: salonImg,
  },
  {
    name: "Fresh Mart",
    category: "Grocery",
    rating: "4.6",
    location: "Delhi",
    image: groceryImg,
  },
  {
    name: "Sharma Electricals",
    category: "Electrician",
    rating: "4.9",
    location: "Ghaziabad",
    image: electricianImg,
  },
  {
    name: "Fashion Hub",
    category: "Boutique",
    rating: "4.5",
    location: "Noida",
    image: boutiqueImg,
  },
  {
    name: "Craft Village",
    category: "Handicrafts",
    rating: "4.8",
    location: "Delhi",
    image: handicraftImg,
  },
];

function Businesses() {
  return (
    <section className="business-section">

      <div className="container">

        <div className="section-title">
          <h2>Featured Local Businesses</h2>
          <p>
            Discover trusted shops, artisans and services around you.
          </p>
        </div>

        <div className="business-grid">

          {businesses.map((business, index) => (

            <div className="business-card" key={index}>

              <div className="business-image">
                <img src={business.image} alt={business.name} />
              </div>

              <div className="business-content">

                <h3>{business.name}</h3>

                <span className="rating">
                  ⭐ {business.rating}
                </span>

                <p className="category">{business.category}</p>

                <p className="location">
                  📍 {business.location}
                </p>

                <button className="business-btn">
                  Explore →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Businesses;
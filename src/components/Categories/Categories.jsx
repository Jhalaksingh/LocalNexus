import "./Categories.css";
import {
  FaStore,
  FaCut,
  FaTools,
  FaUtensils,
  FaShoppingBasket,
  FaPaintBrush,
  FaGraduationCap,
  FaClinicMedical,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaUtensils />,
    title: "Restaurants",
    count: "80+ Businesses",
  },
  {
    icon: <FaShoppingBasket />,
    title: "Grocery",
    count: "120+ Stores",
  },
  {
    icon: <FaCut />,
    title: "Salon",
    count: "60+ Salons",
  },
  {
    icon: <FaStore />,
    title: "Boutique",
    count: "40+ Shops",
  },
  {
    icon: <FaTools />,
    title: "Electrician",
    count: "35+ Experts",
  },
  {
    icon: <FaPaintBrush />,
    title: "Handicrafts",
    count: "90+ Artisans",
  },
  {
    icon: <FaGraduationCap />,
    title: "Coaching",
    count: "50+ Institutes",
  },
  {
    icon: <FaClinicMedical />,
    title: "Medical",
    count: "25+ Clinics",
  },
];

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Featured Categories</h2>
        <p className="section-subtitle">
          Explore businesses and services near you.
        </p>

        <div className="category-grid">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
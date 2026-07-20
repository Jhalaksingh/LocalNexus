import "./Testimonials.css";

import user1 from "../../assets/images/testimonials/user1.jpg";
import user2 from "../../assets/images/testimonials/user2.jpg";
import user3 from "../../assets/images/testimonials/user3.jpg";

const reviews = [
  {
    image: user1,
    name: "Priya Sharma",
    city: "Delhi",
    review:
      "LocalNexus helped me find trusted local businesses within minutes. Amazing experience!",
  },
  {
    image: user2,
    name: "Rahul Verma",
    city: "Noida",
    review:
      "I discovered skilled artisans nearby and even ordered handmade products easily.",
  },
  {
    image: user3,
    name: "Anjali Gupta",
    city: "Ghaziabad",
    review:
      "A simple and reliable platform for finding nearby services. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-title">
          <h2>What Our Users Say</h2>
          <p>Trusted by local buyers and sellers.</p>
        </div>

        <div className="testimonial-grid">

          {reviews.map((review, index) => (

            <div className="testimonial-card" key={index}>

              <img
                src={review.image}
                alt={review.name}
                className="testimonial-image"
              />

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="review">
                "{review.review}"
              </p>

              <h3>{review.name}</h3>

              <span>{review.city}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
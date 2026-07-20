import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Businesses from "../components/Businesses/Businesses";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Businesses />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
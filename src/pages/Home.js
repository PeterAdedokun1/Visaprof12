import React from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Destinations from "../components/sections/Destinations";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Navbar from "../components/sections/Navbar";
import PopularDestinations from "../components/sections/PopularDestinations";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import "../styles/Home.css";
const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Destinations />
      <PopularDestinations />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;

import React from "react";
import "../../styles/Services.css";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import service4 from "../../images/service4.png";

const allServices = [
  {
    img: service1,
    title: "Visa Consultation",
    text: "Our qualified and dependable visa consultants can assis you in obtaining favourable result in your case",
  },
  {
    img: service2,
    title: "Resources",
    text: "We provide our clients with important informations and resources and also the travel requirements needed.",
  },
  {
    img: service3,
    title: "Support",
    text: "We also provide the required document support to ease the application process",
  },
  {
    img: service4,
    title: "Free assessments",
    text: "We help those who want to know their eligibility status by providing free assessments",
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <h1 className="title">What we offer our clients</h1>
      <div className="flex-container">
        {allServices.map((service, index) => (
          <article className="single-service" key={index}>
            <div className="image-container">
              <img src={service.img} alt={service.text} loading={"lazy"} />
            </div>
            <h1>{service.title}</h1>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

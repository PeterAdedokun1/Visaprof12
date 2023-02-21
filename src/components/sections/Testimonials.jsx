import React from "react";
import "../../styles/Testimonials.css";

import testimonial1 from "../../images/testimonial1.png";
import testimonial2 from "../../images/testimonial2.png";
import testimonial3 from "../../images/testimonial3.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";

const testimonials = [
  {
    img: testimonial1,
    name: "Mr Leke",
    testimonial:
      "I'm happy i chose to process my visa with you guys, not a single regret. Visa came right on time with no hassle",
  },
  {
    img: testimonial2,
    name: "Matthew Eke",
    testimonial:
      "The processing was fast, i got the visa right on time. Service is 100.Will definitely be doing more business with you",
  },
  {
    img: testimonial3,
    name: "Debbie",
    testimonial:
      "VISAPROF for the win... Wow!! How were you able to do this so fast. If i didn't get this visa i would have had to cancel my trip",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h1 className="title">
        What <span>our clients</span> have to say
      </h1>
      <div className="testimonials-flex-container">
        {testimonials.map((testimonial, index) => {
          return (
            <article className="single-testimonial" key={index}>
              <div className="image-container">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  loading="lazy"
                />
              </div>

              <aside className="quote-left">
                <FaQuoteLeft />
              </aside>

              <h5>{testimonial.name}</h5>
              <p>{testimonial.testimonial}</p>

              <aside className="quote-right">
                <FaQuoteRight />
              </aside>

              <div className="stars-container">
                {Array(5)
                  .fill(null)
                  .map((item, index) => {
                    return (
                      <i key={index}>
                        <BsFillStarFill />
                      </i>
                    );
                  })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

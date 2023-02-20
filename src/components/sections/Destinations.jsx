import React from "react";
import "../../styles/Destinations.css";

import destination1 from "../../images/destination1.png";
import destination2 from "../../images/destination2.png";
import destination3 from "../../images/destination3.png";
import destination4 from "../../images/destination4.png";

const destinations = [
  { img: destination1, location: "Kenya (E-visa)" },
  { img: destination2, location: "United Arab Emirates" },
  { img: destination3, location: "Nigeria (visa on arrival)" },
  { img: destination4, location: "Egypt" },
];

const Destinations = () => {
  return (
    <section className="destination-container">
      <h1 className="title">
        Top <span>Destinations</span>
      </h1>
      <div className="flex-container">
        {destinations.map((dest, index) => (
          <article className="single-destination" key={index}>
            <img src={dest.img} alt={dest.location} loading="lazy" />
            <div
              className={`destination-footer ${
                index % 2 === 0 ? "yellow" : "darkblue"
              }`}
            >
              <p>{dest.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;

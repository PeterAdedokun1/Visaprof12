import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "../../styles/PopularDestinations.css";
import popular1 from "../../images/popular1.png";
import popular2 from "../../images/popular2.png";
import popular3 from "../../images/popular3.png";
import popular4 from "../../images/popular4.png";
const destinations = [
  {
    location: "United Arab Emirates",
    processingTime: "2 - 3 working days",
    price: "30,000",
    image: popular1,
  },
  {
    location: "Maldives",
    processingTime: "2 - 3 working days",
    price: "28,000",
    image: popular2,
  },
  {
    location: "South Africa",
    processingTime: "2 - 3 working days",
    price: "23,600",
    image: popular3,
  },
  {
    location: "Jordan",
    processingTime: "2 - 3 working days",
    price: "25,000",
    image: popular4,
  },
  {
    location: "Nigeria",
    processingTime: "2 - 3 working days",
    price: "22,0000",
    image: popular3,
  },
  {
    location: "United Kingdom",
    processingTime: "2 - 3 working days",
    price: "21,0000",
    image: popular1,
  },
];

const PopularDestinations = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [current, setCurrent] = useState(0);

  const increaseView = () => {
    if (width > 1200) {
      if (current + 4 <= destinations.length - 1) {
        setCurrent(current + 1);
      }
    } else if (width > 1000) {
      if (current + 3 <= destinations.length - 1) {
        setCurrent(current + 1);
      }
    } else if (width > 800) {
      if (current + 2 <= destinations.length - 1) {
        setCurrent(current + 1);
      }
    } else if (width < 800) {
      if (current + 1 <= destinations.length - 1) {
        setCurrent(current + 1);
      }
    }
  };
  const decreaseView = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <section className="popular-destinations-container">
      <h1 className="title">Popular Destinations</h1>
      <p className="subtitle">Tourists only</p>
      <div className="popular-container">
        {width > 1200 &&
          destinations.slice(current, current + 4).map((item, index) => {
            return <SingleDestination key={index} {...item} />;
          })}

        {width > 1000 &&
          width < 1200 &&
          destinations.slice(current, current + 3).map((item, index) => {
            return <SingleDestination key={index} {...item} />;
          })}
        {width > 800 &&
          width < 1000 &&
          destinations.slice(current, current + 2).map((item, index) => {
            return <SingleDestination key={index} {...item} />;
          })}
        {width < 800 &&
          destinations.slice(current, current + 1).map((item, index) => {
            return <SingleDestination key={index} {...item} />;
          })}
        <button onClick={increaseView} className="next-button">
          <FaChevronCircleRight />
        </button>
        <button onClick={decreaseView} className="prev-button">
          <FaChevronCircleLeft />
        </button>
      </div>
    </section>
  );
};

const SingleDestination = ({ location, processingTime, price, image }) => {
  return (
    <div className="single-destination">
      <header>{location}</header>
      <div className="image-container">
        <img src={image} alt={location} loading="lazy" />
      </div>
      <footer>
        <p>Processing time</p>
        <h3>{processingTime}</h3>
        <h1># {price} per annum</h1>
      </footer>
    </div>
  );
};

export default PopularDestinations;

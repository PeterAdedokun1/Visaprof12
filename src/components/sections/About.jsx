import React from "react";
import "../../styles/About.css";
import chessImg from "../../images/chess-img.png";
import doodle from "../../images/doodle.png";
const About = () => {
  return (
    <section className="about-container">
      <div className="about-flex-container">
        <div className="about-content">
          <h1>
            Africa's <span>leading</span> visa consultants
          </h1>
          <p>
            VISAPROF is a pioneer in Nigeria's online travel industry. The
            organization started in 2020 on the basis of an idea conceived by
            its promoters. VISAPROF is trused by over 200 clients. We assis
            applicants in navigating the visa process to any country which they
            choose to stay or visit.
          </p>
        </div>
        <div className="about-image">
          <img
            alt="chess-img"
            src={chessImg}
            loading={"lazy"}
            className="main-image"
          />
          <img src={doodle} alt="doodle.png" className="doodle" />
        </div>
      </div>
    </section>
  );
};

export default About;

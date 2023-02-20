import React from "react";
import "../../styles/BottomMenu.css";
const details = [
  { title: "200", text: "Clients who have trusted us" },
  { title: "98%", text: "Successful visa rate" },
  { title: "60 hrs", text: "Application approval time" },
];

const BottomMenu = () => {
  return (
    <div className="bottom-menu-container">
      {details.map((detail, index) => {
        return (
          <article
            key={index}
            className={`single-item + ${
              index !== details.length - 1 && "left-border"
            }`}
          >
            <h1>{detail.title}</h1>
            <p>{detail.text}</p>
          </article>
        );
      })}
    </div>
  );
};

export default BottomMenu;

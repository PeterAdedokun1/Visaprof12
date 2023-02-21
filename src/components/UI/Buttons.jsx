import React from "react";
import "../../styles/Button.css";
import { Link } from "react-router-dom";
const MainButton = ({ text }) => {
  return (
    <Link>
      <button className="main-button">{text}</button>
    </Link>
  );
};

const OutlineButton = ({ text }) => {
  return <button className="outline-button">{text}</button>;
};

export { MainButton, OutlineButton };

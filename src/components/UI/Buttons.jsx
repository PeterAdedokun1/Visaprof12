import React from "react";
import "../../styles/Button.css";
const MainButton = ({ text }) => {
  return <button className="main-button">{text}</button>;
};

const OutlineButton = ({ text }) => {
  return <button className="outline-button">{text}</button>;
};

export { MainButton, OutlineButton };

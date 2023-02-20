import React from "react";
import "../../styles/Header.css";
import HeaderContainer from "../UI/HeaderContainer";
import { BsCurrencyExchange } from "react-icons/bs";
import BottomMenu from "../UI/BottomMenu";

const containerDetails = [
  {
    question: "Travelling from?",
    answers: ["Lagos, Nigeria", "Ifo, Nigeria"],
  },
  {
    question: "Travelling to?",
    answers: ["Lagos, Nigeria", "Ifo, Nigeria"],
  },
  {
    question: "Departure date?",
    answers: [],
  },
  {
    question: "Return date?",
    answers: [],
  },
  {
    question: "Travellers?",
    answers: ["1/Economy", "2/Economy"],
  },
  {
    question: "Visa type?",
    answers: ["Tourist Visa", "First class visa"],
  },
];

const Header = () => {
  return (
    <header className="header">
      <h1>Prompt and easy steps for visa processing</h1>
      <div className="blur-container">
        <div className="destination">
          <HeaderContainer
            question={containerDetails[0].question}
            answers={containerDetails[0].answers}
          />
          <span className="exchange-container">
            <BsCurrencyExchange />
          </span>
          <HeaderContainer
            question={containerDetails[1].question}
            answers={containerDetails[1].answers}
          />
        </div>
        <div className="others">
          <HeaderContainer
            question={containerDetails[2].question}
            answers={containerDetails[2].answers}
          />
          <HeaderContainer
            question={containerDetails[3].question}
            answers={containerDetails[3].answers}
          />
          <HeaderContainer
            question={containerDetails[4].question}
            answers={containerDetails[4].answers}
          />
          <HeaderContainer
            question={containerDetails[5].question}
            answers={containerDetails[5].answers}
          />
        </div>
      </div>
      <BottomMenu />
    </header>
  );
};

export default Header;

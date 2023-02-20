import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../../styles/HeaderContainer.css";

const answers = ["Hello ther", "How far?"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (dates) => {
  dates = dates.split("-");
  const date = `${dates[2]} ${months[dates[1] - 1]}, ${dates[0]}`;
  return date;
};

const today = new Date();

const HeaderContainer = ({ question, answers }) => {
  const [currentAnswer, setCurrentAnswer] = useState(
    answers[0] ? answers[0] : ""
  );
  const [answersOpen, setAnswersOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    formatDate(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    )
  );
  return (
    <div className="container">
      <p className="question">{question}</p>
      {answers.length > 0 && (
        <div className="answer">
          <header
            className=""
            onClick={() => {
              setAnswersOpen((prev) => !prev);
            }}
          >
            <p>{currentAnswer}</p>
            <span>
              <FaChevronDown />
            </span>
          </header>
          {answersOpen && (
            <aside>
              {answers.map((answer, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => {
                      setCurrentAnswer(answer);
                      setAnswersOpen(false);
                    }}
                  >
                    {answer}
                  </p>
                );
              })}
            </aside>
          )}
        </div>
      )}
      {answers.length === 0 && (
        <div className="date-selector">
          <label htmlFor="date-select" className="answer">
            <header>
              <p>{currentDate}</p>
              <span>
                <FaChevronDown />
              </span>
            </header>
          </label>
          <input
            type="date"
            id="date-select"
            onChange={(e) => {
              setCurrentDate(formatDate(e.target.value));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderContainer;

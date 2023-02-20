import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../../styles/FAQ.css";

const faqs = [
  {
    questions: "What are the requirements to get a visa",
    answer:
      "The requirements depend on the countriy you're applying to. Log in to see different countries and their requirements",
  },
  {
    questions: "How long does the visa processing take",
    answer: "2-3 working days",
  },
  {
    questions: "Can i still be approved if i have no travel history",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum accusantium deserunt ex nostrum eaque quasi unde",
  },
  {
    questions: "How does VISAPROF obtain a VISA for me",
    answer:
      "Ipsa et, dolor nobis. Exercitationem voluptatum ipsam dolorem repudiandae error deserunt corrupti, quia nostrum!",
  },
  {
    questions: "Do i need my passport at early stages of application",
    answer:
      "Ipsa et, dolor nobis. Exercitationem voluptatum ipsam dolorem repudiandae error deserunt corrupti, quia nostrum!",
  },
  {
    questions: "Must i be vaccinated to travel abroad",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum fugiat necessitatibus molestiae, sunt minus.",
  },
];

const FAQ = () => {
  return (
    <section className="faqs-container">
      <h1 className="title">
        Frequently asked <span>questions</span>
      </h1>
      <div className="faqs">
        {faqs.map((faq, index) => {
          return <Accordion key={index} {...faq} />;
        })}
      </div>
    </section>
  );
};

const Accordion = ({ questions, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="single-accordion">
      <header
        className=""
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <p>{questions}?</p>
        <span>{open ? <BiMinus /> : <BiPlus />}</span>
      </header>
      <div className={`answer ${open && "open"}`}>
        <p>{answer}</p>
      </div>
    </article>
  );
};

export default FAQ;

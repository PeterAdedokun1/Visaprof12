import React from "react";
import "../../styles/Contact.css";
const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="title">Get free assessment today</h1>
      <p className="contact-subtitle">
        Feel free to enquire about any questions you have.
      </p>
      <form className="form-field">
        <div>
          <input type="text" placeholder="Full name" className="input-field" />
        </div>{" "}
        <div>
          <input
            type="text"
            placeholder="Email address"
            className="input-field"
          />
        </div>
        <div>
          <textarea placeholder="Type message here" className="input-field" />
        </div>{" "}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;

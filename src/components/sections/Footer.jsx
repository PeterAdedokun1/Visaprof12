import React from "react";
import "../../styles/Footer.css";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import whatsapp from "../../images/whatsapp.png";
const socials = [
  { link: "", icon: linkedin },
  { link: "", icon: whatsapp },
  { link: "", icon: twitter },
  { link: "", icon: facebook },
  { link: "", icon: instagram },
];

const footerLinks = [
  { title: "Company", links: ["Home", "About Us"] },
  { title: "Legal", links: ["Terms of service", "Privacy Policy"] },
  { title: "Community", links: ["Blog", "FAQs"] },
  { title: "contact", links: ["info@visaprof.com", "07017401336"] },
];

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="socials-container">
          {socials.map((social, index) => {
            return <img src={social.icon} alt="" loading="lazy" key={index} />;
          })}
        </div>
        {footerLinks.map((link, index) => {
          return (
            <article key={index} className="footer-link">
              <h1>{link.title}</h1>
              <ul>
                {link.links.map((href, index) => {
                  return <li key={index}>{href}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </footer>
      <p className="copyright">
        &copy; 2022 VISAPROF Visa processing firm. All rights reserved
      </p>
    </>
  );
};

export default Footer;

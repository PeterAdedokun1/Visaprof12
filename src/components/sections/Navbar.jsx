import React, { useState } from "react";
import "../../styles/Navbar.css";
import logo from "../../images/logo.png";
import { MainButton, OutlineButton } from "../UI/Buttons";
import { Squash } from "hamburger-react";

const navlinks = [
  { href: "", text: "Agent Information" },
  { href: "", text: "Country Requirements" },
  { href: "", text: "About Us" },
  { href: "", text: "Contact Us" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="nav-container">
      <div className="navbar-brand">
        <img src={logo} alt="" className="logo" />
      </div>

      <ul className={`nav-link-container ${navOpen && "open"}`}>
        {navlinks.map((link) => {
          return (
            <li className="nav-link">
              <a href={link.href}>{link.text}</a>
            </li>
          );
        })}
        <div className="links-button">
          <OutlineButton text={"Sign in"} />

          <MainButton text={"Sign up"} />
        </div>
      </ul>
      <div className="buttons-container">
        <OutlineButton text={"Sign in"} />

        <MainButton text={"Sign up"} />
      </div>
      <div className="menu">
        <Squash toggle={setNavOpen} toggled={navOpen} size={24} />
      </div>
    </nav>
  );
};

export default Navbar;

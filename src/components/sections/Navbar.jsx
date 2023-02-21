import React, { useState } from "react";
import "../../styles/Navbar.css";
import logo from "../../images/logo.png";
import { MainButton, OutlineButton } from "../UI/Buttons";
import { Squash } from "hamburger-react";
import { Link } from "react-router-dom";

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
        {navlinks.map((link, index) => {
          return (
            <li className="nav-link" key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          );
        })}
        <div className="links-button">
          <Link to={"/"}>
            <OutlineButton text={"Sign in"} />
          </Link>

          <Link to={"/sign-up"}>
            <MainButton text={"Sign up"} />
          </Link>
        </div>
      </ul>
      <div className="buttons-container">
        <Link to={"/"}>
          <OutlineButton text={"Sign in"} />
        </Link>

        <Link to={"/sign-up"}>
          <MainButton text={"Sign up"} />
        </Link>
      </div>
      <div className="menu">
        <Squash toggle={setNavOpen} toggled={navOpen} size={24} />
      </div>
    </nav>
  );
};

export default Navbar;

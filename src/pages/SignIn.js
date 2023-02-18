import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
//images
import google from "../images/google.png";
import img from "../images/SignImg.png";

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setUser({ email: email, password: password });
    navigate("/home");
  };

  const handleToggle = () => {
    if (type == "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="signIn-container">
      <div className="signIn-img">
        <img src={img} alt="" />
      </div>
      <div className="signIn-form-container">
        <div>
          <h1>Welcome Back!</h1>
          <p className="form-Text">We're always excited to have you back</p>
        </div>
        <form className="signIn-form">

          <input
            type="email"
            placeholder="Email address"
            className="input-text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <div className="password-form">
            <input
              type={type}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={handleToggle}>
              <Icon icon={icon}></Icon>
            </span>
          </div>
          <br />
          <div className="form-checkbox">
            <input type="checkbox" />
            <label htmlFor="">Keep me signed in</label>
          </div>

          <div className="form-button-container">
            <div>
              <button onClick={handleClick}>Sign In</button>
            </div>
            <div>
              <p>or sign in with </p>
            </div>
            <div className="google">
              <img src={google} alt="" />
            </div>
          </div>
        </form>
        <div className="Sign-account">
          <p>Don't have an account?</p>
          <Link to="sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

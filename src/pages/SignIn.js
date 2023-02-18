import React, { useState } from "react";
import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
//images
import google from "../images/google.png";
import img from "../images/SignImg.png";
const SignIn = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

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
          />
          <div className="password-form">
            <input type={type} placeholder="Password" />
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
              <Link to="/home">
                <button>Sign In</button>
              </Link>
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

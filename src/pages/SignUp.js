import React, { useState } from "react";
import "../styles/signUp.css";
import img from "../images/SignImg.png";
import google from "../images/google.png";

import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import { HiExclamationCircle } from "react-icons/hi2";
import { BsPatchCheckFill } from "react-icons/bs";
import { TiTimes } from "react-icons/ti";
//phone input

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const [phone , setPhone] = useState("")

  const emailValidation = (e) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
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
    <div className="sign-up-container">
      <div className="signIn-img">
        <img src={img} alt="" />
      </div>
      <div className="signUp-div-container">
        <div className="">
          <div className="signUp-text">
            <h1>Welcome!</h1>
            <p className="text1">This will only take a minutes</p>
            <div className="signUp-agent">
              <p className="text2">Sign up as an agent instead?</p>
              <a href="">Sign up as agent</a>
            </div>
          </div>

          <div className="signUp-container">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <div className="input-email-field">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="off"
                required
                value={email}
                onChange={emailValidation}
              />
              <div
                className={
                  email.length == 0
                    ? "input-email-icon fill-color"
                    : "input-email-icon error-color"
                }
              >
                {email.length === 0 ? (
                  <HiExclamationCircle />
                ) : message ? (
                  <BsPatchCheckFill />
                ) : (
                  <TiTimes />
                )}
              </div>
            </div>
            {/* Country input */}
            {/* <input type="email" placeholder="Email address" /> */}
            <div className="phone-input-container">
              <PhoneInput
                country={"ng"}
                value={phone}
                onChange={setPhone}
                className="phone-input"
              />
            </div>
            <div className="password-signUP">
              <input type={type} placeholder="Password" />
              <span onClick={handleToggle}>
                <Icon icon={icon}></Icon>
              </span>
            </div>
            <div className="password-signUP">
              <input type={type} placeholder="Confirm Password" />
              <span onClick={handleToggle}>
                <Icon icon={icon}></Icon>
              </span>
            </div>
          </div>
          <div className="form-checkbox" style={{ marginTop: "50px" }}>
            <input type="checkbox" />
            <label htmlFor="">
              I agree to the <span>terms and condition</span>
            </label>
          </div>
        </div>

        <div className="form-button-container">
          <div>
            <Link to="/">
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
        <div className="Sign-account" style={{ justifyContent: "center" }}>
          <p>Already have an account ?</p>
          <Link to="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

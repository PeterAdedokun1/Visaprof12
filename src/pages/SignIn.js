import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Home from "./Home";
//images
import google from "../images/google.png";
import img from "../images/SignImg.png";

const SignIn = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  let item = email.length && password.length;

  const handleClick = async (e) => {
    let item = { email, password };

    let response = await fetch("http://localhost:3001/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    response = await response.json();
    console.log(response);
    localStorage.setItem("user-info", JSON.stringify(response));
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
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
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
              required
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
              <Link to="/home">
                <button
                  disabled={item == 0 ? true : false}
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </Link>
            </div>
            <div>
              <p>or sign in with </p>
            </div>
          
              <div className="google" onClick={handleSignIn}>
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

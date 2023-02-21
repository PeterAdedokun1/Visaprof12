import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Navbar from './pages/Navbar';
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<SignIn setUser={setUser} />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;

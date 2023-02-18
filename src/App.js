import logo from './logo.svg';
import './App.css';
import { Route, Routes, } from "react-router-dom"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
// import Navbar from './pages/Navbar';
function App() {
  return (
    <Routes>
      {/* <Navbar></Navbar> */}
      <Route path="/" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="home" element={<Home/>} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import Appointment from "./components/Pages/Appointment/Appointment";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import LogIn from "./components/Pages/Login/LogIn/LogIn";
import SignUp from "./components/Pages/Login/Signup/SignUp";
import Reviews from "./components/Pages/Reviews/Reviews";
import Footer from "./components/Pages/Sheared/Footer/Footer";
import Header from "./components/Pages/Sheared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

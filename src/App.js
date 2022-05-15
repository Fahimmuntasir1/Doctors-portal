import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import Appointment from "./components/Pages/Appointment/Appointment";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import LogIn from "./components/Pages/Login/LogIn/LogIn";
import RequireAuth from "./components/Pages/Login/RequireAuth";
import SignUp from "./components/Pages/Login/Signup/SignUp";
import Reviews from "./components/Pages/Reviews/Reviews";
import Footer from "./components/Pages/Sheared/Footer/Footer";
import Header from "./components/Pages/Sheared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyAppointment from "./components/Pages/Dashboard/MyAppointment";
import MyReview from "./components/Pages/Dashboard/MyReview";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route
          path="/reviews"
          element={
            <RequireAuth>
              <Reviews />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;

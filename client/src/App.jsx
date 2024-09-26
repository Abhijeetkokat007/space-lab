import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login";
// import Footer from "./components/Footer/Footer";
import Register from "./views/Register/Register";
import Shop from "./views/Shop/Shop";
import Article from "./components/Article/Article";
import OtpPage from "./views/OTP/OptPage";
const Home = lazy(() => import("./views/Home/Home"));
const About = lazy(() => import("./views/About/About"));
const Contact = lazy(() => import("./views/Contact/Contact"));
const Career = lazy(() => import("./views/Career/Career"));
const Community = lazy(() => import("./views/Community/Community"));
const Project = lazy(() => import("./views/Project/Project"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="//otp-verification" element={<OtpPage />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/community" element={<Community />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="Article" element={<Article />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

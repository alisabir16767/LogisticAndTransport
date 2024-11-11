import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/common/navbar"; 
import Home from "./components/pages/home"; 
import AboutUs from "./components/pages/aboutUs"; 
import Services from "./components/pages/services"; 
import Gallery from "./components/pages/gallery"; 
import OurClient from "./components/pages/ourClient"; 
import ContactUs from "./components/pages/contactUs"; 
import Footer from "./components/common/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div >
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-client" element={<OurClient />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About_us from "./components/about_us";
import Contact_us from "./components/contact_us";
import Experience from "./components/experience";
import Explore from "./components/explore";
import Home_2 from "./components/home_2";
import Index from "./components";
import Testing from "./components/testing";
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutUs" element={<About_us />} />
          <Route path="/contactUs" element={<Contact_us />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/home_2" element={<Home_2 />} />
          <Route path="/testing" element={<Testing />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

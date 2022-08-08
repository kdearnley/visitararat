import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Attractions from "./components/pages/Attractions";
import Food from "./components/pages/Food";
import SignUp from "./components/pages/SignUp";
import AraratGalleryTama from "./components/pages/AraratGalleryTama";
import GreenHillLake from "./components/pages/GreenHillLake";
import GumSan from "./components/pages/GumSan";
import Jward from "./components/pages/Jward";
import LangiMorgala from "./components/pages/LangiMorgala";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/food" element={<Food />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/araratgallerytama" element={<AraratGalleryTama />} />
      <Route path="/green-hill-lake" element={<GreenHillLake />} />
      <Route path="/gum-san" element={<GumSan />} />
      <Route path="/jward" element={<Jward />} />
      <Route path="/langi-morgala" element={<LangiMorgala />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;

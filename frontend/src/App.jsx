import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HomeMA from "./pages/HomeMA";

import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeMA" element={<HomeMA />} />
      </Routes>
    </>
  );
}

export default App;

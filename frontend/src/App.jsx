import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Activities from "./components/Activities";
import Friends from "./pages/Friends";
import Inscription from "./pages/Inscription";

import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </>
  );
}

export default App;

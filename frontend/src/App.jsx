import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Activities from "./components/Activities";

import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;

import Activities from "@components/Activities";
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;

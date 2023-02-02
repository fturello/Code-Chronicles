import Activities from "@components/Activities";
import Connexion from "@pages/Connexion";
import Welcome from "@pages/Welcome";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;

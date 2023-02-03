import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Activities from "@components/Activities";
import Connexion from "@pages/Connexion";
import Welcome from "@pages/Welcome";
import Inscription from "./pages/Inscription";
import Friends from "./pages/Friends";
import Intro from "./pages/Intro";

import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </>
  );
}

export default App;

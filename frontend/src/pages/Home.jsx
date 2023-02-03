import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Earth from "../components/Earth";
import Timer from "../components/Timer";

import styles from "../styles/Home.module.css";

function Home() {
  const [period, setPeriod] = useState("");
  const [duration, setDuration] = useState(22921);
  const [start, setStart] = useState(false);
  const navigate = useNavigate();

  const onPressTravel = () => {
    document.documentElement.style.setProperty(
      "--animation-duration",
      `${duration}s`
    );
    setStart(true);
    setTimeout(() => {
      navigate("/intro");
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles["period-choosed"]}>
        {period === ""
          ? "Cliquez sur la planete pour choisir une période"
          : `Periode choisie : ${period}`}{" "}
      </div>
      <div className={styles.timer}>
        {start ? <Timer /> : "2023"}
      </div>
      <Earth setPeriod={setPeriod} />
      {period !== "" && (
        <button
          type="button"
          className={styles["btn-travel"]}
          onClick={onPressTravel}
        >
          Voyager
        </button>
      )}
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Earth from "../components/Earth";

import styles from "../styles/Home.module.css";

function Home() {
  const [period, setPeriod] = useState("");
  const navigate = useNavigate();

  const onPressTravel = () => {
    setTimeout(() => {
      navigate("/HomeMA");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles["period-choosed"]}>
        {period === ""
          ? "Cliquez sur la planete pour choisir une période"
          : `Periode choisie : ${period}`}
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

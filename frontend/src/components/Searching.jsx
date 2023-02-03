import React from "react";
import styles from "../styles/Searching.module.css";

function Searching() {
  return (
    <header className={styles.head}>
      <div className={styles.overlay}>
        <h1 className={styles["the-title"]}>Bienvenue, Jeanne! </h1>
        <h3 className={styles.subtitle}> Que voudrais tu faire aujourd'hui?</h3>
        <p className={styles.paragraph}>Quelques recommandations.</p>
        <br />
        <button className={styles.btn}>Clique ici!</button>
      </div>
    </header>
  );
}

export default Searching;

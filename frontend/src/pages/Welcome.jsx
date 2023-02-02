import React from "react";
import styles from "../styles/Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.contCard}>
      <div className={styles.card}>
        <p className={styles.welcomep}>
          Bienvenue votre inscription a réussi! Vous recevrez un mail d'ici peu
          à cette adresse enjoy!
        </p>
      </div>
    </div>
  );
}
export default Welcome;

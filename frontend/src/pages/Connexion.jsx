import React from "react";
import styles from "../styles/Connexion.module.css";

function Connexion() {
  return (
    <div className={styles.contCard}>
      <div className={styles.card}>
        <h2 className={styles.cardH2}>Connexion</h2>
        <form>
          <label htmlFor="mail">E-Mail</label>
          <input type="text" name="mail" id="mail" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" />
          <button type="button" className={styles["btn-travel"]}>
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
export default Connexion;

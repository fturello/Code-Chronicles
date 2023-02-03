import React from "react";
import styles from "../styles/Registration.module.css";
import { useNavigate } from "react-router-dom";

function Registration({ setRegistration }) {
  const navigate = useNavigate();

  const handleInscription = () => {
    navigate("/inscription");
  };

  return (
    <div className={styles["welcome-container"]}>
      <div className={styles.welcome}>
        <div className={styles["quit-container"]}>
          <button
            onClick={() => setRegistration(false)}
            className={styles.quit}
          >
            <span className={styles.spanQuit}>Back</span>
          </button>
        </div>
        <h1>Super !</h1>
        <p>Nous sommes pressé.e.s de vous voir participer à cette aventure !</p>
        <p>
          Cependant nous avons remarqué que vous n'étiez pas encore inscrit.e
          ...
        </p>
        <button
          onClick={handleInscription}
          className={styles["register-button"]}
        >
          <span className={styles["register-span"]}>
            Je souhaite m'inscrire 📝
          </span>
        </button>
      </div>
    </div>
  );
}

export default Registration;

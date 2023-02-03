import React from "react";
import styles from "../styles/Registration.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Registration({ setRegistration }) {
  const [welcomeStyles, setWelcomeStyles] = useState(
    `${styles.welcome} ${styles["animate-in"]}`
  );

  const navigate = useNavigate();

  const handleInscription = () => {
    navigate("/inscription");
  };

  const handleQuit = () => {
    setWelcomeStyles(`${styles.welcome} ${styles["animate-out"]}`);
    setTimeout(() => {
      setRegistration(false);
    }, 500);
  };

  return (
    <div className={styles["welcome-container"]}>
      <div className={welcomeStyles}>
        <div className={styles["quit-container"]}>
          <button onClick={() => handleQuit()} className={styles.quit}>
            <span className={styles.spanQuit}>Back</span>
          </button>
        </div>
        <h1 className={styles["welcome-h1"]}>Super !</h1>
        <p className={styles["register-p1"]}>
          Nous sommes pressé.e.s de vous voir participer à cette aventure !
        </p>
        <p className={styles["register-p2"]}>
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

Registration.propTypes = {
  setRegistration: PropTypes.func.isRequired,
};

export default Registration;

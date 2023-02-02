import React, { useState } from "react";
import styles from "../styles/Inscription.module.css";

function Inscription() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className={styles.contCard}>
      <div className={styles.card}>
        <div className={styles.checklog}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              onClick={() => setShowLoginForm(!showLoginForm)}
            />
            <span className={styles.slider} />
          </label>
        </div>
        {showLoginForm ? (
          <div>
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
        ) : (
          <div>
            <h2 className={styles.cardH2}>Inscription</h2>
            <form>
              <label htmlFor="firstName">Prénom</label>
              <input type="text" name="firstName" id="firstName" />
              <label htmlFor="lastName">Nom</label>
              <input type="text" name="lastName" id="lastName" />
              <label htmlFor="mail">E-Mail</label>
              <input type="text" name="mail" id="mail" />
              <label htmlFor="password">Choississez votre mot de passe</label>
              <input type="password" id="password" name="password" />
              <label htmlFor="password">Répéter votre mot de passe</label>
              <input type="password" id="password" name="password" />
              <button type="button" className={styles["btn-travel"]}>
                Inscription
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inscription;

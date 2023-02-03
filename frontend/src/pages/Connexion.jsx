import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Connexion.module.css";

function Connexion() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", {
        firstname,
        lastname,
        mail,
        password,
      })
      .then(() => {
        navigate("/profils");
      })
      .catch((err) => console.error(err));
  };
  const handleCo = (e) => {
    e.preventDefault();
    navigate("/profil");
  };

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
              <button
                onClick={handleCo}
                type="button"
                className={styles["btn-connexion"]}
              >
                Connexion
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className={styles.cardH2}>Inscription</h2>
            <form>
              <label htmlFor="firstname">Prénom</label>
              <input
                onChange={handleFirstname}
                value={firstname}
                type="text"
                name="firstname"
                id="firstname"
              />
              <label htmlFor="lastName">Nom</label>
              <input
                onChange={handleLastname}
                value={lastname}
                type="text"
                name="lastname"
                id="lastname"
              />
              <label htmlFor="mail">E-Mail</label>
              <input
                onChange={handleMail}
                value={mail}
                type="text"
                name="mail"
                id="mail"
              />
              <label htmlFor="password">Choississez votre mot de passe</label>
              <input
                onChange={handlePass}
                value={password}
                type="password"
                id="password"
                name="password"
              />
              <label htmlFor="password">Répéter votre mot de passe</label>
              <input type="password" id="password" name="password" />
              <button
                type="button"
                onClick={handleSubmit}
                className={styles["btn-connexion"]}
              >
                Inscription
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default Connexion;

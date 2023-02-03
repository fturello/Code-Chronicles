import React from "react";
import styles from "../styles/SideBar.module.css";
import jeanne from "../assets/jeanne.png";
function About() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.avatar}>
        <img src={jeanne} className={styles.image} alt="jeanne d'arc" />
      </div>

      <h1 className={styles.utilisateur}>Jeanne d'Arc</h1>
      <h1 className={styles.description}>28 ans, Single</h1>
      <br />
      <a href="/profil" className={styles.links}>
        Mon Profil
      </a>
      <a href="/" className={styles.links}>
        Home
      </a>
      <a href="./Activities" className={styles.links}>
        Activités
      </a>
      <a href="/friends" className={styles.links}>
        Amis
      </a>
      <a href="" className={styles.links}>
        Galerie
      </a>
    </div>
  );
}
export default About;

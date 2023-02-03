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
      <a href="">Home</a>
      <a href="">Activités</a>
      <a href="">Communauté</a>
      <a href="">Galerie</a>
    </div>
  );
}
export default About;

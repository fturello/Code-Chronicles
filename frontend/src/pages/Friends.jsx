import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Friends.module.css";

import profile from "../assets/profile.png";

function Friends() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={profile} alt="profile picture" className={styles.picture} />
        <div className={styles.name}>Jacquouille Dumarais</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate
          deleniti.
        </div>
        <div className={styles.footer}>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </div>
      </div>
      <div className={styles.card}></div>
    </div>
  );
}

export default Friends;

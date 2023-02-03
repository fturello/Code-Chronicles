import React from "react";
import styles from "../styles/Intro.module.css";

function Intro() {
  return (
    <div className={styles.stargate}>
      <div className={styles["stargate__portal"]}>
        <video onLoad="this.play()" autoPlay muted playsinline loop>
          <source
            src="https://res.cloudinary.com/shanomurphy/video/upload/v1520181785/water_obm8lb.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/shanomurphy/video/upload/v1520181785/water_obm8lb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
export default Intro;

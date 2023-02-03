import React from "react";
import { useEffect, useRef } from "react";
import styles from "../styles/Intro.module.css";
import sound from "../assets/soundIntro.mp3";

function Intro() {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
    setTimeout(() => {
      window.location.assign("http://localhost:3000/activities");
    }, 5000);
  }, []);
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
        <audio ref={audioRef} src={sound}>
          <track kind="captions" />
        </audio>
      </div>
    </div>
  );
}
export default Intro;

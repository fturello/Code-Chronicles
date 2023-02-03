import React, { useState } from "react";

import styles from "../styles/Friends.module.css";

import profile from "../assets/profile.png";

function Friends() {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const onPressSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name}>Jacquouille Dumarais</div>
        <img src={profile} alt="profile picture" className={styles.picture} />
        <div className={styles.title}>The Enchanter</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate
          deleniti.
        </div>
        <button
          type="button"
          className={styles["btn-unsubscribe"]}
          onClick={onPressSubscribe}
        >
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        <div className={styles.footer}></div>
      </div>
      <div className={styles.card}>
        <div className={styles.name}>Jacquouille Dumarais</div>
        <img src={profile} alt="profile picture" className={styles.picture} />
        <div className={styles.title}>The Terrifier</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate
          deleniti.
        </div>
        <button
          type="button"
          className={styles["btn-unsubscribe"]}
          onClick={onPressSubscribe}
        >
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        <div className={styles.footer}></div>
      </div>
      <div className={styles.card}>
        <div className={styles.name}>Jacquouille Dumarais</div>
        <img src={profile} alt="profile picture" className={styles.picture} />
        <div className={styles.title}>The Carrier</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate
          deleniti.
        </div>
        <button
          type="button"
          className={styles["btn-unsubscribe"]}
          onClick={onPressSubscribe}
        >
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}

export default Friends;

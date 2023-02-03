import React, { useState } from "react";

import SideBar from "../components/SideBar";

import styles from "../styles/Friends.module.css";

import profile from "../assets/profile.png";
import picture from "../assets/1wall.jpg";

function Friends() {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const onPressSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles["first-line"]}>
        <div className={styles.card}>
          <div className={styles.name}>Le Loup</div>
          <img src={profile} alt="profile picture" className={styles.picture} />
          <div className={styles.title}>The Wolf</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
          </div>
          <button
            type="button"
            className={styles["btn-unsubscribed"]}
            onClick={onPressSubscribe}
          >
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
          </button>
          <div className={styles.footer}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>Jacquouille Dumarais</div>
          <img
            src="https://i.pinimg.com/564x/c1/e4/88/c1e488cf4eac2a0b612a7299fef58a66.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Terrifier</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
          <div className={styles.name}>Genevieve Bourgeois</div>
          <img
            src="https://i.pinimg.com/564x/c0/84/89/c084890c833eeaccea262acb9a5e8c8f.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Carrier</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
          <div className={styles.name}>Pierre Delaloutre</div>
          <img
            src="https://i.pinimg.com/564x/50/c9/2c/50c92ccde7b860bdc6b9d81d38f30d40.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Carrier</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
      <div className={styles["second-line"]}>
        <div className={styles.card}>
          <div className={styles.name}>Francis Cabrel</div>
          <img
            src="https://i.pinimg.com/564x/9b/28/dd/9b28dd6d955be798a63fb1c9ea7b7aeb.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Enchanter</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
          <div className={styles.name}>Adrien Preu</div>
          <img
            src="https://i.pinimg.com/564x/9b/28/dd/9b28dd6d955be798a63fb1c9ea7b7aeb.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Terrifier</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
          <div className={styles.name}>Philippe Serpentard</div>
          <img
            src="https://i.pinimg.com/736x/e9/bb/37/e9bb37189524834592f64aeca676b78d.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Carrier</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
          <div className={styles.name}>Annaelle Fontaine</div>
          <img
            src="https://i.pinimg.com/564x/b8/c4/d9/b8c4d99e9d46595021f105a355fb55b4.jpg"
            alt="profile picture"
            className={styles.picture}
          />
          <div className={styles.title}>The Carrier</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit et
            cupiditate deleniti.
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
    </div>
  );
}

export default Friends;

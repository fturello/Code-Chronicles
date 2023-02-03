import React from "react";
import styles from "../styles/FriendsCompo.module.css";

function FriendsCompo() {
  return (
    <section className={styles.team}>
      <h2 className={styles["section-heading"]}>Amis plus proches </h2>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/564x/c1/e4/88/c1e488cf4eac2a0b612a7299fef58a66.jpg"
            alt=""
          />
          <span className={styles.nme}>Arthur</span>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/564x/c0/84/89/c084890c833eeaccea262acb9a5e8c8f.jpg"
            alt=""
          />
          <span className={styles.nme}>Suchitra Tiwari</span>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/564x/50/c9/2c/50c92ccde7b860bdc6b9d81d38f30d40.jpg"
            alt=""
          />
          <span className={styles.nme}>Sajid Ghani</span>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/564x/9b/28/dd/9b28dd6d955be798a63fb1c9ea7b7aeb.jpg"
            alt=""
          />
          <span className={styles.nme}>Dhriti</span>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/736x/e9/bb/37/e9bb37189524834592f64aeca676b78d.jpg"
            alt=""
          />
          <span className={styles.nme}>Milind</span>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/564x/b8/c4/d9/b8c4d99e9d46595021f105a355fb55b4.jpg"
            alt=""
          />
          <span className={styles.nme}>Srikant Tiwari</span>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src="https://i.pinimg.com/736x/e9/bb/37/e9bb37189524834592f64aeca676b78d.jpg"
            alt=""
          />
          <span className={styles.nme}>Major Sameer</span>
        </div>
      </div>
    </section>
  );
}

export default FriendsCompo;

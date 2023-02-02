import React from "react";
import styles from "../styles/Friends.module.css";

function Searching() {
  return (
    <section className={styles.team}>
      <h2 className={styles["section-heading"]}>Our Team </h2>
      <div className={styles.container}>
        <div className={profile}>
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span className={styles.nme}>Kalyan</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
            alt=""
          />
          <span className={styles.nme}>Suchitra Tiwari</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
            alt=""
          />
          <span className={styles.nme}>Sajid Ghani</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span className={styles.nme}>Dhriti</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span className={styles.nme}>Milind</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
            alt=""
          />
          <span className={styles.nme}>Srikant Tiwari</span>
        </div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
            alt=""
          />
          <span className={styles.nme}>Major Sameer</span>
        </div>
      </div>
    </section>
  );
}

export default Searching;

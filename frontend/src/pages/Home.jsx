import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/activities">Activities</Link>
      <div>Home</div>
    </div>
  );
}

export default Home;

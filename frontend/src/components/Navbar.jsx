import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Navbar.module.css";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles["navbar-brand"]}>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.connect}>
          <Link to="/Connexion" className={styles.btnLog}></Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

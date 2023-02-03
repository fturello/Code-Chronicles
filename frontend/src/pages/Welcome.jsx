import { useEffect, useState } from "react";
import React from "react";
import styles from "../styles/Welcome.module.css";
import axios from "axios";

function Welcome() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
    setTimeout(() => {
      window.location.assign("http://localhost:3000/activities");
    }, 3000);
  }, []);

  return (
    <div className={styles.contCard}>
      <div className={styles.card}>
        <h2 className={styles.titleWel}>Bienvenue</h2>
        {users.slice(-1).map((user) => (
          <>
            <p className={styles.welcomep}>
              <strong>{user.firstname}</strong> votre inscription a réussi! Vous
              recevrez un mail d'ici peu à cette adresse{" "}
              <strong>{user.mail}</strong> enjoy!
            </p>
          </>
        ))}
      </div>
    </div>
  );
}
export default Welcome;

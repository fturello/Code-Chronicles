import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PopUp from './PopUp';
import Registration from './Registration';

import styles from '../styles/Activities.module.css';

const backEndURL = import.meta.env.VITE_BACKEND_URL;

function Activities() {
  const [activePopUp, setActivePopUp] = useState(true);
  const [activities, setActivities] = useState([]);
  const [registration, setRegistration] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/activities')
      .then((res) => setActivities(res.data))
  }, []);

  const handleRegistration = () => {
    setRegistration(true);
  };

  return (
    <div className={styles.general}>
      {activePopUp && <PopUp setActivePopUp={setActivePopUp} />}
      {registration && <Registration setRegistration={setRegistration} />}
      <div className={styles["cards-container"]}>
        <div className={styles.cards}>
          {activities
            .filter((activity) => activity.id < 6)
            .map((activity) => (
              <div className={styles.card}>
                <div className={styles.presentation}>
                  <h1>
                    <span className={styles.span}>{activity.title}
                    </span>
                  </h1>
                  <p>{activity.description}</p>
                  <button onClick={handleRegistration}>Ça m'intéresse !</button>
                </div>
                <img className={styles["activity-image"]} src={`${backEndURL}/assets/images/${activity.image}`} alt='' />
              </div>)
            )}
        </div>
        <div className={styles.cards}>
          {activities
            .filter((activity) => activity.id > 5)
            .map((activity) => (
              <div className={styles.card}>
                <div className={styles.presentation}>
                  <h1>
                    <span className={styles.span}>{activity.title}
                    </span>
                  </h1>
                  <p>{activity.description}</p>
                  <button onClick={handleRegistration}>Ça m'intéresse !</button>
                </div>
                <img className={styles["activity-image"]} src={`${backEndURL}/assets/images/${activity.image}`} alt='' />
              </div>)
            )}
        </div>
      </div>
    </div>
  )
}

export default Activities;
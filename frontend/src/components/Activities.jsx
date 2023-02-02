import React from 'react';
import { useState, useEffect } from 'react';

import PopUp from './PopUp';

import styles from '../styles/Activities.module.css';

function Activities() {
  const [activePopUp, setActivePopUp] = useState(true);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/scenario_cards')
  //     .then((res) => res.data)
  // }, []);

  return (
    <div className={styles.general}>
      {activePopUp && <PopUp setActivePopUp={setActivePopUp} />}
      <div className={styles["cards-container"]}>
        <div class={styles.cards}>
          <div className={styles.card}>
            <div className={styles.presentation}>
            <h1>
              <span className={styles.span}>ALLER AU BAL
              </span>
            </h1>
            <p>Participez à des rencontres légères et valsez à droite ou à gauche selon ce que votre coeur vous dit (activité adaptative selon votre rang)</p>
            <button>Ça m'intéresse !</button>
            </div>
            <img className={styles["activity-image"]} src='src/assets/Bal1.png' alt='' />
          </div>
          <div className={styles.card}>
            <div className={styles.presentation}>
            <p>
              <span className={styles.span}>
                HOVER ME
              </span>
            </p>
            <p>Participez</p>
            </div>
            <img className={styles["activity-image"]} src='src/assets/Bal1.png' alt='' />
          </div>
          <div className={styles.card}>
            <div className={styles.presentation}>
            <p>
              <span className={styles.span}>
                ALLER AU BAL
              </span>
            </p>
            <p>Participez à des rencontres légères et valsez à droite ou à gauche selon ce que votre coeur vous dit (activité adaptative selon votre rang)</p>
            </div>
            <img className={styles["activity-image"]} src='src/assets/Bal1.png' alt='' />
          </div>
          <div className={styles.card}>
            <div className={styles.presentation}>
            <p>
              <span className={styles.span}>
                HOVER ME
              </span>
            </p>
            <p>Participez</p>
            </div>
            <img className={styles["activity-image"]} src='src/assets/Bal1.png' alt='' />
          </div>
          <div className={styles.card}>
            <div className={styles.presentation}>
            <p>
              <span className={styles.span}>
                HOVER ME
              </span>
            </p>
            <p>Participez</p>
            </div>
            <img className={styles["activity-image"]} src='src/assets/Bal1.png' alt='' />
          </div>
        </div>
        <div class={styles.cards}>
          <div><p><span className={styles.span}>HOVER ME</span></p></div>
          <div><p><span className={styles.span}>HOVER ME</span></p></div>
          <div><p><span className={styles.span}>HOVER ME</span></p></div>
          <div><p><span className={styles.span}>HOVER ME</span></p></div>
          <div><p><span className={styles.span}>HOVER ME</span></p></div>
        </div>
      </div>
    </div>
  )
}

export default Activities
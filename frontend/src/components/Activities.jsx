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
        <div class={styles.card1}>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
        </div>
        <div class={styles.card1}>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
          <div><p><span>HOVER ME</span></p></div>
        </div>
      </div>
    </div>
  )
}

export default Activities
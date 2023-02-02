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
      {activePopUp && <PopUp setActivePopUp={setActivePopUp}/>}
      <div class={styles.card1}>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
      </div>
      
    </div>
  )
}

export default Activities
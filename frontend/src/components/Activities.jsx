import React from 'react';
import { useState } from 'react';

import PopUp from './PopUp';

import styles from '../styles/Activities.module.css';

function Activities() {
  const [activePopUp, setActivePopUp] = useState(true);

  return (
    <div className={styles.general}>
      {activePopUp && <PopUp setActivePopUp={setActivePopUp}/>}
      <div class={styles.card1}>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
      </div>
      
    </div>
  )
}

export default Activities
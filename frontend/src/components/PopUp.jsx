import React from 'react';
import styles from '../styles/PopUp.module.css';

function PopUp({ setActivePopUp }) {
    const handlePopUp = () => {
        setActivePopUp(false);
    };

    return (
        <div className={styles["welcome-container"]}>
            <div className={styles.welcome}>
                <h1>Bienvenue sur la page des activités de notre région !</h1>
                <p>Vous serez accompagné.e lors de votre séjour par Messires Godefroy de Montmirail et Jacquouille la Fripouille, vos bien braves guides lors de ce voyage.</p>
                <img className={styles.image} src='src/assets/Godefroy_et_Jacquouille.jpg' alt='Godefroy_et_Jacquouille' />
                <button onClick={handlePopUp}>Ok merci ⚔️</button>
            </div>
        </div>
    )
}

export default PopUp
import React from 'react';
import styles from '../styles/Registration.module.css';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();

    const handleInscription = () => {
        navigate("/inscription");
    };

    return (
        <div className={styles["welcome-container"]}>
            <div className={styles.welcome}>
                <h1>Super !</h1>
                <p>Nous sommes pressés de vous voir participer à cette aventure !</p>
                <p>Cependant nous avons remarqué que vous n'étiez pas encore inscrit...</p>
                <button onClick={handleInscription}>Je souhaite m'inscrire 📝</button>
            </div>
        </div>
    )
}

export default Registration;
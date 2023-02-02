import React from "react";
import styles from "../styles/Activity.module.css";

function Activity() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Activités cette semaine !</h1>
      </header>
      <figure className={styles["featured-image-1"]}>
        <img
          src="https://media.discordapp.net/attachments/1070259408241688677/1070717539329527899/Bal1.png?width=1014&height=676"
          alt="Photo by Karina Carvalho on Unsplash"
        />
      </figure>
      <div className={styles["number-1"]}>1</div>
      <article className={styles["article-article-1"]}>
        <h2 className={styles["h-2"]}>
          Rencontrer des damoiseau et damoiselles?
        </h2>
        <p>
          Participez à des rencontres légères et valsez à droite ou à gauche
          selon ce que votre coeur vous dit (activité adaptative selon votre
          rang).
        </p>
      </article>
      <figure className={styles["featured-image-2"]}>
        <img
          src="https://media.discordapp.net/attachments/1070259408241688677/1070711082592784424/Merlin.png?width=1014&height=676"
          alt="Photo by JC Dela Cuesta on Unsplash"
        />
      </figure>
      <div className={styles["number-2"]}>2</div>
      <article className={styles["article-article-2"]}>
        <h2 className={styles["h-2"]}>Merlin?</h2>
        <p>
          Prendre des cours de magie avec Merlin l’enchanteur','Venez découvrir
          comment fabriquer des potions magiques ou encore faire disparaître
          votre belle-mère grâce à un sort.
        </p>
      </article>
      <figure className={styles["featured-image-3"]}>
        <img
          src="https://media.discordapp.net/attachments/1070259342386921533/1070709084543799387/Crusader.png?width=1014&height=676"
          alt="Photo by Seth Doyle on Unsplash"
        />
      </figure>
      <div className={styles["number-3"]}>3</div>
      <article className={styles["article-article-3"]}>
        <h2 className={styles["h-2"]}>Les Croisades</h2>
        <p>
          Défendez le royaume contre les envahisseurs et boutez les païens hors
          de nos frontières (activité adaptative selon que vous êtes pieux ou
          païen).
        </p>
      </article>
      <figure className={styles["featured-image-4"]}>
        <img
          src="https://media.discordapp.net/attachments/1070259342386921533/1070709084153720893/Round-Table.png?width=1014&height=676"
          alt="Photo by Tim Marshall on Unsplash"
        />
      </figure>
      <div className={styles["number-4"]}>4</div>
      <article className={styles["article-article-4"]}>
        <h2 className={styles["h-2"]}>tour de la table ronde</h2>
        <p>
          Combats et tournois, des loisirs spectaculaires','Venez profiter des
          prochaines festivités lors desquelles de preux chevaliers se
          disputeront le coeur de la jeune princesse (estomacs sensibles
          s’abstenir).
        </p>
      </article>
    </div>
  );
}

export default Activity;

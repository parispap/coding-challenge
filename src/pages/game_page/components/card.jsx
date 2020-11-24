import React from "react";
import styles from "./styles/card.module.css";

const Card = () => {
  return (
    <div className={styles.card_container}>
      <div  onClick = {
            (e)=>{e.target.parentNode.classList.toggle(`${styles.is_flipped}`)}
        }className={`${styles.inner_container}`}>
            <div className={`${styles.card_face} ${styles.card_back}`}></div>
        <div className={`${styles.card_face} ${styles.card_front}`}>FRONT</div>

        

      </div>
    </div>
  );
};

export default Card;

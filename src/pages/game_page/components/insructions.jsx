import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import styles from './styles/instructions.module.css'

const PopInstructions = () => {
  return (
    <Popup
      trigger={<a className={styles.button}> How it Works </a>}
      modal
      open
    >
      {(close) => (
        <div className={styles.modal}>
          <div className={styles.header}> Modal Title </div>
          <div className={styles.content}>

              <h3>How it Works?</h3>

              <p>
                  In order to play you must place a bet by clicking at the Place your Bet to start button.
              </p>
          </div>
          <div className={styles.actions}>
            <button
              className="button"
              onClick={() => {
                
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PopInstructions;

import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PlaceBetImage from "../../../assets/images/place_bet.jpg";
import BoardPic from "../../../assets/images/board.jpg";
import PlayForfeitPics from "../../../assets/images/play_forfeit.jpg";
import HiddenCards from "../../../assets/images/hidden_card.jpg";
import LoseCard from "../../../assets/images/lose_card_instructions.jpg";

import styles from "./styles/instructions.module.css";

const PopInstructions = () => {
  return (
    <Popup trigger={<a href="#" className={styles.button}> How to Play </a>} modal>
      {(close) => (
        <div className={styles.modal}>
          <div className={styles.header}> </div>
          <div className={styles.content}>
            <h3>How it Works?</h3>

            <div className={styles.how_to_container}>
              <div>
                <p>
                  In order to play you must place a bet by clicking at the Place
                  your Bet to start button.
                </p>

                <img width="100px" src={PlaceBetImage} alt="place bet button" />
              </div>

              <div>
                <img width="100px" src={BoardPic} alt="board pic" />
                <p>
                  4 cards will appear. Three of them are winning cards with a
                  fixed value and one of them is a losing card{" "}
                </p>
              </div>

              <div>
                <p>Player can choose if he wants to play or forfeit</p>

                <img
                  width="100px"
                  src={PlayForfeitPics}
                  alt="play and forfeit buttons"
                />
              </div>

              <div>
                <img width="100px" src={HiddenCards} alt="hidden cards" />

                <p>
                  The cards are hidden and shuffled and user must reveal one of
                  them. If the revealed card is a winning card, he wins its
                  value (€25) Χ the number of the round. This prize is added at
                  the winning pool. For example if 1 round is played, player
                  wins €25 * 1 = €25
                </p>
              </div>

              <div>
                <p>
                  But if player reveals the losing card he loses all his winning
                  pool and he has to pay again to satrt a new game.
                </p>

                <img src={LoseCard} alt="lose" />
              </div>

              <div>
                <img
                  width="100px"
                  height=""
                  src={PlayForfeitPics}
                  alt="forfeit option"
                />

                <p>
                  Player can also choose to forfeit. Then, the winning pool is
                  added at his balance and he must pay to start a new game from
                  scratch.
                </p>
              </div>
            </div>
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

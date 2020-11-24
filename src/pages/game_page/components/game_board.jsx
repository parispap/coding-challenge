//COMPONENT THAT HOLDS THE CARDS AND PLAY AND FORFEIT BUTTONS
import React from "react";
import Card from "./card";
import styles from "./styles/game_board.module.css";
import { connect } from "react-redux";
import { hide_cards, forfeit } from "../../../redux/UserInfo/UserInfo.actions";

const GameBoard = (props) => {
  //THE NUMBER OF CARDS IS SET DYNAMICALLY BY LOOPING HROUGH THE REDUX STATE AND CREATE CARD COMPONENTS

  //   INITIATE ARRAY OF CARD COMPONENTS
  const card_array = [];

  //   READ HOW MANY CARDS SHOULD BE CREAED
  const number_of_cards = props.card_properties.value.length;

  //   LOOP THROUGH CARD PROPERTIES AND CREATE THE CARD COMPONENTS
  for (let i = 0; i < number_of_cards; i++) {
    card_array.push(
      <Card
        card_value={props.card_properties.value[i]}
        card_face={props.card_properties.card_face[i]}
      />
    );
  }

  return (
    <div className={styles.board_container}>
      <h3>There are only 3 Winning Cards... Can you find them?</h3>

      <div className={styles.inner_board_container}>{card_array}</div>

      <div className={styles.button_row}>
        {/* IF GAME HAS NOT BEEN STARTED GIVE USER THE OPTION TO FORFEIT OR PLAY */}
        <button
          onClick={(e) => {
            if (!props.game_running && props.game_started) {
              props.hide_cards(props.card_properties);
            }
          }}
        >
          Play
        </button>

        <button onClick={() => props.forfeit()}>Forfeit</button>
      </div>
    </div>
  );
};

// REDUX MAP STATE TO PROPS FUNCTION
const mapStateToProps = (state) => {
  return {
    ...state,
    flipped: state.UserInfo.cards.flipped,
    card_properties: state.UserInfo.cards.card_properties,
    game_running: state.UserInfo.game_running,
    game_started: state.UserInfo.game_started,
  };
};

//REDUX MAP DISPATCH TO PROPS FUNCTION
const mapDispatchToProps = (dispatch) => {
  return {
    hide_cards: (card_properties) => {
      dispatch(hide_cards(card_properties));
    },
    forfeit: () => {
      dispatch(forfeit());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

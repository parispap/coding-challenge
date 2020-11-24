//COMPONENT OF PLACE BET BUTTON

import React from "react";
import { connect } from "react-redux";
import { start_new_round } from "../../../redux/UserInfo/UserInfo.actions";

const PlaceBetButton = (props) => {
  return (
    <div>
      <button
        id="start_game_button"
        onClick={() => {
          if (!props.game_running && !props.game_started) {
            props.start_new_round();
          }
        }}
      >
        Place your Bet to Start
        <br />

        {/* GET FIXED BET STATE DYNAMICALLY */}
        {`€${props.fixed_bet}`}
      </button>
    </div>
  );
};

//REDUX MAP STATE TO PROPS FUNCTION
const mapStateToProps = (state) => {
  return {
    ...state,
    fixed_bet: state.UserInfo.fixed_bet,
    game_started: state.UserInfo.game_started,
    game_running: state.UserInfo.game_running,
  };
};

//REDUX MAP DISPATCH TO PROPS FUNCTION
const mapDispatchToProps = (dispatch) => {
  return {
    start_new_round: () => {
      dispatch(start_new_round());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceBetButton);

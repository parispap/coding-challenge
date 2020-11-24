//COMPONENT FOR KEEPING ROUND, WINNING POOL AND HOW TO WORK INFORMATION
import React from "react";
import { connect } from "react-redux";
import styles from "./styles/round_stats.module.css";
import PopInstructions from "./insructions";

const RoundStats = (props) => {
  return (

    // GET NUMBER OF ROUNDS PLAYED, WINNING POOL DYNAMICALLY
    <div className={styles.flex_container}>
      <span>Round: {props.game_round}</span>
      <span>Wining Pool: {props.winning_pool}</span>
      <span>
        {/* POP UP HOW TO WORK COMPONENT */}
        <PopInstructions />
      </span>
    </div>
  );
};

// REDUX MAP STATE TO PROPS FUNCTION
const mapStateToProps = (state) => {
  return {
    ...state,
    game_round: state.UserInfo.game_round,
    winning_pool: state.UserInfo.winning_pool,
  };
};

// REDUX MAP DISPATCH TO PROPS FUNCTION
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundStats);

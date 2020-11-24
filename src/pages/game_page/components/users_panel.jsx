// COMPONENT HOLDING ALL USER PERSISTED INFO ----> NICKNAME, BALANCE AND LOG STATUS
import React from "react";
import { connect } from "react-redux";
import { log_out_user } from "../../../redux/UserInfo/UserInfo.actions";
import styles from "./styles/users_panel.module.css";
import { Link } from "react-router-dom";

const UsersPanel = (props) => {
  return (
    <div className={styles.flex_container}>
      <span>{props.Nickname}</span>
      <span>Balance: {props.Balance}</span>
      <span>
        {/* IF USER CLICKS LOGOUT DISPATCH A LOG OUT ACTION AND NAVIGATE TO LANDING PAGE */}
        <Link to={{ pathname: "/" }} onClick={() => props.log_out_user()}>
          Logout
        </Link>
      </span>
    </div>
  );
};

// REDUX MAP STATE TO PROPS FUNCTION
const mapStateToProps = (state) => {
  return {
    ...state,
    Nickname: state.UserInfo.Nickname,
    Balance: state.UserInfo.Balance,
    game_round: state.UserInfo.game_round,
  };
};

// REDUX MAP DISPATCH TO PROPS FUNCTION
const mapDispatchToProps = (dispatch) => {
  return {
    log_out_user: () => dispatch(log_out_user()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPanel);

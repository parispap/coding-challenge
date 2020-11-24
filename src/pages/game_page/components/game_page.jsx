import React, { Component } from "react";
import UsersPanel from "./users_panel";
import PlaceBetButton from "./PlaceBetButton";
import { connect } from "react-redux";
import styles from "./styles/game_page.module.css";
import RoundStats from "./round_stats";
import GameBoard from "./game_board";
class GamePage extends Component {
  componentDidUpdate() {
    sessionStorage.setItem("user_session", JSON.stringify(this.props.UserInfo));
  }

  render() {
    return (
      <div className={styles.container}>
        

        <div>
          <GameBoard />
        </div>

        <div className={styles.round_stats}>
          <RoundStats />
        </div>
        <div className={styles.user_panel}>
          <UsersPanel />
        </div>

        <div className={styles.bet_buttons}>
          <PlaceBetButton />
        </div>

        

      


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    game_started: state.UserInfo.game_started,
  };
};

export default connect(mapStateToProps, null)(GamePage);

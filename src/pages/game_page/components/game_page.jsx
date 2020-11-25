// MAIN COMPONENT FOR GAME PAGE
import React, { Component } from "react";
import UsersPanel from "./users_panel";
import PlaceBetButton from "./PlaceBetButton";
import { connect } from "react-redux";
import styles from "./styles/game_page.module.css";
import RoundStats from "./round_stats";
import GameBoard from "./game_board";
import EventViewer from "./EventViewer";

// USE A CLASS TO TAKE ADVANTAGE OF REACTS LIFECYCLE METHODS
class GamePage extends Component {

  //SAVE USER INFO AT SESSION AT EVERY UPDATE (IN ORDER TO KEEP BALANCE INTACT)
  componentDidUpdate() {
    sessionStorage.setItem("user_session", JSON.stringify(this.props.UserInfo));
  }

  
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.gameboard}>
          <GameBoard />
        </div>


        <div className={styles.bet_buttons}>
          <PlaceBetButton />
        </div>
        

        <div className={styles.bottom_panel}>
         <div className={styles.event_viewer}>
          <span>Event Viewer</span>
          <hr/>
          <EventViewer/>
        </div>

        <div>
        <div className={styles.round_stats}>
          <RoundStats />
        </div>
        <div className={styles.user_panel}>
          <UsersPanel />
        </div>
        </div>
        </div>

      </div>
    );
  }
}

//REDUX MAP STATE TO PROPS FUNCTION
const mapStateToProps = (state) => {
  return {
    ...state,
    game_started: state.UserInfo.game_started,
  };
};

export default connect(mapStateToProps, null)(GamePage);

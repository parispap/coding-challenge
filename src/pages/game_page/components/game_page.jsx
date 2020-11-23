import React, { Component } from "react";
import UsersPanel from "./users_panel";
import PlaceBetButton from "./PlaceBetButton";
import { connect } from "react-redux";
import styles from "./styles/game_page.module.css";
import deck from '../../../assets/images/deck.jpg';

class GamePage extends Component {
  componentDidUpdate() {
    sessionStorage.setItem("user_session", JSON.stringify(this.props.UserInfo));
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.deck_container}><img width="60px" src={deck} alt=""/></div>

        <div>{/* card board */}</div>

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
  };
};

export default connect(mapStateToProps, null)(GamePage);

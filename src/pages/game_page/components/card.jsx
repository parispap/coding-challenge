import React from "react";
import styles from "./styles/card.module.css";
import { connect } from "react-redux";
import {reveal_card} from '../../../redux/UserInfo/UserInfo.actions';

const Card = ({card_value, card_face,...props}) => {

    
  return (
    <div disabled={true} className={`${styles.card_container} ${styles[`${props.shuffled}`]}`}>

        
      <div  onClick={(e)=>{
        
        if (props.game_running===true) {
        props.reveal_card(card_value)
        }
        
      }
    
    } className={`${styles.inner_container} ${styles[`${props.flipped}`]}`}>
        <div  className={`${styles.card_face} ${styles.card_back}`}></div>
        <div
          style={{backgroundImage:`url(${card_face})`}}
          className={`${styles.card_face} ${styles.card_front}`}
        ></div>
      </div>

      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    flipped: state.UserInfo.cards.flipped,
    shuffled:state.UserInfo.cards.shuffled,
    game_running:state.UserInfo.game_running
    
  };

};

const mapDispatchToProps=(dispatch)=> {
  return {
    reveal_card:(card_value)=> {dispatch(reveal_card(card_value))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);

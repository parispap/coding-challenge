import React from "react";
import { connect } from "react-redux";
import styles from './styles/round_stats.module.css';
import PopInstructions from './insructions'

const RoundStats = (props) => {
  return (
    

      
        <div className={styles.flex_container}>
          
          <span>Round: {props.game_round}</span>
          <span>Wining Pool: {props.winning_pool}</span>
          <span><PopInstructions/></span>
  
        </div>
      
    
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    game_round:state.UserInfo.game_round,
    winning_pool:state.UserInfo.winning_pool
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoundStats);

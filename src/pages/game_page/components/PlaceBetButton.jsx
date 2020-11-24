import React from "react";
import { connect } from "react-redux";
import {start_new_round} from '../../../redux/UserInfo/UserInfo.actions';

const PlaceBetButton = (props) => {
  return (
    <div>
      

      <button id="start_game_button" onClick={()=>{
        
        if (!props.game_running && !props.game_started) {
        props.start_new_round()}}}>
        Place your Bet to Start<br/>{`€${props.fixed_bet}`}
      </button>
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        ...state,
        game_round:state.UserInfo.game_round,
        fixed_bet:state.UserInfo.fixed_bet,
        game_started:state.UserInfo.game_started,
        game_running:state.UserInfo.game_running,
        Balance:state.UserInfo.Balance
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        start_new_round:() => {dispatch(start_new_round())}
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(PlaceBetButton);

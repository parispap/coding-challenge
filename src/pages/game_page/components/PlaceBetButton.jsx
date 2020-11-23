import React from "react";
import { connect } from "react-redux";
import {start_new_round} from '../../../redux/UserInfo/UserInfo.actions';

const PlaceBetButton = (props) => {
  return (
    <div>
      

      <button onClick={()=>props.start_new_round()}>
        Start Game
      </button>
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        ...state,
        game_round:state.UserInfo.game_round
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        start_new_round:() => {dispatch(start_new_round())}
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(PlaceBetButton);

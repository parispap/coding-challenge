import React from "react";
import { connect } from "react-redux";
import {log_out_user} from '../../../redux/UserInfo/UserInfo.actions';

const UsersPanel = (props) => {
  return (
    <div>
      <div>how it works</div>

      <div>start and stop buttons</div>

      <div>
        <div>
          <span>Nickname: {props.Nickname}</span>
          <span>
            <button onClick={()=> props.log_out_user()}>Logout</button>
          </span>
  <span>Balance: {props.Balance}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    Nickname: state.UserInfo.Nickname,
    Balance:state.UserInfo.Balance
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        log_out_user: ()=> dispatch(log_out_user())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersPanel);

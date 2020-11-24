import React from "react";
import { connect } from "react-redux";
import {log_out_user} from '../../../redux/UserInfo/UserInfo.actions';
import styles from './styles/users_panel.module.css';
import {Link} from 'react-router-dom';

const UsersPanel = (props) => {
  return (
    

      
        <div className={styles.flex_container}>
          
          <span>{props.Nickname}</span>
          
          <span>Balance: {props.Balance}</span>
          <span>
            <Link to={{pathname:"/"}} onClick={()=> props.log_out_user()}>Logout</Link>
          </span>
  
        </div>
      
    
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    Nickname: state.UserInfo.Nickname,
    Balance:state.UserInfo.Balance,
    game_round:state.UserInfo.game_round
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        log_out_user: ()=> dispatch(log_out_user())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersPanel);

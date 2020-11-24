//INPUT NICKNAME COMPONENT
import React from "react";
import { save_user } from "../../../redux/UserInfo/UserInfo.actions";

//Import Connect component from react-redux
import { connect } from "react-redux";

//NICKNAME COMPONENT
const InputNickname = (props) => {
  return (
    <div>
      <input onChange={(e) => props.save_user(e)} type="text" name="Nickname" />
    </div>
  );
};

//DISPATCH FUNCTION TO REPORT A USER ACTION TO REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    save_user: (e) => dispatch(save_user(e.target.value)),
  };
};

//CONNECT COMPONENT TO REDUX
export default connect(null, mapDispatchToProps)(InputNickname);

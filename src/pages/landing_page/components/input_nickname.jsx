import React from 'react';
import {save_user} from '../../../redux/UserInfo/UserInfo.actions';

//Import Connect component from react-redux
import {connect} from 'react-redux';


const InputNickname = (props) => {
    return(
        <div>
            <input onChange={(e)=> props.save_user(e)} type="text" name="Nickname"/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        save_user: (e)=> dispatch(save_user(e.target.value))
    }
}

const mapStateToProps = state => {
    return {
        name: state.UserInfo.nickname
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputNickname);
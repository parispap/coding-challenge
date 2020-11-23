import React from 'react';
import {log_in_user} from '../../../redux/UserInfo/UserInfo.actions';

//Import Connect component from react-redux
import {connect} from 'react-redux';


const ButtonStart = (props) => {
    return(
        <div>
            <button onClick={()=>props.log_in_user()}>Start Game</button>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        log_in_user: ()=> dispatch(log_in_user())
    }
}


export default connect(null,mapDispatchToProps)(ButtonStart);
//Import combineReducers module to combine all the reducers from our Redux Store to one root reducer
import { combineReducers } from 'redux';

import UserInfoReducer from './UserInfo/UserInfo.reducer';


const AllReducers = combineReducers({

    UserInfo: UserInfoReducer,

});

export default AllReducers;
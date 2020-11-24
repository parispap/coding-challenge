//Import combineReducers module to combine all the reducers from our Redux Store to one root reducer
import { combineReducers } from "redux";

//IMPORT USER INFO REDUCER
import UserInfoReducer from "./UserInfo/UserInfo.reducer";

//COMBINE ALL REDUX REDUCERS (CURRENTLY ONLY USERINFO)
const AllReducers = combineReducers({
  UserInfo: UserInfoReducer,
});

export default AllReducers;

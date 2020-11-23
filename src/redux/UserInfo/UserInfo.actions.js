import { LOG_IN, LOG_OUT, SAVE_USER, START_NEW_ROUND, REFRESH_PAGE } from "./UserInfo.types";

//ACTION TO BE EXECUTED WHEN USER LOGS IN
export const log_in_user = () => {
  return {
    type: LOG_IN,
  };
};

//ACTION TO BE EXECUTED WHEN USER LOGS OUT
export const log_out_user = () => {
  return {
    type: LOG_OUT,
  };
};

//ACTION TO BE EXECUTED WHEN USER FILLS THEIR NICKNAME
export const save_user = (name) => {
  return {
    type: SAVE_USER,
    payload: name,
  };
};

//ACTION TO BE EXECUTED WHEN A NEW ROUNDS STARTS
export const start_new_round = () => {
  return {
    type: START_NEW_ROUND,
  };
};

//ACTION TO BE EXECUTED WHEN PAGE IS REFRESHED
export const refresh_page = () => {
        

    return {
      type: REFRESH_PAGE,
    }
    
}

  
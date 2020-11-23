import { LOG_IN, LOG_OUT, SAVE_USER } from "./UserInfo.types";

const InitialState = {
  isLoggedIn: false,
  Nickname:""
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };

      case SAVE_USER:
      
          return {
              ...state,
            Nickname:action.payload
          }

          case LOG_IN:
              console.log(state.Nickname)
              if (state.Nickname==="" || state.Nickname.length<3) {
                  alert("Please provide a nickname with 3 or more characters")
                  return state
              }

          return {
              ...state,
              isLoggedIn:true
          }
              
    default:
      return state;
  }
};

export default reducer;

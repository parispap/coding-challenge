import { LOG_IN, LOG_OUT, SAVE_USER,START_NEW_ROUND, REFRESH_PAGE } from "./UserInfo.types";

const InitialState = {
  Nickname:"",
  Balance:50000,
  isLoggedIn:false,
  fixed_bet:2500,
  game_round:0,
  winning_pool:0,
  

};

if (sessionStorage.getItem("user_session")) {
  const json_session_data = JSON.parse(
    sessionStorage.getItem("user_session")
  );
  InitialState.Nickname=json_session_data.Nickname;
  InitialState.isLoggedIn = json_session_data.isLoggedIn;
  InitialState.Balance = json_session_data.Balance;

  

  }
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      if (sessionStorage.getItem("user_session")) {
        sessionStorage.clear();
      }
      return {
        ...state,
        isLoggedIn: false,
        Balance:50000,
        game_round:0

      };

    case SAVE_USER:
      return {
        ...state,
        Nickname: action.payload,
      };

    case LOG_IN:
      if (state.Nickname === "" || state.Nickname.length < 3) {
        alert("Please provide a nickname with 3 or more characters");
        return state;
      }

      if (!sessionStorage.getItem("user_session")) {
        sessionStorage.setItem(
          "user_session",
          JSON.stringify({
            Nickname: state.Nickname,
            Balance: state.Balance,
            isLoggedIn: true,
          })
        );
      }
      return {
        ...state,
        isLoggedIn: true,
      };

      case START_NEW_ROUND:

      document.querySelector("#start_game_button").disabled=true;
        return {
          ...state,
          Balance:state.Balance-state.fixed_bet,
          game_round:state.game_round + 1
        };

        case REFRESH_PAGE:

          if (action.payload) {
            return {
              ...state,
              
            }
          }

          else {
          return {
            ...state,

          }
        }

    default:
      return state;
  };
};

export default reducer;

import {
  LOG_IN,
  LOG_OUT,
  SAVE_USER,
  START_NEW_ROUND,
  REFRESH_PAGE,
  HIDE_CARDS,
  REVEAL_CARD,
  FORFEIT
} from "./UserInfo.types";


const InitialState = {
  Nickname: "",
  Balance: 50000,
  isLoggedIn: false,
  fixed_bet: 2500,
  game_round: 0,
  winning_pool: 0,
  game_started: false,
  game_running:false,
  cards:{
    shuffled:false,
    flipped:false,
    card_properties:{
      value:[],
      card_face:[]
    }
  }

};

if (sessionStorage.getItem("user_session")) {
  const json_session_data = JSON.parse(sessionStorage.getItem("user_session"));
  InitialState.Nickname = json_session_data.Nickname;
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
        Balance: 50000,
        game_round: 0,
        game_started: false,
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

      return {
        ...state,
        Balance: state.Balance - state.fixed_bet,
        game_started:true,
        cards: {
          ...state.cards,
          card_properties:action.payload
        }
      };

    case REFRESH_PAGE:
      if (action.payload) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
        };
      }

      case HIDE_CARDS:
        
        return {
          ...state,
          game_running:true,
          game_round: state.game_round + 1,
          cards: {
            ...state.cards,
            flipped:"is_flipped",
            shuffled:"shuffled",
            
            card_properties:action.payload
          }
          

        }

        case REVEAL_CARD:
          
        if (action.payload>0) {
          alert(`Congratulations €${action.payload*state.game_round} has been added to your winning pool`)
          return {
            ...state,
            game_running:false,
            winning_pool:state.winning_pool + state.game_round*action.payload,
            cards:{
              ...state.cards,
              flipped:false,
                           
            }
          }

        }

        else {
          setTimeout(()=>alert('Oops! You lost your winning pool...'),500)
          
          return {
            ...state,
            game_running:false,
            winning_pool:0,
            game_round:0,
            game_started:false,
            cards:{
              ...state.cards,
              flipped:false,
              card_properties:{
                value:[],
                card_face:[]
              }
              
                           
            }
          }

        }

case FORFEIT:

if (state.game_round===0) {
  alert("You can forfeit, no round has been played!")
  return state
}

else {
alert(`Well Done! €${state.winning_pool} has been added to your Balance!`)

  return {
    ...state,
    Balance:state.Balance + state.winning_pool,
    winning_pool:0,
    game_round:0,
    game_started:false,
    game_running:false,
    cards: {
      ...state.cards,
      flipped:false,
      card_properties: {
        value:[],
        card_face:[]
      }
    }
  }
}
    default:
      return state;
  }
};

export default reducer;

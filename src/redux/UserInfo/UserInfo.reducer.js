//THIS IS THE USERINFO REDUX REDUCER FILE. THE WEB APP CONNECTS DISPATCHES CERTAIN TYPES OF ACTIONS TO THE REDUCER AND A NEW STATE IS RETURNED

//IMPORT ALL TYOES OF ACTION
import {
  LOG_IN,
  LOG_OUT,
  SAVE_USER,
  START_NEW_ROUND,
  HIDE_CARDS,
  REVEAL_CARD,
  FORFEIT,
} from "./UserInfo.types";

//INITIATE STATE WITH THE FOLLOWING VARIABLES:

// Nickname: THE NAME OF THE USER (PERSISTS ON REFRESH AND THROUGH THE APP) - STRING
// Balance: THE BALANCE OF THE USER (PERSISTS ON REFRESH AND THROUGH THE APP) - INT
// isLoggedIn: A CONDITION TO DECIDE IF USER IS LOGGED IN OR NOT - BOOL
// fixed_bet: THE FIXED BET TO INITIATE A GAME - INT
// game_round: THE NUMBER OF ROUNDS FOT THE CURRENT GAME - INT
// winning_pool: THE AMOUNT THAT USER WINNED FROM ALL ROUNDS - INT
// game_started: A BOOLEAN TO SHOW IF USER HAS PLACED A BET - BOOL
// game_running: A BOOLEAN TO SHOW IF USER CHOOSES TO PLAY AND GUESS THE CARD - BOOL
// cards: AN OBJECT WITH THE FOLLOWING PROPERTIES:
// shuffled: A BOOLEAN THAT SHOWS IF THE CARDS ARE SHUFFLED BEFORE USER GETS TO CHOOSE ONE - BOOL
// flipped: A VARIABLE THAT IS USED TO FLIP THE CARDS TO FRONT AND BACK SIDE - STRING
//card_properties: AN OBJECT HOLDING ALL THE CARDS PROPERTIES
//value: AN ARRAY OF THE CARDS VALUES
//card_face:AN ARRAY OF THE CARD IMAGES

const InitialState = {
  Nickname: "",
  Balance: 50000,
  isLoggedIn: false,
  fixed_bet: 2500,
  game_round: 0,
  winning_pool: 0,
  game_started: false,
  game_running: false,
  cards: {
    shuffled: false,
    flipped: false,
    card_properties: {
      value: [],
      card_face: [],
    },
  },
};

//CHECK IF THERE IS A SESSION STORED. IF IT IS THEN MODIFY INITIAL STATE AND KEEP USER'S BALANCE, NICKNAME AND LOGIN STATUS
if (sessionStorage.getItem("user_session")) {
  const json_session_data = JSON.parse(sessionStorage.getItem("user_session"));
  InitialState.Nickname = json_session_data.Nickname;
  InitialState.isLoggedIn = json_session_data.isLoggedIn;
  InitialState.Balance = json_session_data.Balance;
}

//DECLARE THE REDUCER FUNCTION. IT WILL ACCEPT ACTION ARGUMENTS AND RETURN A NEW STATE ACCORDINGLY.
const reducer = (state = InitialState, action) => {
  //SWITCH SATTEMENT FOR DIFFERENT TYPE OF ACTIONS
  switch (action.type) {
    // IF USER LOGS OUT
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

    // IF USER TYPES INSIDE INPUT OF THE LANDING PAGE
    case SAVE_USER:
      return {
        ...state,
        Nickname: action.payload,
      };

    // IF USER LOGS IN. SETS THE SESSION STORAGE FOR PERSISTENCE
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

    // IF USER STARTS A NEW GAME ROUND AND PLACES A BET
    case START_NEW_ROUND:
      if (state.Balance < state.fixed_bet) {
        alert(
          "Your Balance funds are not sufficient. Please try again with a new session"
        );
        sessionStorage.clear();
        return {
          ...state,
          isLoggedIn: false,
          Balance: 50000,
          game_round: 0,
          game_started: false,
        };
      }
      return {
        ...state,
        Balance: state.Balance - state.fixed_bet,
        game_started: true,
        cards: {
          ...state.cards,
          card_properties: action.payload,
        },
      };

    // IF USER CHOOSE TO PLAY INSTEAD OF FORFEIT
    case HIDE_CARDS:
      return {
        ...state,
        game_running: true,
        game_round: state.game_round + 1,
        cards: {
          ...state.cards,
          flipped: "is_flipped",
          shuffled: "shuffled",

          card_properties: action.payload,
        },
      };

    // IF USER CLICKS ON A HIDDEN CARD TO REVEAL IT
    case REVEAL_CARD:
      if (action.payload > 0) {
        alert(
          `Congratulations €${
            action.payload * state.game_round
          } has been added to your winning pool`
        );
        return {
          ...state,
          game_running: false,
          winning_pool: state.winning_pool + state.game_round * action.payload,
          cards: {
            ...state.cards,
            flipped: false,
          },
        };
      } else {
        alert("Oops! You lost your winning pool...");

        return {
          ...state,
          game_running: false,
          winning_pool: 0,
          game_round: 0,
          game_started: false,
          cards: {
            ...state.cards,
            flipped: false,
            card_properties: {
              value: [],
              card_face: [],
            },
          },
        };
      }

    // IF USER CHOOSES TO FORFEIT
    case FORFEIT:
      if (state.game_round === 0) {
        alert("You can forfeit, no round has been played!");
        return state;
      } else {
        alert(
          `Well Done! €${state.winning_pool} has been added to your Balance!`
        );

        return {
          ...state,
          Balance: state.Balance + state.winning_pool,
          winning_pool: 0,
          game_round: 0,
          game_started: false,
          game_running: false,
          cards: {
            ...state.cards,
            flipped: false,
            card_properties: {
              value: [],
              card_face: [],
            },
          },
        };
      }
    default:
      return state;
  }
};

export default reducer;

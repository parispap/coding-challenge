//THIS IS THE USERINFO REDUX ACTION FILE. THIS IS WHERE ALL ACTIONS OF USERINFO REDUCER ARE DEFINED.

//IMPORT ALL THE TYPES OF USERINFO ACTIONS THAT WILL BE PASSED TO REDUCER
import {
  LOG_IN,
  LOG_OUT,
  SAVE_USER,
  START_NEW_ROUND,
  HIDE_CARDS,
  REVEAL_CARD,
  FORFEIT,
} from "./UserInfo.types";

//IMPORT CARD IMAGE TO USE AS THE WINNING CARD
import card_win from "../../assets/images/card_front.png";

//IMPORT CARD IMAGE TO LOSE AS THE LOSING CARD
import card_lose from "../../assets/images/lose_card.png";

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
//THE GENERAL IDEA IS TO PRESENT THE CARDS TO USER AND "BIND" THEM WITH A VALUE.
//A POSITIVE VALUE MEANS THAT IT IS A WINNING CARD AND A NEGATIVE VALUE REFERS TO LOSING CARD.
//THE PRESENTED CARDS ARE NOT IN THE SAME POSITION EACH ROUND AND ITS STATE IS A RESULT OF RANDOM CALCULATIONS.
// THIS HELPS TO ADD MORE FUNCTIONALITY IF IT IS REQUIRED BY ADDING MORE CARDS OR VALUE COMBINATIONS IN FUTURE.

export const start_new_round = () => {
  //DEFINE THE CORRESPONDING VALUES ARRAY OF WINNING AND LOSING CARDS (A FIXED VALUE WAS USED)
  const values = [+25, -25, +25, +25];

  //DEFINE THE CORRESPONDING IMAGE ARRAY FOR WINNING AND LOSING CARDS
  const card_face = [card_win, card_lose, card_win, card_win];

  //INITIATE CARD_PROPS OBJECT TO STORE THE VALUES
  const cards_props = {
    value: [],
    card_face: [],
  };

  //LOOP THROUGH THROUGH DEFINED VALUES ARRAY (CURRENTLY 4 MAY BE 52 IN FUTURE FOR EXAMPLE).
  //SHUFFLES CARDS AND CREATE ASSIGNS NEW VALUE AND IMAGE ARRAYS THAT WILL BE PASSED TO REDUCER

  //LOOP UNTIL VALUE ARRAY IS EMPTY
  while (values.length > 0) {
    //GENERATE A RANDOM INDEX FROM 0-LENGTH OF VALUE
    let random_index = Math.floor(Math.random() * values.length);

    //ASSIGN RANDOM VALUE AND IMAGE PAIR TO CARD PROPS
    cards_props.value.push(values[random_index]);
    cards_props.card_face.push(card_face[random_index]);

    // REMOVE VALUE AND IMAGE PAIR THAT WAS JUST ASSIGNED
    values.splice(random_index, 1);
    card_face.splice(random_index, 1);
  }

  return {
    type: START_NEW_ROUND,
    payload: cards_props,
  };
};

// ACTION TO BE EXECUTED WHEN USER PRESS "PLAY" TO START A NEW ROUND
// AFTER THE CARDS HAVE BEEN REVEALED TO USER, THEY ARE HIDDEN AND SHUFFLED
// HIDE ACTION TAKES RESULTED CARD PROPERTIES FROM START NEW ROUND ACTION AND SHUFFLES THEM
export const hide_cards = (card_properties) => {
  // INITIATE SHUFFLED CARD PROPERTIES OBJECT
  const cards_shuffled_props = {
    value: [],
    card_face: [],
  };

  //LOOP ALL CARD PROPERTIES UNTIL THE VALUE ITEM IS EMPTY
  while (card_properties.value.length > 0) {
    //GENERATE A RANDOM INDEX FROM 0-LENGTH OF VALUE
    let random_index = Math.floor(Math.random() * card_properties.value.length);

    //ASSIGN RANDOM VALUE AND IMAGE PAIR TO SHUFFLED CARD PROPS

    cards_shuffled_props.value.push(card_properties.value[random_index]);
    cards_shuffled_props.card_face.push(
      card_properties.card_face[random_index]
    );

    // REMOVE VALUE AND IMAGE PAIR THAT WAS JUST ASSIGNED

    card_properties.value.splice(random_index, 1);
    card_properties.card_face.splice(random_index, 1);
  }

  return {
    type: HIDE_CARDS,
    payload: cards_shuffled_props,
  };
};

//ACTION TO BE EXECUTED WHEN USER CLICKS ON A HIDDEN CARD TO REVEAL IT
export const reveal_card = (card_value) => {
  return {
    type: REVEAL_CARD,
    payload: card_value,
  };
};

//ACTION TO BE EXECUTED WHEN USER CHOOSES TO FORFEIT
export const forfeit = () => {
  return {
    type: FORFEIT,
  };
};

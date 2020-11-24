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
import card_win from "../../assets/images/card_front.png";
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
export const start_new_round = () => {
  
  const type_array = ["win", "lose", "win", "win"];
const values = [+25, -25, +25, +25];
const card_face = [card_win, card_lose, card_win, card_win];

  const cards_props = {
    type: [],
    value: [],
    card_face: [],
  };
  while (type_array.length > 0) {
    let random_index = Math.floor(Math.random() * type_array.length);
    cards_props.type.push(type_array[random_index]);
    cards_props.value.push(values[random_index]);
    cards_props.card_face.push(card_face[random_index]);

    type_array.splice(random_index, 1);
    values.splice(random_index, 1);
    card_face.splice(random_index, 1);
  }

  return {
    type: START_NEW_ROUND,
    payload: cards_props,
  };
};

//ACTION TO BE EXECUTED WHEN PAGE IS REFRESHED
export const refresh_page = () => {
  return {
    type: REFRESH_PAGE,
  };
};

export const hide_cards = (card_properties) => {
  console.log(card_properties);

  const cards_shuffled_props = {
    type: [],
    value: [],
    card_face: [],
  };

  while (card_properties.type.length > 0) {
    let random_index = Math.floor(Math.random() * card_properties.type.length);
    cards_shuffled_props.type.push(card_properties.type[random_index]);
    cards_shuffled_props.value.push(card_properties.value[random_index]);
    cards_shuffled_props.card_face.push(
      card_properties.card_face[random_index]
    );

    card_properties.type.splice(random_index, 1);
    card_properties.value.splice(random_index, 1);
    card_properties.card_face.splice(random_index, 1);
  }

  return {
    type: HIDE_CARDS,
    payload: cards_shuffled_props,
  };
};

export const reveal_card = (card_value) => {
  
  return {
    type: REVEAL_CARD,
    payload: card_value
  };
};

export const forfeit = () => {
  return {
    type:FORFEIT,

  }
}
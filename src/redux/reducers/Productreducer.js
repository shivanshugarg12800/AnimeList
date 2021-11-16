import { action_types } from "../constants/action_types";

const initialState = {
  animes: [],
};

export const animeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case action_types.SET_ANIMES:
      return { ...state, animes: payload };

    default:
      return state;
  }
};

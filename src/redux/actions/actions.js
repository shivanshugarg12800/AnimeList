import { action_types } from "../constants/action_types";

export const setAnimes = (animes) => {
  return {
    type: action_types.SET_ANIMES,
    payload: animes,
  };
};

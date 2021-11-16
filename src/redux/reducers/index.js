import { combineReducers } from "redux";
import { animeReducer } from "./Productreducer";

export const reducers = combineReducers({
  allAnimes: animeReducer,
});

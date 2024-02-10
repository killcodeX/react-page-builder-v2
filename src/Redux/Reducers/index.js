import { combineReducers } from "redux";
import BuildReducer from "./buildReducers";

export default combineReducers({
  build: BuildReducer,
});
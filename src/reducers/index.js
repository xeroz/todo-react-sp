import { combineReducers } from "redux";
import errorsReducers from "./errorsReducers";

export default combineReducers({
  errors: errorsReducers
});

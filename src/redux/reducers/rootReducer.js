import { combineReducers } from "redux";

import { userReducer } from "./login/userReducer";
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;

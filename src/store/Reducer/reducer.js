import { combineReducers } from "redux";

import reducer from "./rootReducer";

export default combineReducers({
  root: reducer
});

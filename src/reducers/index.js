import { combineReducers } from "redux";

import navigator from "./navigator";
import person from "../screens/Person/reducer";

export default combineReducers({
  navigator,
  person,
});

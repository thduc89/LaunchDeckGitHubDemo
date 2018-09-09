import Immutable from "immutable";
import { GET_USER_SUCCESS, GET_USER_FAIL } from "./action";

const initialState = Immutable.Map({
  user: null,
});

const actionsMap = {
  GET_USER_SUCCESS: (state, action) => {
    return state.set("user", action.payload.user);
  },
  GET_USER_FAIL: (state, action) => {
    return state.set("message", action.payload.message);
  },
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};

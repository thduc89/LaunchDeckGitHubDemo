import { RootNavigator } from "../navigator";

const initialState = {
  index: 0,
  routes: [{ key: "Init", routeName: "RootNavigator" }],
};

export default (state = initialState, action) =>
  RootNavigator.router.getStateForAction(action, state);

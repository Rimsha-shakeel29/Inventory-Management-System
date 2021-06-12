import * as ActionTypes from "../../store/ActionTypes";
import { updateObject } from "../../store/utility";

const initialState = {
  token: null,
  user: {name:'Admin', email:'admin@gmail.com'},
  isLoggedIn: false
};

//setting isLoggedIn to true for login case
export const setLoggedIn = (state, action) => {
  return updateObject(state, {
    isLoggedIn: action.isLoggedIn
  });
};

//settiing Token
export const setToken = (state, action) => {
  return updateObject(state, {
    token: action.token
  });
};

//setting User
export const setUser = (state, action) => {
  return updateObject(state, {
    user: action.user
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_LOGGED_IN:
      return setLoggedIn(state, action);
    case ActionTypes.SET_TOKEN:
      return setToken(state, action);
    case ActionTypes.SET_USER:
      return setUser(state, action);
    default:
      return state;
  }
};

export default reducer;

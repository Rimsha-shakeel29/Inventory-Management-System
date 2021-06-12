import * as config from "../../constants";
import * as ActionTypes from "../../store/ActionTypes";
import axios from "axios";
import * as shared from "../Shared/SharedActions";
// import * as SignUpActions from "../Signup/SignupActions";
// import * as SubscriptionActions from "../Subscription/SubscriptionActions";
// import * as EndpointsActions from "../Endpoints/Actions";
// import EndpointsReducer from "components/Endpoints/Reducer";

//action for changing token
export const updateToken = token => {
  return {
    type: ActionTypes.SET_TOKEN,
    token: token
  };
};

//action for changing user
export const updateUser = user => {
  return {
    type: ActionTypes.SET_USER,
    user: user
  };
};

export const authFail = error => {
  return {
    type: ActionTypes.AUTH_FAIL,
    error: error
  };
};

//action for flipping isLoggedIn
export const setIsLoggedIn = isLoggedIn => {
  //if (localStorage.getItem("token") != null) {
    localStorage.setItem("isLoggedIn", isLoggedIn);
 // }
  return {
    type: ActionTypes.SET_IS_LOGGED_IN,
    isLoggedIn: isLoggedIn
  };
};

export const setIsAdmin = isAdmin => {
  //if (localStorage.getItem("token") != null) {
    localStorage.setItem("isAdmin", isAdmin);
 // }
  return {
    type: ActionTypes.SET_ADMIN,
    isAdmin: isAdmin
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  console.log("logout called");
  const token = localStorage.getItem("token");
  const url = config.BASE_API_URL + config.LOGOUT_API_URI;
  return dispatch => {
    axios
      .post(url, {
        key: token
      })
      .then(res => {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationDate");
        localStorage.removeItem("isLoggedIn");

        // dispatch(SignUpActions.flush());
        // dispatch(SubscriptionActions.flushSubscriptionData());
        dispatch(setIsLoggedIn(false));
        dispatch(shared.switchLoading(false));
        dispatch(updateToken(null));
        dispatch(updateUser({}));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};


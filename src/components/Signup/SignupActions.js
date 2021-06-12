// import * as ActionTypes from "../../store/ActionTypes";
// import * as config from "../../constants";
// import axios from "axios";
// import * as login from "../Login/LoginActions";
// import * as shared from "../Shared/SharedActions";
// // import * as SubscriptionActions from "../Subscription/SubscriptionActions";


// //create an action to change the regSuccess
// export const updateRegSuccess = value => {
//   return {
//     type: ActionTypes.SET_REG_SUCCESS,
//     regSuccess: value
//   };
// };

// export const flush = () => {
//   return {
//     type: ActionTypes.FLUSH_SIGNUP
//   };
// };

// export const authSignup = (
//   first_name,
//   last_name,
//   email,
//   password1,
//   password2
// ) => {
//   return dispatch => {
//     console.log(first_name + last_name + email + password1 + password2);
//     const url = config.BASE_API_URL + config.REGISTER_API_URI;

//     dispatch(shared.switchLoading(true));
//     dispatch(shared.changeError(null));
//     // dispatch(SubscriptionActions.flushSubscriptionData());

//     axios
//       .post(url, {
//         email: email,
//         first_name: first_name,
//         last_name: last_name,
//         password1: password1,
//         password2: password2
//       })
//       .then(res => {
//         console.log("response status:" + res.status);
//         const token = res.data.key;
//         const user = res.data.user;
//         const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//         localStorage.setItem("token", token);
//         localStorage.setItem("expirationDate", expirationDate);

//         dispatch(login.updateToken(token));
//         dispatch(login.updateUser(user));
//         dispatch(updateRegSuccess(true));
//         dispatch(login.setIsLoggedIn(false)); //prevent the user from login to dashboard yet
//         //we got to take more info from user in step 2 and subscription page.

//         // dispatch(shared.switchLoading(false));
//         // dispatch(shared.changeError(null));

//         dispatch(login.checkAuthTimeout(3600));
//       })
//       .catch(function(error) {
//         if (error.response) {
//           //     if(error.response.data.email){
//           //         dispatch(shared.changeError("Email"+error.response.data.email));
//           //     }else if(error.response.data.password1){
//           //         dispatch(shared.changeError("Password"+error.response.data.password1));
//           //     }else{
//           //         dispatch(shared.changeError("server returned: " +error.response.status));
//           //     }
//           let errobj = JSON.stringify(error.response.data);
//           console.log(errobj);

//           if (error.response.data.email !== undefined) {
//             dispatch(shared.changeError(error.response.data.email.join()));
//           }
//           if (error.response.data.password1 !== undefined) {
//             dispatch(shared.changeError(error.response.data.password1));
//           }
//         }
//       })
//       .finally(() => {
//         dispatch(shared.switchLoading(false));
//       });
//   };
// };

// //saving the plans in SignupReducer state slice
// export const saveThePlans = plansData => {
//   return {
//     type: ActionTypes.SAVE_PLANS,
//     plansData: plansData
//   };
// };

// //dispatching update selected plan id action creators
// export const updatePlanId = selectedPlanId => {
//   localStorage.setItem("selectedPlanId", selectedPlanId);
//   return dispatch => {
//     dispatch(changeSelectedPlanId(selectedPlanId));
//   };
// };

// //save the selected Product Type
// export const saveProductType = productType => {
//   return {
//     type: ActionTypes.SAVE_PRODUCT_TYPE,
//     productType: productType
//   };
// };

// //dipatching update selected user type action creators
// export const updateProductType = productType => {
//   return dispatch => {
//     dispatch(saveProductType(productType));
//   };
// };
// //create action for changing selected plan id
// export const changeSelectedPlanId = selectedPlanId => {
//   return {
//     type: ActionTypes.SET_SELECTED_PLAN_ID,
//     selectedPlanId: selectedPlanId
//   };
// };

// // ACTION DISPATCHERS

// //fetching from server and dispatching saveplans actions creators
// export const fetchplans = () => {
//   console.log("fetching plans");

// };

import * as ActionTypes from "../../store/ActionTypes";
import { updateObject } from "../../store/utility";

const initialState = {
  productType: "REST_API",
  regSuccess: false,
  plansData: [],
  selectedPlanId: ""
};

//flush state
const flushSignup = (state, action) => {
  return updateObject(state, {
    productType: "REST_API",
    regSuccess: false,
    plansData: [],
    selectedPlanId: ""
  });
};

//updating the product type in state
const updateProductType = (state, action) => {
  return updateObject(state, {
    productType: action.productType
  });
};

//updating the selected plan id in state
const updateSelectedPlanId = (state, action) => {
  return updateObject(state, {
    selectedPlanId: action.selectedPlanId
  });
};

//saving the plans in state
const saveThePlans = (state, action) => {
  return updateObject(state, {
    plansData: action.plansData
  });
};

//update the regSuccess
const updateRegSuccess = (state, action) => {
  return updateObject(state, {
    regSuccess: action.regSuccess
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_PLAN_ID:
      return updateSelectedPlanId(state, action);
    case ActionTypes.SAVE_PLANS:
      return saveThePlans(state, action);
    case ActionTypes.SAVE_PRODUCT_TYPE:
      return updateProductType(state, action);
    case ActionTypes.SET_REG_SUCCESS:
      return updateRegSuccess(state, action);
    case ActionTypes.FLUSH_SIGNUP:
      return flushSignup(state, action);
    default:
      return state;
  }
};
export default reducer;

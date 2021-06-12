import * as ActionTypes from "../../store/ActionTypes";
import { updateObject } from "../../store/utility";

const initialState = {
  endpoints: [] //API Endpoints Array with nested fields for each
};

const saveEnds = (state, action) => {
  return updateObject(state, {
    endpoints: action.payload
  });
};

const EndpointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_ENDPOINTS:
      return saveEnds(state, action);

    default:
      return state;
  }
};
export default EndpointsReducer;

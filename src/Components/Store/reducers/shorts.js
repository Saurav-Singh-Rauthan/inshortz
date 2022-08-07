import * as actionTypes from "../actions/actionTypes";

const InitialState = {
  shorts: null,
  shortCreated: null,
  shortErrorMsg: null,
};

const shortsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.SHORT_CREATED:
      return {
        ...state,
        shortCreated: true,
        shortErrorMsg: null,
      };
    case actionTypes.SHORT_CREATE_FAILED:
      return {
        ...state,
        shortCreated: false,
        shortErrorMsg: action.errMsg,
      };
    case actionTypes.SHORT_DONE:
      return {
        ...state,
        shortCreated: null,
        shortErrorMsg: null,
      };
    default:
      return state;
  }
};

export default shortsReducer;

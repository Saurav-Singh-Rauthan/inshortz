import * as actionTypes from "../actions/actionTypes";

const InitialState = {
  shorts: null,
  shortCreated: null,
  shortErrorMsg: null,
  fetchStatus: null,
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
        fetchStatus: null,
      };
    case actionTypes.SHORT_SUCCESS:
      return {
        ...state,
        shorts: action.shorts,
        fetchStatus: true,
      };
    case actionTypes.SHORT_FAILED:
      return {
        ...state,
        fetchStatus: false,
      };
    default:
      return state;
  }
};

export default shortsReducer;

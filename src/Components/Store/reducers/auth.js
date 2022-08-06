import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  email: null,
  id: null,
  loading: null,
  redirect: null,
  error: null,
  errorMsg: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        errMsg: null,
        error: null,
        email: action.email,
        token: action.token,
        id: action.id,
      };
    case actionTypes.AUTH_FAILED:
      return {
        token: null,
        email: null,
        id: null,
        loading: false,
        error: action.error,
        errorMsg: action.errorMsg,
        redirect: null,
      };
    case actionTypes.AUTH_DONE:
      return {
        ...state,
        error: null,
        errorMsg: null,
        loading: null,
        redirect: "/",
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        token: null,
        email: null,
        loading: null,
        id: null,
        error: null,
        errorMsg: null,
        redirect: null,
      };
    default:
      return state;
  }
};

export default authReducer;

import axiosI from "../../../axiosInstance";
import * as actions from "../actions/actionTypes";

const create_success = () => {
  return {
    type: actions.SHORT_CREATED,
  };
};

const create_failed = (errorMsg) => {
  return {
    type: actions.SHORT_CREATE_FAILED,
    err: errorMsg,
  };
};

const fetch_success = (shorts) => {
  return {
    type: actions.SHORT_SUCCESS,
    shorts: shorts,
  };
};

const fetch_failed = () => {
  return {
    type: actions.SHORT_FAILED,
  };
};

export const create_done = () => {
  return {
    type: actions.SHORT_DONE,
  };
};

export const create_short = (
  type,
  link,
  title,
  content,
  author,
  authorEmail,
  sensitive,
  tags,
  token
) => {
  return (dispatch) => {
    let shortData = {
      type,
      link,
      title,
      content,
      author,
      authorEmail,
      sensitive,
      tags,
      createdOn: new Date().getTime(),
    };

    axiosI
      .post(`/shorts.json?auth=${token}`, shortData)
      .then((res) => {
        dispatch(create_success());
      })
      .catch((err) => {
        console.log(err);
        dispatch(create_failed(err.msg));
      });
  };
};

export const fetch_shorts = () => {
  return (dispatch) => {
    axiosI
      .get(`/shorts.json`)
      .then((res) => {
        dispatch(fetch_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_failed());
        console.log(err);
      });
  };
};

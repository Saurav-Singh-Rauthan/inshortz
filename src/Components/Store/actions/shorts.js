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
      sensitive,
      tags,
      createdOn: new Date().getTime(),
    };

    axiosI
      .post(`/shorts.json?auth=${token}`, shortData)
      .then((res) => {
        console.log(res);
        dispatch(create_success());
      })
      .catch((err) => {
        console.log(err);
        dispatch(create_failed(err.msg));
      });
  };
};

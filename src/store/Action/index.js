import ActionTypes from "../Constant";

export const updateUser = payload => {
  return dispatch => {
    dispatch({
      type: ActionTypes.UPDATEUSER,
      payload
    });
  };
};

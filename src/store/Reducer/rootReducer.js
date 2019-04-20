import ActionTypes from "../Constant";

const INITIAL_STATE = {
  user: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload, "payload");
  switch (action.type) {
    case ActionTypes.UPDATEUSER:
      return {
        ...state,
        user: { ...action.payload }
      };
    default:
      return state;
  }
};

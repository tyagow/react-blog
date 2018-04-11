import * as types from "../actions/actionTypes";
export default dispatch => next => action => {
  if (action.type !== types.GET_POSTS) {
    return next(action);
  }
};

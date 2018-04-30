import { browserHistory } from "react-router";

const redirect = ({ dispatch, getState }) => next => action => {
  if (action.redirect) {
    browserHistory.push(action.redirect);
    return next(action);
  }
};

export default redirect;

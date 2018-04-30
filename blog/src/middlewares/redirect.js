const redirect = ({ dispatch, getState }) => next => action => {
  if (action.redirect) {
    // browserHistory.push(action.redirect);
    console.log(action.redirect);
    return next(action);
  }
  return next(action);
};

export default redirect;

import * as types from "../actions/actionTypes";

import { startNetwork, endNetwork } from "../actions/ui";

const urlApi =
  process.env.NODE_ENV === "production"
    ? `${window.origin}/api`
    : "http://localhost:3001/api";

const api = ({ dispatch, getState }) => next => action => {
  if (action.type !== types.API) {
    return next(action);
  }

  const {
    url,
    success,
    label,
    options,
    method = "get",
    body = undefined
  } = action.payload;

  dispatch(startNetwork(label));
  let options_header = {
    ...options,
    headers: {
      Authorization: "ok",
      dataType: "json",
      "content-type": "application/json"
    },
    method: method,
    body: body
  };
  fetch(`${urlApi}/${url}`, options_header)
    .then(response => response.json())
    .then(data => {
      dispatch(success(data));
      dispatch(endNetwork(label));
    })
    .catch(error => {
      console.error(error);
      dispatch(endNetwork(label));
    });
};

export default api;

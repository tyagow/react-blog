import * as types from "./actionTypes";

export const startNetwork = (payload = "global") => ({
  type: types.START_NETWORK,
  payload
});

export const endNetwork = (payload = "global") => ({
  type: types.END_NETWORK,
  payload
});

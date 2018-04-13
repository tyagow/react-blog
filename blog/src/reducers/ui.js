import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
import * as actions from "../actions/actionTypes";

const initialState = Immutable({
  requests: {}
});

export default handleActions(
  {
    [actions.START_NETWORK]: (ui, { payload = "global" }) =>
      ui.updateIn(["requests", payload], counter => (counter || 0) + 1),
    [actions.END_NETWORK]: (ui, { payload = "global" }) =>
      ui.updateIn(["requests", payload], counter => (counter || 0) - 1)
  },
  initialState
);

export const getRequests = (state, label = "global") =>
  state.ui.getIn(["requests", label]) || 0;

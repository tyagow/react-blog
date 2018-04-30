import redirect from "../../middlewares/redirect";
import * as actionTypes from "../../actions/actionTypes";
import { createBrowserHistory } from "history";
import sinon from "sinon";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = action => redirect(store)(next)(action);
  return { store, next, invoke };
};

describe("routeCheck middleware", () => {
  xit("action with payload.redirect should send push in browserHistory", () => {
    const { invoke, store } = create();
    const action = {
      type: actionTypes.NEW_POST_SUCCESS,
      payload: { id: "1" },
      redirect: "posts/1"
    };
    invoke(action);
    // expect(history.push.calledOnce).toBe(true);
  });
});

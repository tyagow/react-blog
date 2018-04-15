import fetchMock from "fetch-mock";
import api from "../../middlewares/api";
import * as actionTypes from "../../actions/actionTypes";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = action => api(store)(next)(action);
  return { store, next, invoke };
};

describe("API middleware tests", () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("passes through non API action type", () => {
    const { next, invoke } = create();
    const action = { type: "NO-API-ACTION" };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });
  it("calls the START_NETWORK action", () => {
    fetchMock.get("*", {});

    const { invoke, store } = create();
    const action = { type: actionTypes.API, payload: { success: jest.fn() } };
    const startNetwork = { type: actionTypes.START_NETWORK, payload: "global" };
    invoke(action);

    expect(store.dispatch).toHaveBeenCalledWith(startNetwork);
  });
});

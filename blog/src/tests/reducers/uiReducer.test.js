import * as types from "../../actions/actionTypes";
import uiReducer from "../../reducers/ui";

describe("uiReducer reducer", () => {
  it("should handle initial state", () => {
    expect(uiReducer(undefined, {})).toEqual({
      requests: {}
    });
  });

  it("should handle START_NETWORK action", () => {
    expect(
      uiReducer(undefined, {
        type: types.START_NETWORK,
        payload: "global"
      })
    ).toEqual({
      requests: { global: 1 }
    });
  });

  it("should handle START_NETWORK action with differennt types of payload and save it on requests object", () => {
    expect(
      uiReducer(undefined, {
        type: types.START_NETWORK,
        payload: "test"
      })
    ).toEqual({
      requests: { test: 1 }
    });
  });

  it("should handle END_NETWORK action", () => {
    expect(
      uiReducer(undefined, {
        type: types.END_NETWORK,
        payload: "global"
      })
    ).toEqual({
      requests: { global: -1 }
    });
  });

  it("should handle END_NETWORK action with differennt types of payload and save it on requests object", () => {
    expect(
      uiReducer(undefined, {
        type: types.END_NETWORK,
        payload: "test"
      })
    ).toEqual({
      requests: { test: -1 }
    });
  });
});

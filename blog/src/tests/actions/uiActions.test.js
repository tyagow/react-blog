import * as actions from "../../actions/ui";
import * as types from "../../actions/actionTypes";

describe("uiActions", async () => {
  it("startNetwork should dispatch START_NETWORK with correct payload", () => {
    const expectedRsult = {
      type: types.START_NETWORK,
      payload: "test"
    };
    expect(actions.startNetwork("test")).toEqual(expectedRsult);
  });
  it("startNetwork should dispatch START_NETWORK with correct payload = global if undefined payload passed", () => {
    const expectedRsult = {
      type: types.START_NETWORK,
      payload: "global"
    };
    expect(actions.startNetwork()).toEqual(expectedRsult);
  });
  it("endNetwork should dispatch END_NETWORK with correct payload", () => {
    const expectedRsult = {
      type: types.END_NETWORK,
      payload: "test"
    };
    expect(actions.endNetwork("test")).toEqual(expectedRsult);
  });
  it("endNetwork should dispatch END_NETWORK with correct payload = global if undefined payload passed", () => {
    const expectedRsult = {
      type: types.END_NETWORK,
      payload: "global"
    };
    expect(actions.endNetwork()).toEqual(expectedRsult);
  });
});

import fetchMock from "fetch-mock";

import * as actions from "../../actions/PostActions";
import * as types from "../../actions/ActionTypes";
// import mockStore from "../setupTest";

describe("actions", async () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("fetchPosts should dispatch a FETCH_POSTS_SUCCESS  action with a payload", () => {
    const expectedActions = [
      { type: types.FETCHING_POSTS },
      { type: types.FETCH_POSTS_SUCCESS, payload: ["teste"] }
    ];
    fetchMock.getOnce("http://127.0.0.1:3001/posts", ["teste"]);
    const store = global.mockStore();
    return store
      .dispatch(actions.fetchPosts())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it("fetchPostsFailure should dispatch a FETCH_POSTS_FAILURE action", () => {
    expect(actions.fetchPostsFailure()).toEqual({
      type: types.FETCH_POSTS_FAILURE
    });
  });

  it("fetchPosts should dispatch FETCHING_POSTS and FETCH_POSTS_FAILURE action", () => {
    const store = global.mockStore();

    const expectedActions = [
      { type: types.FETCHING_POSTS },
      { type: types.FETCH_POSTS_FAILURE }
    ];
    fetchMock.mock("http://127.0.0.1:3001/posts", 400);

    // fetchMock.get("*", {});
    return store
      .dispatch(actions.fetchPosts())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});

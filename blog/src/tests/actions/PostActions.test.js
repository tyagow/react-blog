import fetchMock from "fetch-mock";

import * as actions from "../../actions/postActions";
import * as types from "../../actions/actionTypes";

describe("actions", async () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("fetchPosts should dispatch GET_POSTS and FETCH_POSTS_FAILURE action", () => {
    const store = global.mockStore();

    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "posts",
          success: actions.setPosts,
          url: "http://127.0.0.1:3001/posts/"
        }
      }
    ];

    actions.getPosts()(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
});

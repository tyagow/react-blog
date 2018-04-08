import PostReducer from "../../reducers/PostReducer";
import * as types from "../../actions/ActionTypes";

describe("PostReducer reducer", () => {
  it("should handle initial state", () => {
    expect(PostReducer(undefined, {})).toEqual({
      fetching: false,
      items: [],
      item: {},
      postDetail: {},
      categories: []
    });
  });

  it("should handle FETCHING_POSTS action", () => {
    expect(
      PostReducer(
        {},
        {
          type: types.FETCHING_POSTS
        }
      )
    ).toEqual({
      fetching: true
    });
  });
  it("should handle FETCH_POSTS_FAILURE action", () => {
    expect(
      PostReducer(
        {},
        {
          type: types.FETCH_POSTS_FAILURE
        }
      )
    ).toEqual({
      fetching: false
    });
  });

  it("should handle FETCH_POSTS_SUCCESS action", () => {
    const post = { title: "A New Hope", body: "Test body" };

    expect(
      PostReducer(
        {},
        {
          type: types.FETCH_POSTS_SUCCESS,
          payload: [post]
        }
      )
    ).toEqual({
      items: [post],
      fetching: false
    });
  });
  it("should handle NEW_POST action", () => {
    const post = { title: "A New Hope", body: "Test body" };
    expect(
      PostReducer(
        {},
        {
          type: types.NEW_POST,
          payload: post
        }
      )
    ).toEqual({
      item: post
    });
  });
  it("should handle GET_POST_BY_ID action", () => {
    const post = { title: "A New Hope", body: "Test body" };
    expect(
      PostReducer(
        {},
        {
          type: types.GET_POST_BY_ID,
          payload: post
        }
      )
    ).toEqual({
      postDetail: post
    });
  });
  it("should handle FETCH_CATEGORIES action", () => {
    const categories = ["react", "redux"];
    expect(
      PostReducer(
        {},
        {
          type: types.FETCH_CATEGORIES,
          payload: categories
        }
      )
    ).toEqual({
      categories: categories
    });
  });
  it("should handle FETCH_COMMENTS action", () => {
    const comments = [{ body: "teste" }];
    expect(
      PostReducer(
        {},
        {
          type: types.FETCH_COMMENTS,
          payload: comments
        }
      )
    ).toEqual({
      comments: comments
    });
  });
});

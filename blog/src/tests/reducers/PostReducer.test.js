import PostReducer from "../../reducers/PostReducer";
import * as types from "../../actions/actionTypes";

describe("PostReducer reducer", () => {
  it("should handle initial state", () => {
    expect(PostReducer(undefined, {})).toEqual({
      fetching: false,
      items: [],
      item: {},
      postDetail: {},
      categories: [],
      filters: {
        category: "all"
      }
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
  it("should handle NEW_POST_SUCCESS action", () => {
    const post = { title: "A New Hope", body: "Test body" };
    expect(
      PostReducer(
        {},
        {
          type: types.NEW_POST_SUCCESS,
          payload: post
        }
      )
    ).toEqual({
      item: post
    });
  });
  it("should handle GET_POST_BY_ID_SUCCESS action", () => {
    const post = { title: "A New Hope", body: "Test body" };
    expect(
      PostReducer(
        {},
        {
          type: types.GET_POST_BY_ID_SUCCESS,
          payload: post
        }
      )
    ).toEqual({
      postDetail: post
    });
  });
  it("should handle FETCH_CATEGORIES_SUCCESS action", () => {
    const categories = ["react"];
    const to_normalize = { categories: [{ name: "react" }] };
    expect(
      PostReducer(
        {},
        {
          type: types.FETCH_CATEGORIES_SUCCESS,
          payload: to_normalize
        }
      )
    ).toEqual({
      categories: categories
    });
  });
  describe("UPDATE_POST", () => {
    let initialState = {
      items: [
        {
          id: "894tuq4ut84ut8v4t8wun89g",
          voteScore: 1
        }
      ]
    };
    it("should update comment", () => {
      expect(
        PostReducer(initialState, {
          type: types.UPDATE_POST,
          payload: {
            id: "894tuq4ut84ut8v4t8wun89g",
            voteScore: 2
          }
        })
      ).toEqual({
        items: [
          {
            id: "894tuq4ut84ut8v4t8wun89g",
            voteScore: 2
          }
        ]
      });
    });
  });
  describe("UPDATE_POST_CATEGORY_FILTER", () => {
    it("should update correctly filters.category with given payload", () => {
      let initialState = {
        filters: { category: "all", dataOrder: "" }
      };
      expect(
        PostReducer(initialState, {
          type: types.UPDATE_POST_CATEGORY_FILTER,
          payload: "react"
        })
      ).toEqual({
        filters: { category: "react", dataOrder: "" }
      });
    });
  });
});

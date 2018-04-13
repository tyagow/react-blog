import * as types from "../../actions/actionTypes";
import CommentReducer from "../../reducers/CommentReducer";

describe("CommentReducer reducer", () => {
  it("should handle initial state", () => {
    expect(CommentReducer(undefined, {})).toEqual({
      fetching: false,
      items: []
    });
  });

  it("should handle FETCH_COMMENTS_SUCCES action", () => {
    const comments = [{ body: "teste" }];
    expect(
      CommentReducer(undefined, {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: comments
      })
    ).toEqual({
      fetching: false,
      items: comments
    });
  });
});

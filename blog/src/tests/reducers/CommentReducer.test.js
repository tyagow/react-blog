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
  describe("UPDATE_COMMENT", () => {
    let initialState = {
      fetching: false,
      items: [
        {
          id: "894tuq4ut84ut8v4t8wun89g",
          voteScore: 1
        }
      ]
    };
    it("should update comment", () => {
      expect(
        CommentReducer(initialState, {
          type: types.UPDATE_COMMENT,
          payload: {
            id: "894tuq4ut84ut8v4t8wun89g",
            voteScore: 2
          }
        })
      ).toEqual({
        fetching: false,
        items: [
          {
            id: "894tuq4ut84ut8v4t8wun89g",
            voteScore: 2
          }
        ]
      });
    });
  });
});

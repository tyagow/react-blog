import * as types from "../../actions/actionTypes";
import CommentReducer from "../../reducers/CommentReducer";
const initialState = {
  items: [
    {
      id: "2",
      voteScore: 1
    }
  ]
};
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
    it("should update comment", () => {
      expect(
        CommentReducer(initialState, {
          type: types.UPDATE_COMMENT,
          payload: {
            id: "2",
            voteScore: 2
          }
        })
      ).toEqual({
        items: [
          {
            id: "2",
            voteScore: 2
          }
        ]
      });
    });
  });
  describe("NEW_COMMENT", () => {
    it("should add new comment in items", () => {
      expect(
        CommentReducer(initialState, {
          type: types.NEW_COMMENT,
          payload: {
            id: "3"
          }
        })
      ).toEqual({
        items: [
          {
            id: "2",
            voteScore: 1
          },
          { id: "3" }
        ]
      });
    });
  });
});

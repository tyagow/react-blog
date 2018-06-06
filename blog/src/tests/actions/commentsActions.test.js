import * as actions from "../../actions/commentsActions";
import * as types from "../../actions/actionTypes";

describe("commentActions", async () => {
  it("fetchCommentsByPostId  should dispatch API action type with correct payload", () => {
    const store = global.mockStore();
    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "comments_list",
          success: actions.setComments,
          url: "posts/1/comments"
        }
      }
    ];

    actions.fetchCommentsByPostId(1)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setComments should dispatch FETCH_COMMENTS_SUCCES with correct payload", () => {
    const expectedRsult = {
      type: types.FETCH_COMMENTS_SUCCESS,
      payload: ["test"]
    };
    expect(actions.setComments(["test"])).toEqual(expectedRsult);
  });

  it("createComment should dispatch API action with correct payload", () => {
    const store = global.mockStore();
    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "comments_create",
          success: actions.newComment,
          method: "post",
          body: JSON.stringify({ id: "1" }),
          url: "comments"
        }
      }
    ];

    actions.createComment({ id: "1" })(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
  describe("newComment", () => {
    it("should ", () => {
      const expectedResult = {
        type: types.NEW_COMMENT,
        payload: { id: 1 }
      };
      expect(actions.newComment({ id: 1 })).toEqual(expectedResult);
    });
  });

  describe("submitVote", () => {
    it("should dispatch API action with correct payload", () => {
      const store = global.mockStore();
      const expectedActions = [
        {
          type: types.API,
          payload: {
            label: "comments_upVote",
            body: { option: "upVote" },
            success: actions.updateComment,
            method: "post",
            url: "comments/1"
          }
        }
      ];

      actions.submitVoteComment(1, "upVote")(store.dispatch);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("updateComment", () => {
    it("should dispatch UPDATE_COMMENTS", () => {
      const expectedResult = {
        type: types.UPDATE_COMMENT,
        payload: {}
      };
      expect(actions.updateComment({})).toEqual(expectedResult);
    });
  });
});

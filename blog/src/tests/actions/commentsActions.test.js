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
          url: "http://127.0.0.1:3001/posts/1/comments"
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
});

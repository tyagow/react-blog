import { FETCH_COMMENTS_SUCCESS, API } from "./actionTypes";

export const fetchCommentsByPostId = postId => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/" + postId + "/comments",
      success: setComments,
      label: "comments_list"
    }
  });
};

export const setComments = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

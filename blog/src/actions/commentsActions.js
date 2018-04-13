import { FETCH_COMMENTS, API } from "./actionTypes";

export const fetchCommentsByPostId = postId => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/" + postId + "/comments",
      success: comments =>
        dispatch({
          type: FETCH_COMMENTS,
          payload: comments
        }),
      label: "comments_list"
    }
  });
};

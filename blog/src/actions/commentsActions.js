import {
  FETCH_COMMENTS_SUCCESS,
  API,
  CREATE_COMMENT,
  UPDATE_COMMENT
} from "./actionTypes";

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

export const submitVoteComment = (commentId, type) => dispatch => {
  let label = "comments_" + type;
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/comments/" + commentId,
      body: { option: type },
      method: "post",
      success: updateComment,
      label: label
    }
  });
};

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  payload: comment
});

export const setComments = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  payload: comment
});

import {
  FETCH_COMMENTS_SUCCESS,
  API,
  NEW_COMMENT,
  UPDATE_COMMENT
} from "./actionTypes";

export const fetchCommentsByPostId = postId => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "posts/" + postId + "/comments",
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
      url: "comments/" + commentId,
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

export const newComment = comment => ({
  type: NEW_COMMENT,
  payload: comment
});

export const createComment = comment => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "comments",
      body: JSON.stringify(comment),
      method: "post",
      success: newComment,
      label: "comments_create"
    }
  });
};

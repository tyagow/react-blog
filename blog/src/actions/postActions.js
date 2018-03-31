import { FETCH_POSTS, NEW_POST, GET_POST_BY_ID } from "./type";

export const fetchPosts = () => dispatch => {
  fetch("http://127.0.0.1:3001/posts", {
    headers: {
      Authorization: "ok",
      dataType: "json"
    }
  })
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const getPostById = postId => dispatch => {
  dispatch({
    type: GET_POST_BY_ID,
    payload: postId
  });
};
export const createPost = postData => dispatch => {
  fetch("http://127.0.0.1:3001/posts", {
    method: "POST",
    headers: {
      Authorization: "ok",
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

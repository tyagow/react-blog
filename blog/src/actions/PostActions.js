import {
  NEW_POST,
  GET_POST_BY_ID,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_CATEGORIES,
  FETCH_COMMENTS,
  FETCHING_POSTS
} from "./ActionTypes";

export const fetchPostsSuccess = payload => ({
  type: FETCH_POSTS_SUCCESS,
  payload: payload
});

export const fetchPostsFailure = () => ({
  type: FETCH_POSTS_FAILURE
});

export const fetchingPosts = () => ({
  type: FETCHING_POSTS
});

export const fetchPosts = () => dispatch => {
  dispatch(fetchingPosts());
  return fetch("http://127.0.0.1:3001/posts", {
    headers: {
      Authorization: "ok",
      dataType: "json"
    }
  })
    .then(res => res.json())
    .then(posts => dispatch(fetchPostsSuccess(posts)))
    .catch(e => dispatch(fetchPostsFailure()));
};

export const getPostById = postId => dispatch => {
  fetch("http://127.0.0.1:3001/posts/" + postId, {
    headers: {
      Authorization: "ok",
      dataType: "json"
    }
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: GET_POST_BY_ID,
        payload: post
      })
    );
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

export const fetchCategories = () => dispatch => {
  return fetch("http://127.0.0.1:3001/categories", {
    headers: {
      Authorization: "ok",
      dataType: "json"
    }
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CATEGORIES,
        payload: data.categories.map(obj => obj.name)
      })
    );
};

export const fetchCommentsByPostId = postId => dispatch => {
  fetch("http://127.0.0.1:3001/posts/" + postId + "/comments", {
    headers: {
      Authorization: "ok",
      dataType: "json"
    }
  })
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

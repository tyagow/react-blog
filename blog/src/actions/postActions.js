import {
  NEW_POST,
  GET_POST_BY_ID,
  FETCH_POSTS_SUCCESS,
  FETCH_CATEGORIES,
  API
} from "./actionTypes";

export const setPosts = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const getPosts = () => dispatch => {
  return dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/",
      success: setPosts,
      label: "posts"
    }
  });
};

export const getPostById = postId => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/" + postId,
      success: post =>
        dispatch({
          type: GET_POST_BY_ID,
          payload: post
        }),
      label: "post_detail"
    }
  });
};

export const createPost = postData => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/",
      success: post =>
        dispatch({
          type: NEW_POST,
          payload: post
        }),
      label: "post_create",
      method: "post",
      body: JSON.stringify(postData)
    }
  });
};

export const fetchCategories = () => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/categories",
      success: data =>
        dispatch({
          type: FETCH_CATEGORIES,
          payload: data.categories.map(obj => obj.name)
        }),
      label: "post_categories_list"
    }
  });
};

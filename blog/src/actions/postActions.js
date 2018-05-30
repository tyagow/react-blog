import {
  NEW_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  API,
  GET_POST_BY_ID_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_CATEGORY_FILTER,
  UPDATE_POST_DATE_ORDER,
  DELETE_POST
} from "./actionTypes";
import { push } from "react-router-redux";

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
      success: setPost,
      label: "post_detail"
    }
  });
};

export const setPost = post => ({
  type: GET_POST_BY_ID_SUCCESS,
  payload: post
});

export const createPost = postData => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/",
      success: newPost,
      label: "post_create",
      method: "post",
      body: JSON.stringify(postData)
    }
  });
};

export const newPost = post => ({
  type: NEW_POST_SUCCESS,
  payload: post,
  redirect: "posts/" + post.id
});

export const getCategories = () => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/categories",
      success: setCategories,
      label: "post_categories_list"
    }
  });
};

export const setCategories = data => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data
});

export const sendVote = ({ type, url, callback, label }) => dispatch => {
  let voteOption = {
    option: type
  };
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/" + url,
      success: callback,
      label: label + "_vote",
      method: "post",
      body: JSON.stringify(voteOption)
    }
  });
};

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: post
});

export const updatePostFilter = filter => dispatch => {
  dispatch({
    type: UPDATE_POST_CATEGORY_FILTER,
    payload: filter
  });
};

export const requestAPIDeletePost = postId => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/" + postId,
      success: makeDeletePostAction(postId),
      label: "deletePost",
      method: "delete"
    }
  });
  dispatch(push("/"));
};

export const makeDeletePostAction = postId => () => ({
  type: DELETE_POST,
  payload: postId
});

export const updatePostDateOrder = filter => dispatch => {
  dispatch({
    type: UPDATE_POST_DATE_ORDER,
    payload: filter
  });
};

export const updatePostDetail = post => dispatch => {
  dispatch({
    type: API,
    payload: {
      url: "http://127.0.0.1:3001/posts/" + post.id,
      success: setPost,
      label: "postdetail_update",
      method: "put",
      body: JSON.stringify({ title: post.title, body: post.body })
    }
  });
};

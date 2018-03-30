import { FETCH_POSTS, NEW_POST } from "./type";

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

import { createSelector } from "reselect";

export const getCategoryFilter = (state, props) => {
  return state.posts.filters.category;
};

export const getPostDateOrderFilter = (state, props) => {
  return state.posts.filters.date;
};
export const getPosts = (state, props) => [...state.posts.items];

export const makeGetVisiblePosts = () => {
  return createSelector(
    [getCategoryFilter, getPostDateOrderFilter, getPosts],
    (categoryFilter, dateOrder, posts) => {
      let filteredPosts = filterPyCategory(categoryFilter, posts);
      filteredPosts = orderPostsByTimestamp(filteredPosts, dateOrder);
      return filteredPosts;
    }
  );
};

const filterPyCategory = (categoryFilter, posts) => {
  let filteredPosts;
  categoryFilter === "all"
    ? (filteredPosts = posts)
    : (filteredPosts = posts.filter(post => post.category === categoryFilter));
  return filteredPosts;
};

export const orderPostsByTimestamp = (posts, order) => {
  let ordenedPosts = [...posts];
  if (order !== "asc" && order !== "desc") {
    return posts;
  }
  ordenedPosts.sort((postA, postB) => {
    if (order === "asc") {
      return postA.timestamp > postB.timestamp;
    }
    return postA.timestamp < postB.timestamp;
  });
  return ordenedPosts;
};

export default makeGetVisiblePosts;

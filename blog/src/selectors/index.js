import { createSelector } from "reselect";

export const getCategoryFilter = (state, props) => {
  return state.posts.filters.category;
};

export const getPostDateOrderFilter = (state, props) => {
  return state.posts.filters.date;
};
export const getPosts = (state, props) => state.posts.items;

export const makeGetVisiblePosts = () => {
  return createSelector(
    [getCategoryFilter, getPosts],
    (categoryFilter, posts) => {
      switch (categoryFilter) {
        case "all":
          return posts;
        default:
          return posts.filter(post => post.category === categoryFilter);
      }
    }
  );
};

export default makeGetVisiblePosts;

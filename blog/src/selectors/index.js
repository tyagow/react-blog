import { createSelector } from "reselect";

export const getVisibilityFilter = (state, props) => {
  return state.posts.visibilityFilter;
};
export const getPosts = (state, props) => state.posts.items;

export const makeGetVisiblePosts = () => {
  return createSelector(
    [getVisibilityFilter, getPosts],
    (visibilityFilter, posts) => {
      switch (visibilityFilter) {
        case "all":
          return posts;
        default:
          return posts.filter(post => post.category === visibilityFilter);
      }
    }
  );
};

export default makeGetVisiblePosts;

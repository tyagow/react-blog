import { createSelector } from "reselect";

export const getVisibilityFilter = (state, props) =>
  state.posts.visibilityFilter;

export const getPosts = (state, props) => state.posts.items;

export const makeGetVisiblePosts = () => {
  return createSelector(
    [getVisibilityFilter, getPosts],
    (visibilityFilter, posts) => {
      switch (visibilityFilter) {
        case "ALL":
          return posts;
        default:
          return posts;
      }
    }
  );
};

export default makeGetVisibleTodos;

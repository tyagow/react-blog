import {
  getVisibilityFilter,
  getPosts,
  makeGetVisiblePosts
} from "../../selectors";

const setup = ({ visibilityFilter = "all" } = {}) => {
  const items = [{ id: 1, category: "react" }, { id: 1, category: "python" }];
  const state = {
    posts: {
      visibilityFilter,
      items
    }
  };
  return { state, items };
};
describe("getVisibilityFilter", () => {
  it("should return state.posts.visibilityFilter", () => {
    const { state } = setup();
    const expected = "all";
    expect(getVisibilityFilter(state, {})).toBe(expected);
  });
});
describe("getPosts", () => {
  it("should return state.posts.items", () => {
    const { state } = setup();
    const expected = state.posts.items;
    expect(getPosts(state, {})).toBe(expected);
  });
});
describe("makeGetVisiblePosts", () => {
  it("should create a filter  and correctly filter all posts when default filter settled in state", () => {
    const { state } = setup();
    const expected = state.posts.items;
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toBe(expected);
  });
  it("should correctly filter posts using filter settled in state", () => {
    const filter = "react";
    const { state } = setup({ visibilityFilter: "react" });
    const expected = state.posts.items.filter(post => post.category === filter);
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toEqual(expected);
  });
});

import {
  getCategoryFilter,
  getPosts,
  makeGetVisiblePosts,
  getPostDateOrderFilter
} from "../../selectors";

const setup = ({ category = "all", date = "" } = {}) => {
  const items = [{ id: 1, category: "react" }, { id: 1, category: "python" }];
  const state = {
    posts: {
      filters: { category, date },
      items
    }
  };
  return { state, items };
};
describe("getCategoryFilter", () => {
  it("should return state.posts.filters.category", () => {
    const { state } = setup();
    const expected = "all";
    expect(getCategoryFilter(state, {})).toBe(expected);
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
  it("should correctly filter posts using filter default in state", () => {
    const filter = "react";
    const { state } = setup({ category: "react" });
    const expected = state.posts.items.filter(post => post.category === filter);
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toEqual(expected);
  });
});
describe("getPostDateOrderFilter", () => {
  it("should return state.posts.filters.date", () => {
    const { state } = setup();
    const expected = "";
    expect(getPostDateOrderFilter(state, {})).toBe(expected);
  });
  it("should create a filter  and correctly return all posts whenstate created", () => {
    const { state } = setup();
    const expected = state.posts.items;
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toBe(expected);
  });
  it("should sort array as i expect :)", () => {
    const elements = [{ id: 3 }, { id: 2 }];
    const elementsExpected = [{ id: 2 }, { id: 3 }];
    expect(elements.sort(element => element.id)).toEqual(elementsExpected);
    expect(elements).not.toEqual(elementsExpected);
  });
});

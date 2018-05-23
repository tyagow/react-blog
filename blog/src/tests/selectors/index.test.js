import {
  getCategoryFilter,
  getPosts,
  makeGetVisiblePosts,
  getPostDateOrderFilter,
  orderPostsByTimestamp
} from "../../selectors";

const setup = ({ category = "all", date = "" } = {}) => {
  const items = [
    { id: 1, category: "react", timestamp: 44 },
    { id: 1, category: "python", timestamp: 66 },
    { id: 1, category: "python", timestamp: 22 }
  ];
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
    expect(getCategoryFilter(state, {})).toEqual(expected);
  });
});
describe("getPosts", () => {
  it("should return state.posts.items", () => {
    const { state } = setup();
    const expected = state.posts.items;
    expect(getPosts(state, {})).toEqual(expected);
  });
});
describe("makeGetVisiblePosts", () => {
  it("should create a filter  and correctly filter all posts when default filter settled in state", () => {
    const { state } = setup();
    const expected = state.posts.items;
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toEqual(expected);
  });
  it("should correctly filter posts using filter default in state", () => {
    const filter = "react";
    const { state } = setup({ category: "react" });
    const expected = state.posts.items.filter(post => post.category === filter);
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toEqual(expected);
  });
  it("should correctly return posts list sorted asc by timestamp if state.posts.date = 'asc'", () => {
    const { state } = setup({ date: "asc" });
    const expected = orderPostsByTimestamp(state.posts.items, "asc");
    const getVisibleTodos = makeGetVisiblePosts();
    expect(getVisibleTodos(state)).toEqual(expected);
  });
});
describe("getPostDateOrderFilter", () => {
  it("should return state.posts.filters.date", () => {
    const { state } = setup();
    const expected = "";
    expect(getPostDateOrderFilter(state, {})).toEqual(expected);
  });
});
describe("orderPostByTimestamp", () => {
  it("should return ascendent ordened list by timestamp if 'asc' is passed", () => {
    const posts = [{ timestamp: 6 }, { timestamp: 2 }, { timestamp: 5 }];
    const expected = [{ timestamp: 2 }, { timestamp: 5 }, { timestamp: 6 }];
    expect(orderPostsByTimestamp(posts, "asc")).toEqual(expected);
  });
  it("should return descendent ordened list of by timestamp if 'desc' is passed", () => {
    const posts = [{ timestamp: 6 }, { timestamp: 2 }, { timestamp: 5 }];
    const expected = [{ timestamp: 6 }, { timestamp: 5 }, { timestamp: 2 }];
    expect(orderPostsByTimestamp(posts, "desc")).toEqual(expected);
  });
});

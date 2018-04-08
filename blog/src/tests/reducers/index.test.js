import combinedReducers from "../../reducers/index";
import PostReducer from "../../reducers/PostReducer";

describe("Testing Combined Reducers", () => {
  it("index.js must export posts and comments as default combinedReducers", () => {
    const expectedReducers = { posts: PostReducer };
    expect(combinedReducers).toEqual(expectedReducers);
  });
});

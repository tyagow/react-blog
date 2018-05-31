import rootReducer from "../../reducers/index";
import PostReducer from "../../reducers/PostReducer";
import CommentReducer from "../../reducers/CommentReducer";
import uiReducer from "../../reducers/ui";
import CategoryReducer from "../../reducers/CategoryReducer";

describe("Testing Combined Reducers", () => {
  it("index.js must export posts and comments as default combinedReducers", () => {
    const expectedReducers = {
      posts: PostReducer(undefined, {}),
      comments: CommentReducer(undefined, {}),
      categories: CategoryReducer(undefined, {}),
      ui: uiReducer(undefined, {}),
      router: { location: null }
    };
    expect(rootReducer(undefined, {})).toEqual(expectedReducers);
  });
});

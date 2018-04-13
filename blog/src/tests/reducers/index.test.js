import rootReducer from "../../reducers/index";
import PostReducer from "../../reducers/PostReducer";
import CommentReducer from "../../reducers/CommentReducer";
import uiReducer from "../../reducers/ui";

describe("Testing Combined Reducers", () => {
  it("index.js must export posts and comments as default combinedReducers", () => {
    const expectedReducers = {
      posts: PostReducer(undefined, {}),
      comments: CommentReducer(undefined, {}),
      ui: uiReducer(undefined, {})
    };
    expect(rootReducer(undefined, {})).toEqual(expectedReducers);
  });
});

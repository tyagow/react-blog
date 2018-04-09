import rootReducer from "../../reducers/index";
import PostReducer from "../../reducers/PostReducer";
import CommentReducer from "../../reducers/CommentReducer";

describe("Testing Combined Reducers", () => {
  it("index.js must export posts and comments as default combinedReducers", () => {
    const expectedReducers = {
      posts: PostReducer(undefined, {}),
      comments: CommentReducer(undefined, {})
    };
    expect(rootReducer(undefined, {})).toEqual(expectedReducers);
  });
});

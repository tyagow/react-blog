import { combineReducers } from "redux";
import posts from "./PostReducer";
import ui from "./ui";
import comments from "./CommentReducer";

export default combineReducers({
  posts,
  comments,
  ui
});

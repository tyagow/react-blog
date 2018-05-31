import { combineReducers } from "redux";
import posts from "./PostReducer";
import ui from "./ui";
import comments from "./CommentReducer";
import categories from "./CategoryReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  posts,
  comments,
  categories,
  ui,
  router: routerReducer
});

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";

import api from "../middlewares/api";
import posts from "../reducers/PostReducer";
import ui from "../reducers/ui";
import comments from "../reducers/CommentReducer";

const initialState = {};
export const history = createHistory();
const rmiddleware = routerMiddleware(history);
const middleware = [rmiddleware, thunk, api];

const store = createStore(
  combineReducers({
    posts,
    comments,
    ui,
    router: routerReducer
  }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

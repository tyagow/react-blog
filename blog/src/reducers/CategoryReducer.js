import { handleActions } from "redux-actions";
import * as actions from "../actions/actionTypes";

const initialState = [];

export default handleActions(
  {
    [actions.FETCH_CATEGORIES_SUCCESS]: (categories, { payload = [] }) =>
      payload.categories.map(x => x.name)
  },
  initialState
);

export const reselectCategories = state => state.categories;

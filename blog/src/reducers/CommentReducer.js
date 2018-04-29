import { FETCH_COMMENTS_SUCCESS, UPDATE_COMMENT } from "../actions/actionTypes";

export const initialState = {
  fetching: false,
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        items: state.items.map(
          item =>
            item.id === action.payload.id
              ? { ...item, ...action.payload }
              : item
        )
      };

    default:
      return state;
  }
}

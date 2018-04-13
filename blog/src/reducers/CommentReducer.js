import { FETCH_COMMENTS_SUCCESS } from "../actions/actionTypes";

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

    default:
      return state;
  }
}

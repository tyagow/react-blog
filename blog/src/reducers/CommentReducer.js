import { FETCH_COMMENTS } from "../actions/ActionTypes";

export const initialState = {
  fetching: false,
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}

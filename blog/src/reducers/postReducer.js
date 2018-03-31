import { FETCH_POSTS, NEW_POST, GET_POST_BY_ID } from "../actions/type";

const initialState = {
  items: [],
  item: {},
  postDetail: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

    case GET_POST_BY_ID:
      return {
        ...state,
        postDetail: state.items.find(p => p.id === action.payload)
      };

    default:
      return state;
  }
}

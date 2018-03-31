import {
  FETCH_POSTS,
  NEW_POST,
  GET_POST_BY_ID,
  FETCH_CATEGORIES,
  FETCH_COMMENTS
} from "../actions/type";

const initialState = {
  items: [],
  item: {},
  postDetail: {},
  categories: []
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
        postDetail: action.payload
      };

    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case FETCH_COMMENTS:
      console.log(action.payload);
      return {
        ...state,
        comments: action.payload
      };

    default:
      return state;
  }
}

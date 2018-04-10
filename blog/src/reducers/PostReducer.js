import {
  FETCH_POSTS_SUCCESS,
  NEW_POST,
  GET_POST_BY_ID,
  FETCH_CATEGORIES,
  FETCHING_POSTS,
  FETCH_POSTS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  items: [],
  item: {},
  postDetail: {},
  categories: [],
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        fetching: false
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetching: false
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
    default:
      return state;
  }
}

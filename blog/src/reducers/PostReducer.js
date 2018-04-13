import {
  FETCH_POSTS_SUCCESS,
  NEW_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  GET_POST_BY_ID_SUCCESS,
  FETCH_CATEGORIES_SUCCESS
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
    case NEW_POST_SUCCESS:
      return {
        ...state,
        item: action.payload
      };

    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postDetail: action.payload
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories.map(x => x.name)
      };
    default:
      return state;
  }
}

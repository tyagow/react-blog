import {
  FETCH_POSTS_SUCCESS,
  NEW_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  GET_POST_BY_ID_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_CATEGORY_FILTER,
  UPDATE_POST_DATE_ORDER,
  DELETE_POST
} from "../actions/actionTypes";

const initialState = {
  items: [],
  item: {},
  postDetail: {},
  categories: [],
  fetching: false,
  filters: {
    category: "all",
    date: ""
  }
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

    case UPDATE_POST:
      return {
        ...state,
        items: state.items.map(
          item =>
            item.id === action.payload.id
              ? { ...item, ...action.payload }
              : item
        ),
        postDetail: { ...action.payload }
      };

    case UPDATE_POST_CATEGORY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, category: action.payload }
      };

    case UPDATE_POST_DATE_ORDER:
      return {
        ...state,
        filters: { ...state.filters, date: action.payload }
      };

    case DELETE_POST:
      const items = state.items.map(post => {
        return post.id === action.payload ? { ...post, deleted: true } : post;
      });
      const postDetail =
        state.postDetail && state.postDetail.id === action.payload
          ? {}
          : state.postDetail;
      return {
        ...state,
        items,
        postDetail
      };

    default:
      return state;
  }
}

import fetchMock from "fetch-mock";

import * as actions from "../../actions/postActions";
import * as types from "../../actions/actionTypes";

describe("actions", async () => {
  it("getPosts  should dispatch API action type with correct payload", () => {
    const store = global.mockStore();
    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "posts",
          success: actions.setPosts,
          url: "http://127.0.0.1:3001/posts/"
        }
      }
    ];

    actions.getPosts()(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setPosts should dispatch FETCH_POSTS_SUCCESS with correct payload", () => {
    const expectedRsult = {
      type: types.FETCH_POSTS_SUCCESS,
      payload: "test"
    };
    expect(actions.setPosts("test")).toEqual(expectedRsult);
  });

  it("getPostById  should dispatch API action type with correct payload", () => {
    const store = global.mockStore();
    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "post_detail",
          success: actions.setPost,
          url: "http://127.0.0.1:3001/posts/1"
        }
      }
    ];

    actions.getPostById(1)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setPost should dispatch FETCH_POSTS_SUCCESS with correct payload", () => {
    const expectedRsult = {
      type: types.GET_POST_BY_ID_SUCCESS,
      payload: "test"
    };
    expect(actions.setPost("test")).toEqual(expectedRsult);
  });

  it("createPost  should dispatch API action type with correct payload", () => {
    let post = { teste: "123" };
    const store = global.mockStore();
    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "post_create",
          success: actions.newPost,
          url: "http://127.0.0.1:3001/posts/",
          method: "post",
          body: JSON.stringify(post)
        }
      }
    ];

    actions.createPost(post)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("newPost should dispatch NEW_POST with correct payload", () => {
    const expectedRsult = {
      type: types.NEW_POST_SUCCESS,
      payload: { id: 1 },
      redirect: "posts/1"
    };
    expect(actions.newPost({ id: 1 })).toEqual(expectedRsult);
  });

  it("getCategories  should dispatch API action type with correct payload", () => {
    const store = global.mockStore();
    const expectedActions = [
      {
        type: types.API,
        payload: {
          label: "post_categories_list",
          success: actions.setCategories,
          url: "http://127.0.0.1:3001/categories"
        }
      }
    ];

    actions.getCategories()(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setCategories should dispatch FETCH_CATEGORIES_SUCCESS with correct payload", () => {
    let categories = { categories: [{ name: "test" }] };
    const expectedRsult = {
      type: types.FETCH_CATEGORIES_SUCCESS,
      payload: categories
    };
    expect(actions.setCategories(categories)).toEqual(expectedRsult);
  });
});

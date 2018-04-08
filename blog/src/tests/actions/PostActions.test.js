import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import * as actions from "../../actions/PostActions";
import * as types from "../../actions/ActionTypes";

// describe("async actions", () => {
//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });
//   it("creates FETCH_POSTS_SUCCESS when fetching todos has been done", () => {
//     fetchMock.getOnce("http://127.0.0.1:3001/posts", {
//       body: ["teste"],
//       headers: { "content-type": "application/json" }
//     });
//     const expectedActions = [{ type: types.FETCH_POSTS, body: [] }];
//     const store = mockStore();
//     store.dispatch(actions.fetchPosts()).then(() => {
//       //   // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", async () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("fetchPosts should dispatch a FETCH_POSTS_SUCCESS  action with a payload", () => {
    const expectedActions = [
      { type: types.FETCHING_POSTS },
      { type: types.FETCH_POSTS_SUCCESS, payload: ["teste"] }
    ];
    fetchMock.getOnce("http://127.0.0.1:3001/posts", ["teste"]);
    const store = mockStore();
    return store
      .dispatch(actions.fetchPosts())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it("fetchPostsFailure should dispatch a FETCH_POSTS_FAILURE action", () => {
    expect(actions.fetchPostsFailure()).toEqual({
      type: types.FETCH_POSTS_FAILURE
    });
  });

  it("fetchPosts should dispatch FETCHING_POSTS and FETCH_POSTS_FAILURE action", () => {
    const store = mockStore();

    const expectedActions = [
      { type: types.FETCHING_POSTS },
      { type: types.FETCH_POSTS_FAILURE }
    ];
    fetchMock.mock("http://127.0.0.1:3001/posts", 400);

    // fetchMock.get("*", {});
    return store
      .dispatch(actions.fetchPosts())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
  // it('updateItems should dispath an UPDATE_ITEMS action', () => {
  //   expect(actions.updateItems({
  //     items: [
  //       { title: 'A New Hope', episode_id: 4 }
  //     ]
  //   }))
  //     .toEqual({
  //       type: 'UPDATE_ITEMS',
  //       items: [
  //         { title: 'A New Hope', episode_id: 4 }
  //       ]
  //     })
  // })

  // it('successful getData should dispatch START_FETCHING and UPDATE_ITEMS action', () => {
  //   const store = mockStore({
  //     fetching: false,
  //     error: false,
  //     items: [],
  //   })

  //   const expectedActions = [
  //     { type: 'START_FETCHING' },
  //     { type: 'UPDATE_ITEMS', items: [{ title: 'A New Hope', episode_id: 4 }]}
  //   ]

  //   fetchMock.get('*', {
  //     body: {
  //       results: [
  //         { title: 'A New Hope', episode_id: 4 }
  //       ]
  //     }
  //   })

  //   return store.dispatch(actions.getData('films'))
  //     .then(() => expect(store.getActions()).toEqual(expectedActions))
  // })
});

import * as actions from "../../actions/PostActions";
import * as types from "../../actions/ActionTypes";
import fetchMock from "fetch-mock";

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
    fetchMock.getOnce("http://127.0.0.1:3001/posts", {
      body: [],
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ["do something"] } }
    ];
    // return store.dispatch(actions.fetchTodos()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions);
  });
});
// });

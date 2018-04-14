import api from "../../middlewares/api";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = action => api(store)(next)(action);
  return { store, next, invoke };
};
describe("API middleware tests", () => {
  it("passes through non API action type", () => {
    const { next, invoke } = create();
    const action = { type: "TEST" };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });
  // it("calls the function", () => {
  //   const { invoke } = create();
  //   const fn = jest.fn();
  //   invoke(fn);
  //   expect(fn).toHaveBeenCalled();
  // });
  // it("passes dispatch and getState", () => {
  //   const { store, invoke } = create();
  //   invoke((dispatch, getState) => {
  //     dispatch("TEST DISPATCH");
  //     getState();
  //   });
  //   expect(store.dispatch).toHaveBeenCalledWith("TEST DISPATCH");
  //   expect(store.getState).toHaveBeenCalled();
  // });
});

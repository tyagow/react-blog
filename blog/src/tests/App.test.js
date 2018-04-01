import React from "react";
import * as Enzyme from "enzyme";
import { MemoryRouter } from "react-router";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "../containers/App";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);

test("invalid path should redirect to 404", () => {
  const wrapper = Enzyme.mount(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});
test("valid path should not redirect to 404", () => {
  const initialState = {
    posts: {
      items: []
    }
  };
  const store = mockStore(initialState);

  const wrapper = Enzyme.mount(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});

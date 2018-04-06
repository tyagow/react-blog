import React from "react";
import * as Enzyme from "enzyme";
import { MemoryRouter } from "react-router";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import mockStore from "../setupTest";

import App from "../../containers/App";
import HomePage from "../../containers/HomePage";
import NotFoundPage from "../../containers/NotFoundPage";
import PostDetailPage from "../../containers/PostDetailPage";

Enzyme.configure({ adapter: new Adapter() });
const fetchMock = require("fetch-mock");
fetchMock.get("*", {});
const initialState = {
  posts: {
    items: []
  }
};

test("invalid path should redirect to 404", () => {
  const wrapper = Enzyme.mount(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});
test("valid path / should render HomePage component", () => {
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
test("valid path /:category/:id should render PostDetail and Comments component", () => {
  const store = mockStore(initialState);

  const wrapper = Enzyme.mount(
    <MemoryRouter initialEntries={["/react/12432"]}>
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    </MemoryRouter>
  );
  expect(wrapper.find(PostDetailPage)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});

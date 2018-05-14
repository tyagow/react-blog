import React from "react";
import * as Enzyme from "enzyme";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import App from "../../containers/App";
import HomePage from "../../containers/HomePage";
import NotFoundPage from "../../containers/NotFoundPage";
import PostDetailPage from "../../containers/PostDetailPage";
import PostForm from "../../components/posts/PostForm";

const initialState = {
  posts: {
    items: [],
    categories: []
  },
  comments: {
    items: []
  }
};
describe("App component", () => {
  test("invalid path should redirect to 404", () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={["/random/deep/todeep"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
  test("valid path / should render HomePage component", () => {
    const store = global.mockStore(initialState);

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
    const store = global.mockStore(initialState);

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
  test("valid path /posts/create should render PostForm", () => {
    const store = global.mockStore(initialState);

    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={["/posts/create"]}>
        <Provider store={store}>
          <div>
            <App />
          </div>
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(PostForm)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
  it("should match App shallow snapshot", () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

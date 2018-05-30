import React from "react";
import * as Enzyme from "enzyme";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import App from "../../containers/App";
import NotFoundPage from "../../containers/NotFoundPage";
import PostDetailPage from "../../containers/PostDetailPage";
import PostCreatePage from "../../containers/PostCreatePage";
import { CategoryPage } from "../../containers/CategoryPage";

const initialState = {
  posts: {
    items: [],
    categories: [],
    filters: { category: "all" }
  },
  comments: {
    items: []
  }
};
describe("App component", () => {
  test("valid path / should render HomePage component", () => {
    const store = global.mockStore(initialState);

    const wrapper = Enzyme.mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <div>
            <App />
          </div>
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(CategoryPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
  test("valid path /:category/:id should render PostDetail and Comments component", () => {
    const store = global.mockStore(initialState);

    const wrapper = Enzyme.shallow(
      <MemoryRouter initialEntries={["/react/12432"]}>
        <Provider store={store}>
          <div>
            <App />
          </div>
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
  test("valid path /posts/create should render PostCreatePage", () => {
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
    expect(wrapper.find(PostCreatePage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
  test("valid path /react/ should render CategoryPage", () => {
    const store = global.mockStore(initialState);

    const wrapper = Enzyme.render(
      <MemoryRouter initialEntries={["/react/"]}>
        <Provider store={store}>
          <div>
            <App />
          </div>
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should match App shallow snapshot", () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

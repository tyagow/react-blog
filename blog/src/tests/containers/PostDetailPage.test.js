import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import PostDetailPage from "../../containers/PostDetailPage";

configure({ adapter: new Adapter() });
const initialState = {
  posts: {
    postDetail: {}
  },
  comments: {
    items: []
  }
};

describe("PostDetailPage", () => {
  it("renders without crashing", () => {
    expect(
      shallow(<PostDetailPage match={{ params: { postId: "1" } }} />)
    ).toMatchSnapshot();
  });
  test("should render CommentForm Component, checking by className", () => {
    expect(
      mount(
        <Provider store={global.mockStore(initialState)}>
          <MemoryRouter>
            <PostDetailPage match={{ params: { postId: "1" } }} />
          </MemoryRouter>
        </Provider>
      ).find(".commentbox-form").length
    ).toBe(1);
  });
});

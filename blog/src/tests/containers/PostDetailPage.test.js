import React from "react";
import { shallow } from "enzyme";

import { PostDetailPage } from "../../containers/PostDetailPage";
import PostDetail from "../../components/posts/PostDetail";

const setup = () => {
  const props = {
    postId: "1",
    getPostById: jest.fn(),
    post: {
      id: 1,
      category: "react",
      title: "Test title",
      commentCount: 4,
      author: "Test Author"
    },
    updatePostDetail: jest.fn(),
    requestAPIDeletePost: jest.fn()
  };
  const enzymeWrapper = shallow(<PostDetailPage {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

describe("PostDetailPage", () => {
  it("renders without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should render a PostDetail component", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(PostDetail).length).toEqual(1);
  });
});

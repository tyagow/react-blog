import React from "react";
import { shallow } from "enzyme";

import { PostLabel } from "../../components/posts/PostLabel";
import CommentCountLabel from "../../components/ui/CommentCountLabel";

function setup() {
  const props = {
    post: {
      id: 1,
      category: "react",
      title: "Test title",
      commentCount: "4",
      author: "Test Author"
    }
  };
  const enzymeWrapper = shallow(<PostLabel {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("PostLabel", () => {
  it("renders PostLabel without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should render post title", () => {
    const { props, enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".postlabel-title").text()).toBe(
      props.post.title
    );
  });
  it("should render post author", () => {
    const { props, enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".postlabel-author").text()).toBe(
      props.post.author
    );
  });
  describe("CommentsCountLabel", () => {
    it("should render CommentsCountLabel  component", () => {
      const { enzymeWrapper } = setup();
      const component = enzymeWrapper.find(CommentCountLabel);
      expect(component.length).toEqual(1);
    });
  });
});

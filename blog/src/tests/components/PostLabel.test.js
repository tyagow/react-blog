import React from "react";
import { shallow } from "enzyme";

import { PostLabel } from "../../components/posts/PostLabel";
import CommentCountLabel from "../../components/ui/CommentCountLabel";

function setup() {
  const onDelete = jest.fn();
  const sendVote = jest.fn();
  const updatePost = jest.fn();
  const props = {
    post: {
      id: 1,
      category: "react",
      title: "Test title",
      commentCount: 4,
      author: "Test Author"
    },
    onDelete: onDelete,
    updatePost: updatePost,
    sendVote: sendVote
  };
  const enzymeWrapper = shallow(<PostLabel {...props} />);
  return {
    props,
    enzymeWrapper,
    onDelete
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
  describe("deleteButton", () => {
    it("should show a delete button and it should call props.onDelete", () => {
      const { enzymeWrapper } = setup();
      const deleteButton = enzymeWrapper.find("[data-test='deleteButton']");
      expect(deleteButton.length).toEqual(1);
    });
    it("should call props.onDelete", () => {
      const { enzymeWrapper, onDelete } = setup();
      const component = enzymeWrapper.find("[data-test='deleteButton']");
      component.simulate("click");
      expect(onDelete).toBeCalled();
    });
  });
});

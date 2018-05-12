import React from "react";
import { shallow } from "enzyme";

import { CommentForm } from "../../components/comments/CommentForm";

const setup = (renderer = shallow) => {
  const createComment = jest.fn();
  const props = {
    createComment: createComment,
    match: { params: { postId: "1" } }
  };
  const enzymeWrapper = renderer(<CommentForm {...props} />);
  return { enzymeWrapper, props, createComment };
};
describe("CommentBox", () => {
  it("Should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it("Should have a place to input a comment with commentbox-TextInput class in it", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".commentbox-TextInput").length).toBe(1);
  });
  it("should have a input type of submit and with commentbox-button class in it", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".commentbox-button").length).toBe(1);
  });
  test("should have form html element", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("form").length).toBe(1);
  });
  test("should have class commentbox-form", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".commentbox-form").length).toBe(1);
  });

  test("should have createComment is called when submit the form", () => {
    const { enzymeWrapper, createComment } = setup();
    const form = enzymeWrapper.find(".commentbox-form");
    form.simulate("submit", { preventDefault() {} });
    expect(createComment).toBeCalled();
  });
  test("should have class commentbox-author", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".commentbox-author").length).toBe(1);
  });
});

// const getPostProps = posts => {
//   const getPosts = jest.fn();
//   const getCategories = jest.fn();
//   const props = {
//     posts: posts ? posts : [post],
//     getCategories: getCategories,
//     getPosts: getPosts
//   };
//   return { props, getCategories, getPosts };
// };

// const post = {
//   id: 1,
//   category: "react",
//   title: "Test title",
//   author: "Test Author"
// };

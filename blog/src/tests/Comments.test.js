import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";

import { Comments } from "../components/comments/Comments";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    postId: "1",
    comments: [{ id: 1, author: "test", voteScore: 1, body: "Body comment" }],
    dispatch: jest.fn()
  };
  const enzymeWrapper = shallow(<Comments {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("Comments", () => {
  it("renders comments without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should render self and subcomponents", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("h3").text()).toBe("Comments");
    const commentAuthor = enzymeWrapper.find("h4.comment-author");
    expect(commentAuthor.length).toBe(1);
    expect(commentAuthor.text()).toBe("test");

    // const todoInputProps = enzymeWrapper.find("TodoTextInput").props();
    // expect(todoInputProps.newTodo).toBe(true);
    // expect(todoInputProps.placeholder).toEqual("What needs to be done?");
  });
  // it("should call addTodo if length of text is greater than 0", () => {
  //   const { enzymeWrapper, props } = setup();
  //   const input = enzymeWrapper.find("TodoTextInput");
  //   input.props().onSave("");
  //   expect(props.addTodo.mock.calls.length).toBe(0);
  //   input.props().onSave("Use Redux");
  //   expect(props.addTodo.mock.calls.length).toBe(1);
  // });
});

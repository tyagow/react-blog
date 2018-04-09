import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { PostLabel } from "../../components/posts/PostLabel";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    post: {
      id: 1,
      category: "react",
      title: "Test title",
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
  it("should render self and subcomponents", () => {
    const { props, enzymeWrapper } = setup();
    expect(enzymeWrapper.find("h3").text()).toBe(props.post.title);
    expect(enzymeWrapper.find("button").text()).toBe(props.post.category);
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

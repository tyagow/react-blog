import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { PostForm } from "../../components/posts/PostForm";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
const setup = (renderer = shallow) => {
  const createPost = jest.fn();
  let history = {
    push: jest.fn()
  };
  const props = {
    createPost: createPost,
    getCategories: jest.fn(),
    history
  };
  const enzymeWrapper = renderer(<PostForm {...props} />);
  return {
    enzymeWrapper,
    props
  };
};
describe("PostForm", () => {
  it("Should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  test("should have createPost props that`s called when form submited", () => {
    const { enzymeWrapper, props } = setup();
    const form = enzymeWrapper.find(".postform-form");
    form.simulate("submit", { preventDefault() {} });
    expect(props.createPost).toBeCalled();
  });
});

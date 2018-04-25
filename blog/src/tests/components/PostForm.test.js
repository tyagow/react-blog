import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { PostForm } from "../../components/posts/PostForm";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
const setup = (renderer = shallow) => {
  const createPost = jest.fn();
  const props = {
    createPost: createPost
  };
  const enzymeWrapper = renderer(<PostForm {...props} />);
  return {
    enzymeWrapper
  };
};
describe("PostForm", () => {
  it("Should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});

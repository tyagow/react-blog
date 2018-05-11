import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { PostLabel } from "../../components/posts/PostLabel";

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
  describe("sendUpVote", () => {
    it("should ", () => {});
  });
});

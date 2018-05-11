import React from "react";
import { shallow } from "enzyme";
import { PostDetail } from "../../components/posts/PostDetail";
function setup() {
  const props = { postId: "1" };
  const enzymeWrapper = shallow(<PostDetail {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("PostDetail", () => {
  it("renders PostDetail without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { Comments } from "../../components/comments/Comments";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    postId: "1",
    comments: [{ id: 1, author: "test", voteScore: 1, body: "Body comment" }],
    dispatch: jest.fn(),
    fetchCommentsByPostId: jest.fn()
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
    const title = enzymeWrapper.find("h3").text();
    expect(title).toContain("Comments");
    const commentAuthor = enzymeWrapper.find("h4.comment-author");
    expect(commentAuthor.length).toBe(1);
    expect(commentAuthor.text()).toBe("test");
  });
  describe("total comments", () => {
    it("should display the total comments in the title ", () => {
      const { enzymeWrapper, props } = setup();
      const title = enzymeWrapper.find("h3").text();

      expect(title).toContain("(" + props.comments.length + ")");
    });
  });
});
